(window.__LOADABLE_LOADED_CHUNKS__ =
  window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [0],
  {
    1115: function (e, t, n) {
      "use strict";
      (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(310),
          o = n(311),
          i = n(312);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(e, t) {
          if (a() < t) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(e, t, n);
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return d(this, e);
          }
          return l(this, e, t, n);
        }
        function l(e, t, n, r) {
          if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, n, r) {
                if ((t.byteLength, n < 0 || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(t)
                    : void 0 === r
                    ? new Uint8Array(t, n)
                    : new Uint8Array(t, n, r);
                u.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = u.prototype)
                  : (e = f(e, t));
                return e;
              })(e, t, n, r)
            : "string" == typeof t
            ? (function (e, t, n) {
                ("string" == typeof n && "" !== n) || (n = "utf8");
                if (!u.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | h(t, n),
                  o = (e = s(e, r)).write(t, n);
                o !== r && (e = e.slice(0, o));
                return e;
              })(e, t, n)
            : (function (e, t) {
                if (u.isBuffer(t)) {
                  var n = 0 | p(t.length);
                  return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || (r = t.length) != r
                      ? s(e, 0)
                      : f(e, t);
                  if ("Buffer" === t.type && i(t.data)) return f(e, t.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function c(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function d(e, t) {
          if ((c(t), (e = s(e, t < 0 ? 0 : 0 | p(t))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function f(e, t) {
          var n = t.length < 0 ? 0 : 0 | p(t.length);
          e = s(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function p(e) {
          if (e >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function h(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return j(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return W(e).length;
              default:
                if (r) return j(e).length;
                (t = ("" + t).toLowerCase()), (r = !0);
            }
        }
        function m(e, t, n) {
          var r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return O(this, t, n);
              case "utf8":
              case "utf-8":
                return k(this, t, n);
              case "ascii":
                return x(this, t, n);
              case "latin1":
              case "binary":
                return I(this, t, n);
              case "base64":
                return C(this, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return A(this, t, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (r = !0);
            }
        }
        function g(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function v(e, t, n, r, o) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = o ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (o) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!o) return -1;
            n = 0;
          }
          if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
            return 0 === t.length ? -1 : _(e, t, n, r, o);
          if ("number" == typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : _(e, [t], n, r, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function _(e, t, n, r, o) {
          var i,
            a = 1,
            s = e.length,
            u = t.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (n /= 2);
          }
          function l(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (o) {
            var c = -1;
            for (i = n; i < s; i++)
              if (l(e, i) === l(t, -1 === c ? 0 : i - c)) {
                if ((-1 === c && (c = i), i - c + 1 === u)) return c * a;
              } else -1 !== c && (i -= i - c), (c = -1);
          } else
            for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
              for (var d = !0, f = 0; f < u; f++)
                if (l(e, i + f) !== l(t, f)) {
                  d = !1;
                  break;
                }
              if (d) return i;
            }
          return -1;
        }
        function y(e, t, n, r) {
          n = Number(n) || 0;
          var o = e.length - n;
          r ? (r = Number(r)) > o && (r = o) : (r = o);
          var i = t.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          r > i / 2 && (r = i / 2);
          for (var a = 0; a < r; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            e[n + a] = s;
          }
          return a;
        }
        function w(e, t, n, r) {
          return H(j(t, e.length - n), e, n, r);
        }
        function b(e, t, n, r) {
          return H(
            (function (e) {
              for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function S(e, t, n, r) {
          return b(e, t, n, r);
        }
        function E(e, t, n, r) {
          return H(W(t), e, n, r);
        }
        function T(e, t, n, r) {
          return H(
            (function (e, t) {
              for (
                var n, r, o, i = [], a = 0;
                a < e.length && !((t -= 2) < 0);
                ++a
              )
                (n = e.charCodeAt(a)),
                  (r = n >> 8),
                  (o = n % 256),
                  i.push(o),
                  i.push(r);
              return i;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function C(e, t, n) {
          return 0 === t && n === e.length
            ? r.fromByteArray(e)
            : r.fromByteArray(e.slice(t, n));
        }
        function k(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], o = t; o < n; ) {
            var i,
              a,
              s,
              u,
              l = e[o],
              c = null,
              d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (o + d <= n)
              switch (d) {
                case 1:
                  l < 128 && (c = l);
                  break;
                case 2:
                  128 == (192 & (i = e[o + 1])) &&
                    (u = ((31 & l) << 6) | (63 & i)) > 127 &&
                    (c = u);
                  break;
                case 3:
                  (i = e[o + 1]),
                    (a = e[o + 2]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      (u = ((15 & l) << 12) | ((63 & i) << 6) | (63 & a)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (c = u);
                  break;
                case 4:
                  (i = e[o + 1]),
                    (a = e[o + 2]),
                    (s = e[o + 3]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      (u =
                        ((15 & l) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      u < 1114112 &&
                      (c = u);
              }
            null === c
              ? ((c = 65533), (d = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (o += d);
          }
          return (function (e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            var n = "",
              r = 0;
            for (; r < t; )
              n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
            return n;
          })(r);
        }
        (t.Buffer = u),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function (e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function (e, t, n) {
            return l(null, e, t, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (e, t, n) {
            return (function (e, t, n, r) {
              return (
                c(t),
                t <= 0
                  ? s(e, t)
                  : void 0 !== n
                  ? "string" == typeof r
                    ? s(e, t).fill(n, r)
                    : s(e, t).fill(n)
                  : s(e, t)
              );
            })(null, e, t, n);
          }),
          (u.allocUnsafe = function (e) {
            return d(null, e);
          }),
          (u.allocUnsafeSlow = function (e) {
            return d(null, e);
          }),
          (u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var n = e.length, r = t.length, o = 0, i = Math.min(n, r);
              o < i;
              ++o
            )
              if (e[o] !== t[o]) {
                (n = e[o]), (r = t[o]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (e, t) {
            if (!i(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t)
              for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
              o = 0;
            for (n = 0; n < e.length; ++n) {
              var a = e[n];
              if (!u.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(r, o), (o += a.length);
            }
            return r;
          }),
          (u.byteLength = h),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              g(this, t, t + 3), g(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? k(this, 0, e)
              : m.apply(this, arguments);
          }),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function () {
            var e = "",
              n = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (u.prototype.compare = function (e, t, n, r, o) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              t < 0 || n > e.length || r < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= o && t >= n) return 0;
            if (r >= o) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var i = (o >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (t >>>= 0),
                s = Math.min(i, a),
                l = this.slice(r, o),
                c = e.slice(t, n),
                d = 0;
              d < s;
              ++d
            )
              if (l[d] !== c[d]) {
                (i = l[d]), (a = c[d]);
                break;
              }
            return i < a ? -1 : a < i ? 1 : 0;
          }),
          (u.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (u.prototype.indexOf = function (e, t, n) {
            return v(this, e, t, n, !0);
          }),
          (u.prototype.lastIndexOf = function (e, t, n) {
            return v(this, e, t, n, !1);
          }),
          (u.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" == typeof t)
              (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var o = this.length - t;
            if (
              ((void 0 === n || n > o) && (n = o),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ; )
              switch (r) {
                case "hex":
                  return y(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return w(this, e, t, n);
                case "ascii":
                  return b(this, e, t, n);
                case "latin1":
                case "binary":
                  return S(this, e, t, n);
                case "base64":
                  return E(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, e, t, n);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (i = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function x(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
          return r;
        }
        function I(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
          return r;
        }
        function O(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var o = "", i = t; i < n; ++i) o += F(e[i]);
          return o;
        }
        function A(e, t, n) {
          for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
            o += String.fromCharCode(r[i] + 256 * r[i + 1]);
          return o;
        }
        function P(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function L(e, t, n, r, o, i) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function R(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
            e[n + o] =
              (t & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
        }
        function N(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
            e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255;
        }
        function D(e, t, n, r, o, i) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function M(e, t, n, r, i) {
          return i || D(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4;
        }
        function U(e, t, n, r, i) {
          return i || D(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function (e, t) {
          var n,
            r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var o = t - e;
            n = new u(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + e];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || P(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
              r += this[e + i] * o;
            return r;
          }),
          (u.prototype.readUIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || P(e, t, this.length);
            for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
              r += this[e + --t] * o;
            return r;
          }),
          (u.prototype.readUInt8 = function (e, t) {
            return t || P(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function (e, t) {
            return t || P(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (e, t) {
            return t || P(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function (e, t) {
            return (
              t || P(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (e, t) {
            return (
              t || P(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || P(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
              r += this[e + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (u.prototype.readIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || P(e, t, this.length);
            for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
              i += this[e + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
          }),
          (u.prototype.readInt8 = function (e, t) {
            return (
              t || P(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (u.prototype.readInt16LE = function (e, t) {
            t || P(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (e, t) {
            t || P(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return (
              t || P(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return (
              t || P(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (u.prototype.readFloatLE = function (e, t) {
            return t || P(e, 4, this.length), o.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return t || P(e, 4, this.length), o.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return t || P(e, 8, this.length), o.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return t || P(e, 8, this.length), o.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
              i = 0;
            for (this[t] = 255 & e; ++i < n && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + n;
          }),
          (u.prototype.writeUIntBE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
              i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + n;
          }),
          (u.prototype.writeUInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : R(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : R(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : N(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : N(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              L(this, e, t, n, o - 1, -o);
            }
            var i = 0,
              a = 1,
              s = 0;
            for (this[t] = 255 & e; ++i < n && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
                (this[t + i] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (u.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              L(this, e, t, n, o - 1, -o);
            }
            var i = n - 1,
              a = 1,
              s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
                (this[t + i] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (u.prototype.writeInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : R(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : R(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : N(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || L(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : N(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function (e, t, n) {
            return M(this, e, t, !0, n);
          }),
          (u.prototype.writeFloatBE = function (e, t, n) {
            return M(this, e, t, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (e, t, n) {
            return U(this, e, t, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (e, t, n) {
            return U(this, e, t, !1, n);
          }),
          (u.prototype.copy = function (e, t, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              e.length - t < r - n && (r = e.length - t + n);
            var o,
              i = r - n;
            if (this === e && n < t && t < r)
              for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
            else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (o = 0; o < i; ++o) e[o + t] = this[o + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
            return i;
          }),
          (u.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                1 === e.length)
              ) {
                var o = e.charCodeAt(0);
                o < 256 && (e = o);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= t) return this;
            var i;
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (i = t; i < n; ++i) this[i] = e;
            else {
              var a = u.isBuffer(e) ? e : j(new u(e, r).toString()),
                s = a.length;
              for (i = 0; i < n - t; ++i) this[i + t] = a[i % s];
            }
            return this;
          });
        var B = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function j(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!o) {
                if (n > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
                continue;
              }
              n = 65536 + (((o - 55296) << 10) | (n - 56320));
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), n < 128)) {
              if ((t -= 1) < 0) break;
              i.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              i.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              i.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return i;
        }
        function W(e) {
          return r.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(B, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function H(e, t, n, r) {
          for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
            t[o + n] = e[o];
          return o;
        }
      }).call(this, n(32));
    },
    1116: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(481),
          o = n(845),
          i = n(1117),
          a = n(851);
        function s(e) {
          var t = new i(e),
            n = o(i.prototype.request, t);
          return r.extend(n, i.prototype, t), r.extend(n, t), n;
        }
        var u = s(n(848));
        (u.Axios = i),
          (u.create = function (e) {
            return s(a(u.defaults, e));
          }),
          (u.Cancel = n(852)),
          (u.CancelToken = n(1130)),
          (u.isCancel = n(847)),
          (u.all = function (e) {
            return t.all(e);
          }),
          (u.spread = n(1131)),
          (e.exports = u),
          (e.exports.default = u);
      }).call(this, n(14));
    },
    1117: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(481),
          o = n(846),
          i = n(1118),
          a = n(1119),
          s = n(851);
        function u(e) {
          (this.defaults = e),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (u.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = s(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var n = [a, void 0],
            r = t.resolve(e);
          for (
            this.interceptors.request.forEach(function (e) {
              n.unshift(e.fulfilled, e.rejected);
            }),
              this.interceptors.response.forEach(function (e) {
                n.push(e.fulfilled, e.rejected);
              });
            n.length;

          )
            r = r.then(n.shift(), n.shift());
          return r;
        }),
          (u.prototype.getUri = function (e) {
            return (
              (e = s(this.defaults, e)),
              o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          r.forEach(["delete", "get", "head", "options"], function (e) {
            u.prototype[e] = function (t, n) {
              return this.request(r.merge(n || {}, { method: e, url: t }));
            };
          }),
          r.forEach(["post", "put", "patch"], function (e) {
            u.prototype[e] = function (t, n, o) {
              return this.request(
                r.merge(o || {}, { method: e, url: t, data: n })
              );
            };
          }),
          (e.exports = u);
      }).call(this, n(14));
    },
    1118: function (e, t, n) {
      "use strict";
      var r = n(481);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          r.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    1119: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(481),
          o = n(1120),
          i = n(847),
          a = n(848);
        function s(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            s(e),
            (e.headers = e.headers || {}),
            (e.data = o(e.data, e.headers, e.transformRequest)),
            (e.headers = r.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            r.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || a.adapter)(e).then(
              function (t) {
                return (
                  s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
                );
              },
              function (n) {
                return (
                  i(n) ||
                    (s(e),
                    n &&
                      n.response &&
                      (n.response.data = o(
                        n.response.data,
                        n.response.headers,
                        e.transformResponse
                      ))),
                  t.reject(n)
                );
              }
            )
          );
        };
      }).call(this, n(14));
    },
    1120: function (e, t, n) {
      "use strict";
      var r = n(481);
      e.exports = function (e, t, n) {
        return (
          r.forEach(n, function (n) {
            e = n(e, t);
          }),
          e
        );
      };
    },
    1121: function (e, t, n) {
      "use strict";
      var r = n(481);
      e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
          r !== t &&
            r.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[r]);
        });
      };
    },
    1122: function (e, t, n) {
      "use strict";
      var r = n(850);
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        !o || o(n.status)
          ? e(n)
          : t(
              r(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n
              )
            );
      };
    },
    1123: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    1124: function (e, t, n) {
      "use strict";
      var r = n(1125),
        o = n(1126);
      e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t;
      };
    },
    1125: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    1126: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    1127: function (e, t, n) {
    },
    1128: function (e, t, n) {
      "use strict";
      var r = n(481);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function o(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    1129: function (e, t, n) {
      "use strict";
      var r = n(481);
      e.exports = r.isStandardBrowserEnv()
        ? {
            write: function (e, t, n, o, i, a) {
              var s = [];
              s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                (document.cookie = s.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    1130: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(852);
        function o(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var n;
          this.promise = new t(function (e) {
            n = e;
          });
          var o = this;
          e(function (e) {
            o.reason || ((o.reason = new r(e)), n(o.reason));
          });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      }).call(this, n(14));
    },
    1131: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    1132: function (e, t, n) {
      var r = n(0),
        o = n(853),
        i = n(854),
        a = i.setStyleProp,
        s = i.canTextBeChildOfNode;
      function u(e) {
        return (
          i.PRESERVE_CUSTOM_ATTRIBUTES &&
          "tag" === e.type &&
          i.isCustomComponent(e.name, e.attribs)
        );
      }
      e.exports = function e(t, n) {
        for (
          var i,
            l,
            c,
            d,
            f,
            p = (n = n || {}).library || r,
            h = p.cloneElement,
            m = p.createElement,
            g = p.isValidElement,
            v = [],
            _ = "function" == typeof n.replace,
            y = n.trim,
            w = 0,
            b = t.length;
          w < b;
          w++
        )
          if (((i = t[w]), _ && g((c = n.replace(i)))))
            b > 1 && (c = h(c, { key: c.key || w })), v.push(c);
          else if ("text" !== i.type) {
            switch (
              ((d = i.attribs),
              u(i) ? a(d.style, d) : d && (d = o(d, i.name)),
              (f = null),
              i.type)
            ) {
              case "script":
              case "style":
                i.children[0] &&
                  (d.dangerouslySetInnerHTML = { __html: i.children[0].data });
                break;
              case "tag":
                "textarea" === i.name && i.children[0]
                  ? (d.defaultValue = i.children[0].data)
                  : i.children && i.children.length && (f = e(i.children, n));
                break;
              default:
                continue;
            }
            b > 1 && (d.key = w), v.push(m(i.name, d, f));
          } else {
            if ((l = !i.data.trim().length) && i.parent && !s(i.parent))
              continue;
            if (y && l) continue;
            v.push(i.data);
          }
        return 1 === v.length ? v[0] : v;
      };
    },
    1133: function (e, t, n) {
      var r, o, i;
      /*!
       * Clamp.js 0.7.0
       * Based on: https://github.com/xavi160/Clamp.js/commit/e313818da231b8dd8fd603dd9c9a61a9d725c22f
       * Mixins:
       * - https://github.com/josephschmitt/Clamp.js/pull/50
       * - https://github.com/josephschmitt/Clamp.js/pull/49
       *
       * Copyright 2011-2013, Joseph Schmitt http://joe.sh
       * Released under the WTFPL license
       * http://sam.zoy.org/wtfpl/
       */ (o = []),
        void 0 ===
          (i =
            "function" ==
            typeof (r = function () {
              return function (e, t) {
                t = t || {};
                var n,
                  r = window,
                  o = {
                    clamp: t.clamp || 2,
                    useNativeClamp:
                      void 0 === t.useNativeClamp || t.useNativeClamp,
                    splitOnChars: t.splitOnChars || [".", "-", "–", "—", " "],
                    animate: t.animate || !1,
                    truncationChar: t.truncationChar || "…",
                    truncationHTML: t.truncationHTML,
                  },
                  i = e.style,
                  a = e.innerHTML,
                  s = void 0 !== e.style.webkitLineClamp,
                  u = o.clamp,
                  l =
                    u.indexOf && (u.indexOf("px") > -1 || u.indexOf("em") > -1);
                function c(e, t) {
                  return (
                    r.getComputedStyle ||
                      (r.getComputedStyle = function (e, t) {
                        return (
                          (this.el = e),
                          (this.getPropertyValue = function (t) {
                            var n = /(\-([a-z]){1})/g;
                            return (
                              "float" == t && (t = "styleFloat"),
                              n.test(t) &&
                                (t = t.replace(n, function () {
                                  return arguments[2].toUpperCase();
                                })),
                              e.currentStyle && e.currentStyle[t]
                                ? e.currentStyle[t]
                                : null
                            );
                          }),
                          this
                        );
                      }),
                    r.getComputedStyle(e, null).getPropertyValue(t)
                  );
                }
                function d(t) {
                  var n = t || e.parentNode.clientHeight - e.offsetTop,
                    r = f(e);
                  return Math.max(Math.floor(n / r), 0);
                }
                function f(e) {
                  var t = c(e, "line-height");
                  return (
                    "normal" == t && (t = 1.2 * parseFloat(c(e, "font-size"))),
                    Math.round(parseFloat(t))
                  );
                }
                o.truncationHTML &&
                  ((n = document.createElement("span")).innerHTML =
                    o.truncationHTML);
                var p,
                  h,
                  m,
                  g,
                  v = o.splitOnChars.slice(0),
                  _ = v[0];
                function y(e) {
                  if (e.lastChild) {
                    if (e.lastChild.children && e.lastChild.children.length > 0)
                      return y(Array.prototype.slice.call(e.children).pop());
                    if (
                      e.lastChild &&
                      e.lastChild.nodeValue &&
                      e.lastChild.nodeValue != o.truncationChar &&
                      e.lastChild.nodeType !== Node.COMMENT_NODE
                    )
                      return e.lastChild;
                    var t = e.lastChild;
                    do {
                      if (!t) return;
                      if (
                        3 === t.nodeType &&
                        -1 === ["", o.truncationChar].indexOf(t.nodeValue) &&
                        e.lastChild.nodeType !== Node.COMMENT_NODE
                      )
                        return t;
                      if (t.lastChild) {
                        var n = y(t);
                        if (n) return n;
                      }
                      t.parentNode.removeChild(t);
                    } while ((t = t.previousSibling));
                  }
                }
                function w(e, t) {
                  e.nodeValue = t + o.truncationChar;
                }
                if (
                  ("auto" == u ? (u = d()) : l && (u = d(parseInt(u, 10))),
                  s && o.useNativeClamp)
                )
                  (i.overflow = "hidden"),
                    (i.textOverflow = "ellipsis"),
                    (i.webkitBoxOrient = "vertical"),
                    (i.display = "-webkit-box"),
                    (i.webkitLineClamp = u),
                    l && (i.height = o.clamp + "px");
                else {
                  var b = ((g = u), f(e) * g);
                  b < e.clientHeight &&
                    (m = (function t(r, i) {
                      if (r && i) {
                        var a = r.nodeValue.replace(o.truncationChar, "");
                        if (
                          (p ||
                            ((_ = v.length > 0 ? v.shift() : ""),
                            (p = a.split(_))),
                          p.length > 1
                            ? ((h = p.pop()), w(r, p.join(_)))
                            : (p = null),
                          n &&
                            ((r.nodeValue = r.nodeValue.replace(
                              o.truncationChar,
                              ""
                            )),
                            (e.innerHTML =
                              r.nodeValue +
                              " " +
                              n.innerHTML +
                              o.truncationChar)),
                          p)
                        ) {
                          if (e.clientHeight <= i) {
                            if (!(v.length >= 0 && "" !== _))
                              return e.innerHTML;
                            w(r, p.join(_) + _ + h), (p = null);
                          }
                        } else
                          "" === _ &&
                            (w(r, ""),
                            (r = y(e)),
                            (v = o.splitOnChars.slice(0)),
                            (_ = v[0]),
                            (p = null),
                            (h = null));
                        if (!o.animate) return t(r, i);
                        setTimeout(
                          function () {
                            t(r, i);
                          },
                          !0 === o.animate ? 10 : o.animate
                        );
                      }
                    })(y(e), b));
                }
                return { original: a, clamped: m };
              };
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    1181: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * react-dom-server-legacy.browser.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(0);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
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
      var i = Object.prototype.hasOwnProperty,
        a =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        s = {},
        u = {};
      function l(e) {
        return (
          !!i.call(u, e) ||
          (!i.call(s, e) && (a.test(e) ? (u[e] = !0) : ((s[e] = !0), !1)))
        );
      }
      function c(e, t, n, r, o, i, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = a);
      }
      var d = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          d[e] = new c(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          d[t] = new c(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            d[e] = new c(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          d[e] = new c(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            d[e] = new c(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          d[e] = new c(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          d[e] = new c(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          d[e] = new c(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          d[e] = new c(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var f = /[\-:]([a-z])/g;
      function p(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(f, p);
          d[t] = new c(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(f, p);
            d[t] = new c(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(f, p);
          d[t] = new c(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          d[e] = new c(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (d.xlinkHref = new c(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          d[e] = new c(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var h = {
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
        m = ["Webkit", "ms", "Moz", "O"];
      Object.keys(h).forEach(function (e) {
        m.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (h[t] = h[e]);
        });
      });
      var g = /["'&<>]/;
      function v(e) {
        if ("boolean" == typeof e || "number" == typeof e) return "" + e;
        e = "" + e;
        var t = g.exec(e);
        if (t) {
          var n,
            r = "",
            o = 0;
          for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
              case 34:
                t = "&quot;";
                break;
              case 38:
                t = "&amp;";
                break;
              case 39:
                t = "&#x27;";
                break;
              case 60:
                t = "&lt;";
                break;
              case 62:
                t = "&gt;";
                break;
              default:
                continue;
            }
            o !== n && (r += e.substring(o, n)), (o = n + 1), (r += t);
          }
          e = o !== n ? r + e.substring(o, n) : r;
        }
        return e;
      }
      var _ = /([A-Z])/g,
        y = /^ms-/,
        w = Array.isArray;
      function b(e, t) {
        return { insertionMode: e, selectedValue: t };
      }
      var S = new Map();
      function E(e, t, n) {
        if ("object" != typeof n) throw Error(o(62));
        for (var r in ((t = !0), n))
          if (i.call(n, r)) {
            var a = n[r];
            if (null != a && "boolean" != typeof a && "" !== a) {
              if (0 === r.indexOf("--")) {
                var s = v(r);
                a = v(("" + a).trim());
              } else {
                s = r;
                var u = S.get(s);
                void 0 !== u ||
                  ((u = v(
                    s.replace(_, "-$1").toLowerCase().replace(y, "-ms-")
                  )),
                  S.set(s, u)),
                  (s = u),
                  (a =
                    "number" == typeof a
                      ? 0 === a || i.call(h, r)
                        ? "" + a
                        : a + "px"
                      : v(("" + a).trim()));
              }
              t
                ? ((t = !1), e.push(' style="', s, ":", a))
                : e.push(";", s, ":", a);
            }
          }
        t || e.push('"');
      }
      function T(e, t, n, r) {
        switch (n) {
          case "style":
            return void E(e, t, r);
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          !(2 < n.length) ||
          ("o" !== n[0] && "O" !== n[0]) ||
          ("n" !== n[1] && "N" !== n[1])
        )
          if (null !== (t = d.hasOwnProperty(n) ? d[n] : null)) {
            switch (typeof r) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!t.acceptsBooleans) return;
            }
            switch (((n = t.attributeName), t.type)) {
              case 3:
                r && e.push(" ", n, '=""');
                break;
              case 4:
                !0 === r
                  ? e.push(" ", n, '=""')
                  : !1 !== r && e.push(" ", n, '="', v(r), '"');
                break;
              case 5:
                isNaN(r) || e.push(" ", n, '="', v(r), '"');
                break;
              case 6:
                !isNaN(r) && 1 <= r && e.push(" ", n, '="', v(r), '"');
                break;
              default:
                t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', v(r), '"');
            }
          } else if (l(n)) {
            switch (typeof r) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (
                  "data-" !== (t = n.toLowerCase().slice(0, 5)) &&
                  "aria-" !== t
                )
                  return;
            }
            e.push(" ", n, '="', v(r), '"');
          }
      }
      function C(e, t, n) {
        if (null != t) {
          if (null != n) throw Error(o(60));
          if ("object" != typeof t || !("__html" in t)) throw Error(o(61));
          null != (t = t.__html) && e.push("" + t);
        }
      }
      function k(e, t, n, r) {
        e.push(O(n));
        var o,
          a = (n = null);
        for (o in t)
          if (i.call(t, o)) {
            var s = t[o];
            if (null != s)
              switch (o) {
                case "children":
                  n = s;
                  break;
                case "dangerouslySetInnerHTML":
                  a = s;
                  break;
                default:
                  T(e, r, o, s);
              }
          }
        return (
          e.push(">"),
          C(e, a, n),
          "string" == typeof n ? (e.push(v(n)), null) : n
        );
      }
      var x = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        I = new Map();
      function O(e) {
        var t = I.get(e);
        if (void 0 === t) {
          if (!x.test(e)) throw Error(o(65, e));
          (t = "<" + e), I.set(e, t);
        }
        return t;
      }
      function A(e, t, n, a, s) {
        switch (t) {
          case "select":
            e.push(O("select"));
            var u = null,
              c = null;
            for (h in n)
              if (i.call(n, h)) {
                var d = n[h];
                if (null != d)
                  switch (h) {
                    case "children":
                      u = d;
                      break;
                    case "dangerouslySetInnerHTML":
                      c = d;
                      break;
                    case "defaultValue":
                    case "value":
                      break;
                    default:
                      T(e, a, h, d);
                  }
              }
            return e.push(">"), C(e, c, u), u;
          case "option":
            (c = s.selectedValue), e.push(O("option"));
            var f = (d = null),
              p = null,
              h = null;
            for (u in n)
              if (i.call(n, u)) {
                var m = n[u];
                if (null != m)
                  switch (u) {
                    case "children":
                      d = m;
                      break;
                    case "selected":
                      p = m;
                      break;
                    case "dangerouslySetInnerHTML":
                      h = m;
                      break;
                    case "value":
                      f = m;
                    default:
                      T(e, a, u, m);
                  }
              }
            if (null != c)
              if (
                ((n =
                  null !== f
                    ? "" + f
                    : (function (e) {
                        var t = "";
                        return (
                          r.Children.forEach(e, function (e) {
                            null != e && (t += e);
                          }),
                          t
                        );
                      })(d)),
                w(c))
              ) {
                for (a = 0; a < c.length; a++)
                  if ("" + c[a] === n) {
                    e.push(' selected=""');
                    break;
                  }
              } else "" + c === n && e.push(' selected=""');
            else p && e.push(' selected=""');
            return e.push(">"), C(e, h, d), d;
          case "textarea":
            for (d in (e.push(O("textarea")), (h = c = u = null), n))
              if (i.call(n, d) && null != (f = n[d]))
                switch (d) {
                  case "children":
                    h = f;
                    break;
                  case "value":
                    u = f;
                    break;
                  case "defaultValue":
                    c = f;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(o(91));
                  default:
                    T(e, a, d, f);
                }
            if ((null === u && null !== c && (u = c), e.push(">"), null != h)) {
              if (null != u) throw Error(o(92));
              if (w(h) && 1 < h.length) throw Error(o(93));
              u = "" + h;
            }
            return (
              "string" == typeof u && "\n" === u[0] && e.push("\n"),
              null !== u && e.push(v("" + u)),
              null
            );
          case "input":
            for (c in (e.push(O("input")), (f = h = d = u = null), n))
              if (i.call(n, c) && null != (p = n[c]))
                switch (c) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(399, "input"));
                  case "defaultChecked":
                    f = p;
                    break;
                  case "defaultValue":
                    d = p;
                    break;
                  case "checked":
                    h = p;
                    break;
                  case "value":
                    u = p;
                    break;
                  default:
                    T(e, a, c, p);
                }
            return (
              null !== h
                ? T(e, a, "checked", h)
                : null !== f && T(e, a, "checked", f),
              null !== u
                ? T(e, a, "value", u)
                : null !== d && T(e, a, "value", d),
              e.push("/>"),
              null
            );
          case "menuitem":
            for (var g in (e.push(O("menuitem")), n))
              if (i.call(n, g) && null != (u = n[g]))
                switch (g) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(400));
                  default:
                    T(e, a, g, u);
                }
            return e.push(">"), null;
          case "title":
            for (m in (e.push(O("title")), (u = null), n))
              if (i.call(n, m) && null != (c = n[m]))
                switch (m) {
                  case "children":
                    u = c;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(o(434));
                  default:
                    T(e, a, m, c);
                }
            return e.push(">"), u;
          case "listing":
          case "pre":
            for (f in (e.push(O(t)), (c = u = null), n))
              if (i.call(n, f) && null != (d = n[f]))
                switch (f) {
                  case "children":
                    u = d;
                    break;
                  case "dangerouslySetInnerHTML":
                    c = d;
                    break;
                  default:
                    T(e, a, f, d);
                }
            if ((e.push(">"), null != c)) {
              if (null != u) throw Error(o(60));
              if ("object" != typeof c || !("__html" in c)) throw Error(o(61));
              null != (n = c.__html) &&
                ("string" == typeof n && 0 < n.length && "\n" === n[0]
                  ? e.push("\n", n)
                  : e.push("" + n));
            }
            return "string" == typeof u && "\n" === u[0] && e.push("\n"), u;
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            for (var _ in (e.push(O(t)), n))
              if (i.call(n, _) && null != (u = n[_]))
                switch (_) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(399, t));
                  default:
                    T(e, a, _, u);
                }
            return e.push("/>"), null;
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return k(e, n, t, a);
          case "html":
            return (
              0 === s.insertionMode && e.push("<!DOCTYPE html>"), k(e, n, t, a)
            );
          default:
            if (-1 === t.indexOf("-") && "string" != typeof n.is)
              return k(e, n, t, a);
            for (p in (e.push(O(t)), (c = u = null), n))
              if (i.call(n, p) && null != (d = n[p]))
                switch (p) {
                  case "children":
                    u = d;
                    break;
                  case "dangerouslySetInnerHTML":
                    c = d;
                    break;
                  case "style":
                    E(e, a, d);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                    break;
                  default:
                    l(p) &&
                      "function" != typeof d &&
                      "symbol" != typeof d &&
                      e.push(" ", p, '="', v(d), '"');
                }
            return e.push(">"), C(e, c, u), u;
        }
      }
      function P(e, t, n) {
        if ((e.push('\x3c!--$?--\x3e<template id="'), null === n))
          throw Error(o(395));
        return e.push(n), e.push('"></template>');
      }
      var L = /[<\u2028\u2029]/g;
      function R(e) {
        return JSON.stringify(e).replace(L, function (e) {
          switch (e) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      function N(e, t, n, r) {
        return n.generateStaticMarkup
          ? (e.push(v(t)), !1)
          : ("" === t
              ? (e = r)
              : (r && e.push("\x3c!-- --\x3e"), e.push(v(t)), (e = !0)),
            e);
      }
      var D = Object.assign,
        M = Symbol.for("react.element"),
        U = Symbol.for("react.portal"),
        B = Symbol.for("react.fragment"),
        F = Symbol.for("react.strict_mode"),
        j = Symbol.for("react.profiler"),
        W = Symbol.for("react.provider"),
        H = Symbol.for("react.context"),
        q = Symbol.for("react.forward_ref"),
        z = Symbol.for("react.suspense"),
        Y = Symbol.for("react.suspense_list"),
        V = Symbol.for("react.memo"),
        G = Symbol.for("react.lazy"),
        $ = Symbol.for("react.scope"),
        Z = Symbol.for("react.debug_trace_mode"),
        J = Symbol.for("react.legacy_hidden"),
        X = Symbol.for("react.default_value"),
        K = Symbol.iterator;
      function Q(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case B:
            return "Fragment";
          case U:
            return "Portal";
          case j:
            return "Profiler";
          case F:
            return "StrictMode";
          case z:
            return "Suspense";
          case Y:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case H:
              return (e.displayName || "Context") + ".Consumer";
            case W:
              return (e._context.displayName || "Context") + ".Provider";
            case q:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case V:
              return null !== (t = e.displayName || null)
                ? t
                : Q(e.type) || "Memo";
            case G:
              (t = e._payload), (e = e._init);
              try {
                return Q(e(t));
              } catch (e) {}
          }
        return null;
      }
      var ee = {};
      function te(e, t) {
        if (!(e = e.contextTypes)) return ee;
        var n,
          r = {};
        for (n in e) r[n] = t[n];
        return r;
      }
      var ne = null;
      function re(e, t) {
        if (e !== t) {
          (e.context._currentValue2 = e.parentValue), (e = e.parent);
          var n = t.parent;
          if (null === e) {
            if (null !== n) throw Error(o(401));
          } else {
            if (null === n) throw Error(o(401));
            re(e, n);
          }
          t.context._currentValue2 = t.value;
        }
      }
      function oe(e) {
        var t = ne;
        t !== e &&
          (null === t
            ? (function e(t) {
                var n = t.parent;
                null !== n && e(n), (t.context._currentValue2 = t.value);
              })(e)
            : null === e
            ? (function e(t) {
                (t.context._currentValue2 = t.parentValue),
                  null !== (t = t.parent) && e(t);
              })(t)
            : t.depth === e.depth
            ? re(t, e)
            : t.depth > e.depth
            ? (function e(t, n) {
                if (
                  ((t.context._currentValue2 = t.parentValue),
                  null === (t = t.parent))
                )
                  throw Error(o(402));
                t.depth === n.depth ? re(t, n) : e(t, n);
              })(t, e)
            : (function e(t, n) {
                var r = n.parent;
                if (null === r) throw Error(o(402));
                t.depth === r.depth ? re(t, r) : e(t, r),
                  (n.context._currentValue2 = n.value);
              })(t, e),
          (ne = e));
      }
      var ie = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          null !== (e = e._reactInternals).queue && e.queue.push(t);
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals).replace = !0), (e.queue = [t]);
        },
        enqueueForceUpdate: function () {},
      };
      function ae(e, t, n, r) {
        var o = void 0 !== e.state ? e.state : null;
        (e.updater = ie), (e.props = n), (e.state = o);
        var i = { queue: [], replace: !1 };
        e._reactInternals = i;
        var a = t.contextType;
        if (
          ((e.context =
            "object" == typeof a && null !== a ? a._currentValue2 : r),
          "function" == typeof (a = t.getDerivedStateFromProps) &&
            ((o = null == (a = a(n, o)) ? o : D({}, o, a)), (e.state = o)),
          "function" != typeof t.getDerivedStateFromProps &&
            "function" != typeof e.getSnapshotBeforeUpdate &&
            ("function" == typeof e.UNSAFE_componentWillMount ||
              "function" == typeof e.componentWillMount))
        )
          if (
            ((t = e.state),
            "function" == typeof e.componentWillMount && e.componentWillMount(),
            "function" == typeof e.UNSAFE_componentWillMount &&
              e.UNSAFE_componentWillMount(),
            t !== e.state && ie.enqueueReplaceState(e, e.state, null),
            null !== i.queue && 0 < i.queue.length)
          )
            if (
              ((t = i.queue),
              (a = i.replace),
              (i.queue = null),
              (i.replace = !1),
              a && 1 === t.length)
            )
              e.state = t[0];
            else {
              for (
                i = a ? t[0] : e.state, o = !0, a = a ? 1 : 0;
                a < t.length;
                a++
              ) {
                var s = t[a];
                null != (s = "function" == typeof s ? s.call(e, i, n, r) : s) &&
                  (o ? ((o = !1), (i = D({}, i, s))) : D(i, s));
              }
              e.state = i;
            }
          else i.queue = null;
      }
      var se = { id: 1, overflow: "" };
      function ue(e, t, n) {
        var r = e.id;
        e = e.overflow;
        var o = 32 - le(r) - 1;
        (r &= ~(1 << o)), (n += 1);
        var i = 32 - le(t) + o;
        if (30 < i) {
          var a = o - (o % 5);
          return (
            (i = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (o -= a),
            { id: (1 << (32 - le(t) + o)) | (n << o) | r, overflow: i + e }
          );
        }
        return { id: (1 << i) | (n << o) | r, overflow: e };
      }
      var le = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((ce(e) / de) | 0)) | 0;
            },
        ce = Math.log,
        de = Math.LN2;
      var fe =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        pe = null,
        he = null,
        me = null,
        ge = null,
        ve = !1,
        _e = !1,
        ye = 0,
        we = null,
        be = 0;
      function Se() {
        if (null === pe) throw Error(o(321));
        return pe;
      }
      function Ee() {
        if (0 < be) throw Error(o(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function Te() {
        return (
          null === ge
            ? null === me
              ? ((ve = !1), (me = ge = Ee()))
              : ((ve = !0), (ge = me))
            : null === ge.next
            ? ((ve = !1), (ge = ge.next = Ee()))
            : ((ve = !0), (ge = ge.next)),
          ge
        );
      }
      function Ce() {
        (he = pe = null), (_e = !1), (me = null), (be = 0), (ge = we = null);
      }
      function ke(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function xe(e, t, n) {
        if (((pe = Se()), (ge = Te()), ve)) {
          var r = ge.queue;
          if (((t = r.dispatch), null !== we && void 0 !== (n = we.get(r)))) {
            we.delete(r), (r = ge.memoizedState);
            do {
              (r = e(r, n.action)), (n = n.next);
            } while (null !== n);
            return (ge.memoizedState = r), [r, t];
          }
          return [ge.memoizedState, t];
        }
        return (
          (e =
            e === ke
              ? "function" == typeof t
                ? t()
                : t
              : void 0 !== n
              ? n(t)
              : t),
          (ge.memoizedState = e),
          (e = (e = ge.queue = { last: null, dispatch: null }).dispatch =
            Oe.bind(null, pe, e)),
          [ge.memoizedState, e]
        );
      }
      function Ie(e, t) {
        if (
          ((pe = Se()), (t = void 0 === t ? null : t), null !== (ge = Te()))
        ) {
          var n = ge.memoizedState;
          if (null !== n && null !== t) {
            var r = n[1];
            e: if (null === r) r = !1;
            else {
              for (var o = 0; o < r.length && o < t.length; o++)
                if (!fe(t[o], r[o])) {
                  r = !1;
                  break e;
                }
              r = !0;
            }
            if (r) return n[0];
          }
        }
        return (e = e()), (ge.memoizedState = [e, t]), e;
      }
      function Oe(e, t, n) {
        if (25 <= be) throw Error(o(301));
        if (e === pe)
          if (
            ((_e = !0),
            (e = { action: n, next: null }),
            null === we && (we = new Map()),
            void 0 === (n = we.get(t)))
          )
            we.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
      }
      function Ae() {
        throw Error(o(394));
      }
      function Pe() {}
      var Le = {
          readContext: function (e) {
            return e._currentValue2;
          },
          useContext: function (e) {
            return Se(), e._currentValue2;
          },
          useMemo: Ie,
          useReducer: xe,
          useRef: function (e) {
            pe = Se();
            var t = (ge = Te()).memoizedState;
            return null === t
              ? ((e = { current: e }), (ge.memoizedState = e))
              : t;
          },
          useState: function (e) {
            return xe(ke, e);
          },
          useInsertionEffect: Pe,
          useLayoutEffect: function () {},
          useCallback: function (e, t) {
            return Ie(function () {
              return e;
            }, t);
          },
          useImperativeHandle: Pe,
          useEffect: Pe,
          useDebugValue: Pe,
          useDeferredValue: function (e) {
            return Se(), e;
          },
          useTransition: function () {
            return Se(), [!1, Ae];
          },
          useId: function () {
            var e = he.treeContext,
              t = e.overflow;
            e = ((e = e.id) & ~(1 << (32 - le(e) - 1))).toString(32) + t;
            var n = Re;
            if (null === n) throw Error(o(404));
            return (
              (t = ye++),
              (e = ":" + n.idPrefix + "R" + e),
              0 < t && (e += "H" + t.toString(32)),
              e + ":"
            );
          },
          useMutableSource: function (e, t) {
            return Se(), t(e._source);
          },
          useSyncExternalStore: function (e, t, n) {
            if (void 0 === n) throw Error(o(407));
            return n();
          },
        },
        Re = null,
        Ne =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentDispatcher;
      function De(e) {
        return console.error(e), null;
      }
      function Me() {}
      function Ue(e, t, n, r, o, i, a, s) {
        e.allPendingTasks++,
          null === n ? e.pendingRootTasks++ : n.pendingTasks++;
        var u = {
          node: t,
          ping: function () {
            var t = e.pingedTasks;
            t.push(u), 1 === t.length && Xe(e);
          },
          blockedBoundary: n,
          blockedSegment: r,
          abortSet: o,
          legacyContext: i,
          context: a,
          treeContext: s,
        };
        return o.add(u), u;
      }
      function Be(e, t, n, r, o, i) {
        return {
          status: 0,
          id: -1,
          index: t,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext: r,
          boundary: n,
          lastPushedText: o,
          textEmbedded: i,
        };
      }
      function Fe(e, t) {
        if (null != (e = e.onError(t)) && "string" != typeof e)
          throw Error(
            'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
              typeof e +
              '" instead'
          );
        return e;
      }
      function je(e, t) {
        var n = e.onShellError;
        n(t),
          (n = e.onFatalError)(t),
          null !== e.destination
            ? ((e.status = 2), e.destination.destroy(t))
            : ((e.status = 1), (e.fatalError = t));
      }
      function We(e, t, n, r, o) {
        for (pe = {}, he = t, ye = 0, e = n(r, o); _e; )
          (_e = !1), (ye = 0), (be += 1), (ge = null), (e = n(r, o));
        return Ce(), e;
      }
      function He(e, t, n, r) {
        var i = n.render(),
          a = r.childContextTypes;
        if (null != a) {
          var s = t.legacyContext;
          if ("function" != typeof n.getChildContext) r = s;
          else {
            for (var u in (n = n.getChildContext()))
              if (!(u in a)) throw Error(o(108, Q(r) || "Unknown", u));
            r = D({}, s, n);
          }
          (t.legacyContext = r), Ye(e, t, i), (t.legacyContext = s);
        } else Ye(e, t, i);
      }
      function qe(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = D({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function ze(e, t, n, r, i) {
        if ("function" == typeof n)
          if (n.prototype && n.prototype.isReactComponent) {
            i = te(n, t.legacyContext);
            var a = n.contextType;
            ae(
              (a = new n(
                r,
                "object" == typeof a && null !== a ? a._currentValue2 : i
              )),
              n,
              r,
              i
            ),
              He(e, t, a, n);
          } else {
            i = We(e, t, n, r, (a = te(n, t.legacyContext)));
            var s = 0 !== ye;
            if (
              "object" == typeof i &&
              null !== i &&
              "function" == typeof i.render &&
              void 0 === i.$$typeof
            )
              ae(i, n, r, a), He(e, t, i, n);
            else if (s) {
              (r = t.treeContext), (t.treeContext = ue(r, 1, 0));
              try {
                Ye(e, t, i);
              } finally {
                t.treeContext = r;
              }
            } else Ye(e, t, i);
          }
        else {
          if ("string" != typeof n) {
            switch (n) {
              case J:
              case Z:
              case F:
              case j:
              case B:
              case Y:
                return void Ye(e, t, r.children);
              case $:
                throw Error(o(343));
              case z:
                e: {
                  (n = t.blockedBoundary),
                    (i = t.blockedSegment),
                    (a = r.fallback),
                    (r = r.children);
                  var u = {
                      id: null,
                      rootSegmentID: -1,
                      parentFlushed: !1,
                      pendingTasks: 0,
                      forceClientRender: !1,
                      completedSegments: [],
                      byteSize: 0,
                      fallbackAbortableTasks: (s = new Set()),
                      errorDigest: null,
                    },
                    l = Be(0, i.chunks.length, u, i.formatContext, !1, !1);
                  i.children.push(l), (i.lastPushedText = !1);
                  var c = Be(0, 0, null, i.formatContext, !1, !1);
                  (c.parentFlushed = !0),
                    (t.blockedBoundary = u),
                    (t.blockedSegment = c);
                  try {
                    if (
                      (Ge(e, t, r),
                      e.responseState.generateStaticMarkup ||
                        (c.lastPushedText &&
                          c.textEmbedded &&
                          c.chunks.push("\x3c!-- --\x3e")),
                      (c.status = 1),
                      Ze(u, c),
                      0 === u.pendingTasks)
                    )
                      break e;
                  } catch (t) {
                    (c.status = 4),
                      (u.forceClientRender = !0),
                      (u.errorDigest = Fe(e, t));
                  } finally {
                    (t.blockedBoundary = n), (t.blockedSegment = i);
                  }
                  (t = Ue(
                    e,
                    a,
                    n,
                    l,
                    s,
                    t.legacyContext,
                    t.context,
                    t.treeContext
                  )),
                    e.pingedTasks.push(t);
                }
                return;
            }
            if ("object" == typeof n && null !== n)
              switch (n.$$typeof) {
                case q:
                  if (((r = We(e, t, n.render, r, i)), 0 !== ye)) {
                    (n = t.treeContext), (t.treeContext = ue(n, 1, 0));
                    try {
                      Ye(e, t, r);
                    } finally {
                      t.treeContext = n;
                    }
                  } else Ye(e, t, r);
                  return;
                case V:
                  return void ze(e, t, (n = n.type), (r = qe(n, r)), i);
                case W:
                  if (
                    ((i = r.children),
                    (n = n._context),
                    (r = r.value),
                    (a = n._currentValue2),
                    (n._currentValue2 = r),
                    (ne = r =
                      {
                        parent: (s = ne),
                        depth: null === s ? 0 : s.depth + 1,
                        context: n,
                        parentValue: a,
                        value: r,
                      }),
                    (t.context = r),
                    Ye(e, t, i),
                    null === (e = ne))
                  )
                    throw Error(o(403));
                  return (
                    (r = e.parentValue),
                    (e.context._currentValue2 =
                      r === X ? e.context._defaultValue : r),
                    (e = ne = e.parent),
                    void (t.context = e)
                  );
                case H:
                  return void Ye(
                    e,
                    t,
                    (r = (r = r.children)(n._currentValue2))
                  );
                case G:
                  return void ze(
                    e,
                    t,
                    (n = (i = n._init)(n._payload)),
                    (r = qe(n, r)),
                    void 0
                  );
              }
            throw Error(o(130, null == n ? n : typeof n, ""));
          }
          switch (
            ((a = A(
              (i = t.blockedSegment).chunks,
              n,
              r,
              e.responseState,
              i.formatContext
            )),
            (i.lastPushedText = !1),
            (s = i.formatContext),
            (i.formatContext = (function (e, t, n) {
              switch (t) {
                case "select":
                  return b(1, null != n.value ? n.value : n.defaultValue);
                case "svg":
                  return b(2, null);
                case "math":
                  return b(3, null);
                case "foreignObject":
                  return b(1, null);
                case "table":
                  return b(4, null);
                case "thead":
                case "tbody":
                case "tfoot":
                  return b(5, null);
                case "colgroup":
                  return b(7, null);
                case "tr":
                  return b(6, null);
              }
              return 4 <= e.insertionMode || 0 === e.insertionMode
                ? b(1, null)
                : e;
            })(s, n, r)),
            Ge(e, t, a),
            (i.formatContext = s),
            n)
          ) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break;
            default:
              i.chunks.push("</", n, ">");
          }
          i.lastPushedText = !1;
        }
      }
      function Ye(e, t, n) {
        if (((t.node = n), "object" == typeof n && null !== n)) {
          switch (n.$$typeof) {
            case M:
              return void ze(e, t, n.type, n.props, n.ref);
            case U:
              throw Error(o(257));
            case G:
              var r = n._init;
              return void Ye(e, t, (n = r(n._payload)));
          }
          if (w(n)) return void Ve(e, t, n);
          if (
            (null === n || "object" != typeof n
              ? (r = null)
              : (r =
                  "function" == typeof (r = (K && n[K]) || n["@@iterator"])
                    ? r
                    : null),
            r && (r = r.call(n)))
          ) {
            if (!(n = r.next()).done) {
              var i = [];
              do {
                i.push(n.value), (n = r.next());
              } while (!n.done);
              Ve(e, t, i);
            }
            return;
          }
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        "string" == typeof n
          ? ((r = t.blockedSegment).lastPushedText = N(
              t.blockedSegment.chunks,
              n,
              e.responseState,
              r.lastPushedText
            ))
          : "number" == typeof n &&
            ((r = t.blockedSegment).lastPushedText = N(
              t.blockedSegment.chunks,
              "" + n,
              e.responseState,
              r.lastPushedText
            ));
      }
      function Ve(e, t, n) {
        for (var r = n.length, o = 0; o < r; o++) {
          var i = t.treeContext;
          t.treeContext = ue(i, r, o);
          try {
            Ge(e, t, n[o]);
          } finally {
            t.treeContext = i;
          }
        }
      }
      function Ge(e, t, n) {
        var r = t.blockedSegment.formatContext,
          o = t.legacyContext,
          i = t.context;
        try {
          return Ye(e, t, n);
        } catch (u) {
          if (
            (Ce(),
            "object" != typeof u || null === u || "function" != typeof u.then)
          )
            throw (
              ((t.blockedSegment.formatContext = r),
              (t.legacyContext = o),
              (t.context = i),
              oe(i),
              u)
            );
          n = u;
          var a = t.blockedSegment,
            s = Be(
              0,
              a.chunks.length,
              null,
              a.formatContext,
              a.lastPushedText,
              !0
            );
          a.children.push(s),
            (a.lastPushedText = !1),
            (e = Ue(
              e,
              t.node,
              t.blockedBoundary,
              s,
              t.abortSet,
              t.legacyContext,
              t.context,
              t.treeContext
            ).ping),
            n.then(e, e),
            (t.blockedSegment.formatContext = r),
            (t.legacyContext = o),
            (t.context = i),
            oe(i);
        }
      }
      function $e(e) {
        var t = e.blockedBoundary;
        ((e = e.blockedSegment).status = 3), Je(this, t, e);
      }
      function Ze(e, t) {
        if (
          0 === t.chunks.length &&
          1 === t.children.length &&
          null === t.children[0].boundary
        ) {
          var n = t.children[0];
          (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && Ze(e, n);
        } else e.completedSegments.push(t);
      }
      function Je(e, t, n) {
        if (null === t) {
          if (n.parentFlushed) {
            if (null !== e.completedRootSegment) throw Error(o(389));
            e.completedRootSegment = n;
          }
          e.pendingRootTasks--,
            0 === e.pendingRootTasks &&
              ((e.onShellError = Me), (t = e.onShellReady)());
        } else
          t.pendingTasks--,
            t.forceClientRender ||
              (0 === t.pendingTasks
                ? (n.parentFlushed && 1 === n.status && Ze(t, n),
                  t.parentFlushed && e.completedBoundaries.push(t),
                  t.fallbackAbortableTasks.forEach($e, e),
                  t.fallbackAbortableTasks.clear())
                : n.parentFlushed &&
                  1 === n.status &&
                  (Ze(t, n),
                  1 === t.completedSegments.length &&
                    t.parentFlushed &&
                    e.partialBoundaries.push(t)));
        e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
      }
      function Xe(e) {
        if (2 !== e.status) {
          var t = ne,
            n = Ne.current;
          Ne.current = Le;
          var r = Re;
          Re = e.responseState;
          try {
            var o,
              i = e.pingedTasks;
            for (o = 0; o < i.length; o++) {
              var a = i[o],
                s = e,
                u = a.blockedSegment;
              if (0 === u.status) {
                oe(a.context);
                try {
                  Ye(s, a, a.node),
                    s.responseState.generateStaticMarkup ||
                      (u.lastPushedText &&
                        u.textEmbedded &&
                        u.chunks.push("\x3c!-- --\x3e")),
                    a.abortSet.delete(a),
                    (u.status = 1),
                    Je(s, a.blockedBoundary, u);
                } catch (e) {
                  if (
                    (Ce(),
                    "object" == typeof e &&
                      null !== e &&
                      "function" == typeof e.then)
                  ) {
                    var l = a.ping;
                    e.then(l, l);
                  } else {
                    a.abortSet.delete(a), (u.status = 4);
                    var c = a.blockedBoundary,
                      d = e,
                      f = Fe(s, d);
                    if (
                      (null === c
                        ? je(s, d)
                        : (c.pendingTasks--,
                          c.forceClientRender ||
                            ((c.forceClientRender = !0),
                            (c.errorDigest = f),
                            c.parentFlushed &&
                              s.clientRenderedBoundaries.push(c))),
                      s.allPendingTasks--,
                      0 === s.allPendingTasks)
                    )
                      (0, s.onAllReady)();
                  }
                }
              }
            }
            i.splice(0, o), null !== e.destination && rt(e, e.destination);
          } catch (t) {
            Fe(e, t), je(e, t);
          } finally {
            (Re = r), (Ne.current = n), n === Le && oe(t);
          }
        }
      }
      function Ke(e, t, n) {
        switch (((n.parentFlushed = !0), n.status)) {
          case 0:
            var r = (n.id = e.nextSegmentId++);
            return (
              (n.lastPushedText = !1),
              (n.textEmbedded = !1),
              (e = e.responseState),
              t.push('<template id="'),
              t.push(e.placeholderPrefix),
              (e = r.toString(16)),
              t.push(e),
              t.push('"></template>')
            );
          case 1:
            n.status = 2;
            var i = !0;
            r = n.chunks;
            var a = 0;
            n = n.children;
            for (var s = 0; s < n.length; s++) {
              for (i = n[s]; a < i.index; a++) t.push(r[a]);
              i = Qe(e, t, i);
            }
            for (; a < r.length - 1; a++) t.push(r[a]);
            return a < r.length && (i = t.push(r[a])), i;
          default:
            throw Error(o(390));
        }
      }
      function Qe(e, t, n) {
        var r = n.boundary;
        if (null === r) return Ke(e, t, n);
        if (((r.parentFlushed = !0), r.forceClientRender))
          return (
            e.responseState.generateStaticMarkup ||
              ((r = r.errorDigest),
              t.push("\x3c!--$!--\x3e"),
              t.push("<template"),
              r && (t.push(' data-dgst="'), (r = v(r)), t.push(r), t.push('"')),
              t.push("></template>")),
            Ke(e, t, n),
            (e =
              !!e.responseState.generateStaticMarkup ||
              t.push("\x3c!--/$--\x3e"))
          );
        if (0 < r.pendingTasks) {
          (r.rootSegmentID = e.nextSegmentId++),
            0 < r.completedSegments.length && e.partialBoundaries.push(r);
          var i = e.responseState,
            a = i.nextSuspenseID++;
          return (
            (i = i.boundaryPrefix + a.toString(16)),
            (r = r.id = i),
            P(t, e.responseState, r),
            Ke(e, t, n),
            t.push("\x3c!--/$--\x3e")
          );
        }
        if (r.byteSize > e.progressiveChunkSize)
          return (
            (r.rootSegmentID = e.nextSegmentId++),
            e.completedBoundaries.push(r),
            P(t, e.responseState, r.id),
            Ke(e, t, n),
            t.push("\x3c!--/$--\x3e")
          );
        if (
          (e.responseState.generateStaticMarkup || t.push("\x3c!--$--\x3e"),
          1 !== (n = r.completedSegments).length)
        )
          throw Error(o(391));
        return (
          Qe(e, t, n[0]),
          (e =
            !!e.responseState.generateStaticMarkup || t.push("\x3c!--/$--\x3e"))
        );
      }
      function et(e, t, n) {
        return (
          (function (e, t, n, r) {
            switch (n.insertionMode) {
              case 0:
              case 1:
                return (
                  e.push('<div hidden id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 2:
                return (
                  e.push('<svg aria-hidden="true" style="display:none" id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 3:
                return (
                  e.push('<math aria-hidden="true" style="display:none" id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 4:
                return (
                  e.push('<table hidden id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 5:
                return (
                  e.push('<table hidden><tbody id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 6:
                return (
                  e.push('<table hidden><tr id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              case 7:
                return (
                  e.push('<table hidden><colgroup id="'),
                  e.push(t.segmentPrefix),
                  (t = r.toString(16)),
                  e.push(t),
                  e.push('">')
                );
              default:
                throw Error(o(397));
            }
          })(t, e.responseState, n.formatContext, n.id),
          Qe(e, t, n),
          (function (e, t) {
            switch (t.insertionMode) {
              case 0:
              case 1:
                return e.push("</div>");
              case 2:
                return e.push("</svg>");
              case 3:
                return e.push("</math>");
              case 4:
                return e.push("</table>");
              case 5:
                return e.push("</tbody></table>");
              case 6:
                return e.push("</tr></table>");
              case 7:
                return e.push("</colgroup></table>");
              default:
                throw Error(o(397));
            }
          })(t, n.formatContext)
        );
      }
      function tt(e, t, n) {
        for (var r = n.completedSegments, i = 0; i < r.length; i++)
          nt(e, t, n, r[i]);
        if (
          ((r.length = 0),
          (e = e.responseState),
          (r = n.id),
          (n = n.rootSegmentID),
          t.push(e.startInlineScript),
          e.sentCompleteBoundaryFunction
            ? t.push('$RC("')
            : ((e.sentCompleteBoundaryFunction = !0),
              t.push(
                'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
              )),
          null === r)
        )
          throw Error(o(395));
        return (
          (n = n.toString(16)),
          t.push(r),
          t.push('","'),
          t.push(e.segmentPrefix),
          t.push(n),
          t.push('")</script>')
        );
      }
      function nt(e, t, n, r) {
        if (2 === r.status) return !0;
        var i = r.id;
        if (-1 === i) {
          if (-1 === (r.id = n.rootSegmentID)) throw Error(o(392));
          return et(e, t, r);
        }
        return (
          et(e, t, r),
          (e = e.responseState),
          t.push(e.startInlineScript),
          e.sentCompleteSegmentFunction
            ? t.push('$RS("')
            : ((e.sentCompleteSegmentFunction = !0),
              t.push(
                'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
              )),
          t.push(e.segmentPrefix),
          (i = i.toString(16)),
          t.push(i),
          t.push('","'),
          t.push(e.placeholderPrefix),
          t.push(i),
          t.push('")</script>')
        );
      }
      function rt(e, t) {
        try {
          var n = e.completedRootSegment;
          if (null !== n && 0 === e.pendingRootTasks) {
            Qe(e, t, n), (e.completedRootSegment = null);
            var r = e.responseState.bootstrapChunks;
            for (n = 0; n < r.length - 1; n++) t.push(r[n]);
            n < r.length && t.push(r[n]);
          }
          var i,
            a = e.clientRenderedBoundaries;
          for (i = 0; i < a.length; i++) {
            var s = a[i];
            r = t;
            var u = e.responseState,
              l = s.id,
              c = s.errorDigest,
              d = s.errorMessage,
              f = s.errorComponentStack;
            if (
              (r.push(u.startInlineScript),
              u.sentClientRenderFunction
                ? r.push('$RX("')
                : ((u.sentClientRenderFunction = !0),
                  r.push(
                    'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
                  )),
              null === l)
            )
              throw Error(o(395));
            if ((r.push(l), r.push('"'), c || d || f)) {
              r.push(",");
              var p = R(c || "");
              r.push(p);
            }
            if (d || f) {
              r.push(",");
              var h = R(d || "");
              r.push(h);
            }
            if (f) {
              r.push(",");
              var m = R(f);
              r.push(m);
            }
            if (!r.push(")</script>"))
              return (e.destination = null), i++, void a.splice(0, i);
          }
          a.splice(0, i);
          var g = e.completedBoundaries;
          for (i = 0; i < g.length; i++)
            if (!tt(e, t, g[i]))
              return (e.destination = null), i++, void g.splice(0, i);
          g.splice(0, i);
          var v = e.partialBoundaries;
          for (i = 0; i < v.length; i++) {
            var _ = v[i];
            e: {
              (a = e), (s = t);
              var y = _.completedSegments;
              for (u = 0; u < y.length; u++)
                if (!nt(a, s, _, y[u])) {
                  u++, y.splice(0, u);
                  var w = !1;
                  break e;
                }
              y.splice(0, u), (w = !0);
            }
            if (!w) return (e.destination = null), i++, void v.splice(0, i);
          }
          v.splice(0, i);
          var b = e.completedBoundaries;
          for (i = 0; i < b.length; i++)
            if (!tt(e, t, b[i]))
              return (e.destination = null), i++, void b.splice(0, i);
          b.splice(0, i);
        } finally {
          0 === e.allPendingTasks &&
            0 === e.pingedTasks.length &&
            0 === e.clientRenderedBoundaries.length &&
            0 === e.completedBoundaries.length &&
            t.push(null);
        }
      }
      function ot(e, t) {
        try {
          var n = e.abortableTasks;
          n.forEach(function (n) {
            return (function e(t, n, r) {
              var i = t.blockedBoundary;
              (t.blockedSegment.status = 3),
                null === i
                  ? (n.allPendingTasks--,
                    2 !== n.status &&
                      ((n.status = 2),
                      null !== n.destination && n.destination.push(null)))
                  : (i.pendingTasks--,
                    i.forceClientRender ||
                      ((i.forceClientRender = !0),
                      (t = void 0 === r ? Error(o(432)) : r),
                      (i.errorDigest = n.onError(t)),
                      i.parentFlushed && n.clientRenderedBoundaries.push(i)),
                    i.fallbackAbortableTasks.forEach(function (t) {
                      return e(t, n, r);
                    }),
                    i.fallbackAbortableTasks.clear(),
                    n.allPendingTasks--,
                    0 === n.allPendingTasks && (i = n.onAllReady)());
            })(n, e, t);
          }),
            n.clear(),
            null !== e.destination && rt(e, e.destination);
        } catch (t) {
          Fe(e, t), je(e, t);
        }
      }
      function it() {}
      function at(e, t, n, r) {
        var i = !1,
          a = null,
          s = "",
          u = {
            push: function (e) {
              return null !== e && (s += e), !0;
            },
            destroy: function (e) {
              (i = !0), (a = e);
            },
          },
          l = !1;
        if (
          (Xe(
            (e = (function (e, t, n, r, o, i, a, s, u) {
              var l = [],
                c = new Set();
              return (
                ((n = Be(
                  (t = {
                    destination: null,
                    responseState: t,
                    progressiveChunkSize: void 0 === r ? 12800 : r,
                    status: 0,
                    fatalError: null,
                    nextSegmentId: 0,
                    allPendingTasks: 0,
                    pendingRootTasks: 0,
                    completedRootSegment: null,
                    abortableTasks: c,
                    pingedTasks: l,
                    clientRenderedBoundaries: [],
                    completedBoundaries: [],
                    partialBoundaries: [],
                    onError: void 0 === o ? De : o,
                    onAllReady: void 0 === i ? Me : i,
                    onShellReady: void 0 === a ? Me : a,
                    onShellError: void 0 === s ? Me : s,
                    onFatalError: void 0 === u ? Me : u,
                  }),
                  0,
                  null,
                  n,
                  !1,
                  !1
                )).parentFlushed = !0),
                (e = Ue(t, e, null, n, c, ee, null, se)),
                l.push(e),
                t
              );
            })(
              e,
              (function (e, t) {
                return {
                  bootstrapChunks: [],
                  startInlineScript: "<script>",
                  placeholderPrefix: (t = void 0 === t ? "" : t) + "P:",
                  segmentPrefix: t + "S:",
                  boundaryPrefix: t + "B:",
                  idPrefix: t,
                  nextSuspenseID: 0,
                  sentCompleteSegmentFunction: !1,
                  sentCompleteBoundaryFunction: !1,
                  sentClientRenderFunction: !1,
                  generateStaticMarkup: e,
                };
              })(n, t ? t.identifierPrefix : void 0),
              { insertionMode: 1, selectedValue: null },
              1 / 0,
              it,
              void 0,
              function () {
                l = !0;
              },
              void 0,
              void 0
            ))
          ),
          ot(e, r),
          1 === e.status)
        )
          (e.status = 2), u.destroy(e.fatalError);
        else if (2 !== e.status && null === e.destination) {
          e.destination = u;
          try {
            rt(e, u);
          } catch (t) {
            Fe(e, t), je(e, t);
          }
        }
        if (i) throw a;
        if (!l) throw Error(o(426));
        return s;
      }
      (t.renderToNodeStream = function () {
        throw Error(o(207));
      }),
        (t.renderToStaticMarkup = function (e, t) {
          return at(
            e,
            t,
            !0,
            'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
          );
        }),
        (t.renderToStaticNodeStream = function () {
          throw Error(o(208));
        }),
        (t.renderToString = function (e, t) {
          return at(
            e,
            t,
            !1,
            'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
          );
        }),
        (t.version = "18.3.1");
    },
    1182: function (e, t, n) {
      "use strict";
      (function (e) {
        /**
         * @license React
         * react-dom-server.browser.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r = n(0);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var i = null,
          a = 0;
        function s(e, t) {
          if (0 !== t.length)
            if (512 < t.length)
              0 < a &&
                (e.enqueue(new Uint8Array(i.buffer, 0, a)),
                (i = new Uint8Array(512)),
                (a = 0)),
                e.enqueue(t);
            else {
              var n = i.length - a;
              n < t.length &&
                (0 === n
                  ? e.enqueue(i)
                  : (i.set(t.subarray(0, n), a),
                    e.enqueue(i),
                    (t = t.subarray(n))),
                (i = new Uint8Array(512)),
                (a = 0)),
                i.set(t, a),
                (a += t.length);
            }
        }
        function u(e, t) {
          return s(e, t), !0;
        }
        function l(e) {
          i &&
            0 < a &&
            (e.enqueue(new Uint8Array(i.buffer, 0, a)), (i = null), (a = 0));
        }
        var c = new TextEncoder();
        function d(e) {
          return c.encode(e);
        }
        function f(e) {
          return c.encode(e);
        }
        function p(e, t) {
          "function" == typeof e.error ? e.error(t) : e.close();
        }
        var h = Object.prototype.hasOwnProperty,
          m =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          g = {},
          v = {};
        function _(e) {
          return (
            !!h.call(v, e) ||
            (!h.call(g, e) && (m.test(e) ? (v[e] = !0) : ((g[e] = !0), !1)))
          );
        }
        function y(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var w = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            w[e] = new y(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            w[t] = new y(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              w[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            w[e] = new y(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              w[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            w[e] = new y(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            w[e] = new y(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            w[e] = new y(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            w[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function S(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, S);
            w[t] = new y(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, S);
              w[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, S);
            w[t] = new y(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            w[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (w.xlinkHref = new y(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            w[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var E = {
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
          T = ["Webkit", "ms", "Moz", "O"];
        Object.keys(E).forEach(function (e) {
          T.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (E[t] = E[e]);
          });
        });
        var C = /["'&<>]/;
        function k(e) {
          if ("boolean" == typeof e || "number" == typeof e) return "" + e;
          e = "" + e;
          var t = C.exec(e);
          if (t) {
            var n,
              r = "",
              o = 0;
            for (n = t.index; n < e.length; n++) {
              switch (e.charCodeAt(n)) {
                case 34:
                  t = "&quot;";
                  break;
                case 38:
                  t = "&amp;";
                  break;
                case 39:
                  t = "&#x27;";
                  break;
                case 60:
                  t = "&lt;";
                  break;
                case 62:
                  t = "&gt;";
                  break;
                default:
                  continue;
              }
              o !== n && (r += e.substring(o, n)), (o = n + 1), (r += t);
            }
            e = o !== n ? r + e.substring(o, n) : r;
          }
          return e;
        }
        var x = /([A-Z])/g,
          I = /^ms-/,
          O = Array.isArray,
          A = f("<script>"),
          P = f("</script>"),
          L = f('<script src="'),
          R = f('<script type="module" src="'),
          N = f('" async=""></script>'),
          D = /(<\/|<)(s)(cript)/gi;
        function M(e, t, n, r) {
          return t + ("s" === n ? "\\u0073" : "\\u0053") + r;
        }
        function U(e, t) {
          return { insertionMode: e, selectedValue: t };
        }
        var B = f("\x3c!-- --\x3e");
        function F(e, t, n, r) {
          return "" === t ? r : (r && e.push(B), e.push(d(k(t))), !0);
        }
        var j = new Map(),
          W = f(' style="'),
          H = f(":"),
          q = f(";");
        function z(e, t, n) {
          if ("object" != typeof n) throw Error(o(62));
          for (var r in ((t = !0), n))
            if (h.call(n, r)) {
              var i = n[r];
              if (null != i && "boolean" != typeof i && "" !== i) {
                if (0 === r.indexOf("--")) {
                  var a = d(k(r));
                  i = d(k(("" + i).trim()));
                } else {
                  a = r;
                  var s = j.get(a);
                  void 0 !== s ||
                    ((s = f(
                      k(a.replace(x, "-$1").toLowerCase().replace(I, "-ms-"))
                    )),
                    j.set(a, s)),
                    (a = s),
                    (i =
                      "number" == typeof i
                        ? 0 === i || h.call(E, r)
                          ? d("" + i)
                          : d(i + "px")
                        : d(k(("" + i).trim())));
                }
                t ? ((t = !1), e.push(W, a, H, i)) : e.push(q, a, H, i);
              }
            }
          t || e.push(G);
        }
        var Y = f(" "),
          V = f('="'),
          G = f('"'),
          $ = f('=""');
        function Z(e, t, n, r) {
          switch (n) {
            case "style":
              return void z(e, t, r);
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (
            !(2 < n.length) ||
            ("o" !== n[0] && "O" !== n[0]) ||
            ("n" !== n[1] && "N" !== n[1])
          )
            if (null !== (t = w.hasOwnProperty(n) ? w[n] : null)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (!t.acceptsBooleans) return;
              }
              switch (((n = d(t.attributeName)), t.type)) {
                case 3:
                  r && e.push(Y, n, $);
                  break;
                case 4:
                  !0 === r
                    ? e.push(Y, n, $)
                    : !1 !== r && e.push(Y, n, V, d(k(r)), G);
                  break;
                case 5:
                  isNaN(r) || e.push(Y, n, V, d(k(r)), G);
                  break;
                case 6:
                  !isNaN(r) && 1 <= r && e.push(Y, n, V, d(k(r)), G);
                  break;
                default:
                  t.sanitizeURL && (r = "" + r), e.push(Y, n, V, d(k(r)), G);
              }
            } else if (_(n)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (
                    "data-" !== (t = n.toLowerCase().slice(0, 5)) &&
                    "aria-" !== t
                  )
                    return;
              }
              e.push(Y, d(n), V, d(k(r)), G);
            }
        }
        var J = f(">"),
          X = f("/>");
        function K(e, t, n) {
          if (null != t) {
            if (null != n) throw Error(o(60));
            if ("object" != typeof t || !("__html" in t)) throw Error(o(61));
            null != (t = t.__html) && e.push(d("" + t));
          }
        }
        var Q = f(' selected=""');
        function ee(e, t, n, r) {
          e.push(oe(n));
          var o,
            i = (n = null);
          for (o in t)
            if (h.call(t, o)) {
              var a = t[o];
              if (null != a)
                switch (o) {
                  case "children":
                    n = a;
                    break;
                  case "dangerouslySetInnerHTML":
                    i = a;
                    break;
                  default:
                    Z(e, r, o, a);
                }
            }
          return (
            e.push(J),
            K(e, i, n),
            "string" == typeof n ? (e.push(d(k(n))), null) : n
          );
        }
        var te = f("\n"),
          ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          re = new Map();
        function oe(e) {
          var t = re.get(e);
          if (void 0 === t) {
            if (!ne.test(e)) throw Error(o(65, e));
            (t = f("<" + e)), re.set(e, t);
          }
          return t;
        }
        var ie = f("<!DOCTYPE html>");
        function ae(e, t, n, i, a) {
          switch (t) {
            case "select":
              e.push(oe("select"));
              var s = null,
                u = null;
              for (p in n)
                if (h.call(n, p)) {
                  var l = n[p];
                  if (null != l)
                    switch (p) {
                      case "children":
                        s = l;
                        break;
                      case "dangerouslySetInnerHTML":
                        u = l;
                        break;
                      case "defaultValue":
                      case "value":
                        break;
                      default:
                        Z(e, i, p, l);
                    }
                }
              return e.push(J), K(e, u, s), s;
            case "option":
              (u = a.selectedValue), e.push(oe("option"));
              var c = (l = null),
                f = null,
                p = null;
              for (s in n)
                if (h.call(n, s)) {
                  var m = n[s];
                  if (null != m)
                    switch (s) {
                      case "children":
                        l = m;
                        break;
                      case "selected":
                        f = m;
                        break;
                      case "dangerouslySetInnerHTML":
                        p = m;
                        break;
                      case "value":
                        c = m;
                      default:
                        Z(e, i, s, m);
                    }
                }
              if (null != u)
                if (
                  ((n =
                    null !== c
                      ? "" + c
                      : (function (e) {
                          var t = "";
                          return (
                            r.Children.forEach(e, function (e) {
                              null != e && (t += e);
                            }),
                            t
                          );
                        })(l)),
                  O(u))
                ) {
                  for (i = 0; i < u.length; i++)
                    if ("" + u[i] === n) {
                      e.push(Q);
                      break;
                    }
                } else "" + u === n && e.push(Q);
              else f && e.push(Q);
              return e.push(J), K(e, p, l), l;
            case "textarea":
              for (l in (e.push(oe("textarea")), (p = u = s = null), n))
                if (h.call(n, l) && null != (c = n[l]))
                  switch (l) {
                    case "children":
                      p = c;
                      break;
                    case "value":
                      s = c;
                      break;
                    case "defaultValue":
                      u = c;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(o(91));
                    default:
                      Z(e, i, l, c);
                  }
              if ((null === s && null !== u && (s = u), e.push(J), null != p)) {
                if (null != s) throw Error(o(92));
                if (O(p) && 1 < p.length) throw Error(o(93));
                s = "" + p;
              }
              return (
                "string" == typeof s && "\n" === s[0] && e.push(te),
                null !== s && e.push(d(k("" + s))),
                null
              );
            case "input":
              for (u in (e.push(oe("input")), (c = p = l = s = null), n))
                if (h.call(n, u) && null != (f = n[u]))
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(399, "input"));
                    case "defaultChecked":
                      c = f;
                      break;
                    case "defaultValue":
                      l = f;
                      break;
                    case "checked":
                      p = f;
                      break;
                    case "value":
                      s = f;
                      break;
                    default:
                      Z(e, i, u, f);
                  }
              return (
                null !== p
                  ? Z(e, i, "checked", p)
                  : null !== c && Z(e, i, "checked", c),
                null !== s
                  ? Z(e, i, "value", s)
                  : null !== l && Z(e, i, "value", l),
                e.push(X),
                null
              );
            case "menuitem":
              for (var g in (e.push(oe("menuitem")), n))
                if (h.call(n, g) && null != (s = n[g]))
                  switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(400));
                    default:
                      Z(e, i, g, s);
                  }
              return e.push(J), null;
            case "title":
              for (m in (e.push(oe("title")), (s = null), n))
                if (h.call(n, m) && null != (u = n[m]))
                  switch (m) {
                    case "children":
                      s = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(o(434));
                    default:
                      Z(e, i, m, u);
                  }
              return e.push(J), s;
            case "listing":
            case "pre":
              for (c in (e.push(oe(t)), (u = s = null), n))
                if (h.call(n, c) && null != (l = n[c]))
                  switch (c) {
                    case "children":
                      s = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      u = l;
                      break;
                    default:
                      Z(e, i, c, l);
                  }
              if ((e.push(J), null != u)) {
                if (null != s) throw Error(o(60));
                if ("object" != typeof u || !("__html" in u))
                  throw Error(o(61));
                null != (n = u.__html) &&
                  ("string" == typeof n && 0 < n.length && "\n" === n[0]
                    ? e.push(te, d(n))
                    : e.push(d("" + n)));
              }
              return "string" == typeof s && "\n" === s[0] && e.push(te), s;
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              for (var v in (e.push(oe(t)), n))
                if (h.call(n, v) && null != (s = n[v]))
                  switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(399, t));
                    default:
                      Z(e, i, v, s);
                  }
              return e.push(X), null;
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return ee(e, n, t, i);
            case "html":
              return 0 === a.insertionMode && e.push(ie), ee(e, n, t, i);
            default:
              if (-1 === t.indexOf("-") && "string" != typeof n.is)
                return ee(e, n, t, i);
              for (f in (e.push(oe(t)), (u = s = null), n))
                if (h.call(n, f) && null != (l = n[f]))
                  switch (f) {
                    case "children":
                      s = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      u = l;
                      break;
                    case "style":
                      z(e, i, l);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                      break;
                    default:
                      _(f) &&
                        "function" != typeof l &&
                        "symbol" != typeof l &&
                        e.push(Y, d(f), V, d(k(l)), G);
                  }
              return e.push(J), K(e, u, s), s;
          }
        }
        var se = f("</"),
          ue = f(">"),
          le = f('<template id="'),
          ce = f('"></template>'),
          de = f("\x3c!--$--\x3e"),
          fe = f('\x3c!--$?--\x3e<template id="'),
          pe = f('"></template>'),
          he = f("\x3c!--$!--\x3e"),
          me = f("\x3c!--/$--\x3e"),
          ge = f("<template"),
          ve = f('"'),
          _e = f(' data-dgst="');
        f(' data-msg="'), f(' data-stck="');
        var ye = f("></template>");
        function we(e, t, n) {
          if ((s(e, fe), null === n)) throw Error(o(395));
          return s(e, n), u(e, pe);
        }
        var be = f('<div hidden id="'),
          Se = f('">'),
          Ee = f("</div>"),
          Te = f('<svg aria-hidden="true" style="display:none" id="'),
          Ce = f('">'),
          ke = f("</svg>"),
          xe = f('<math aria-hidden="true" style="display:none" id="'),
          Ie = f('">'),
          Oe = f("</math>"),
          Ae = f('<table hidden id="'),
          Pe = f('">'),
          Le = f("</table>"),
          Re = f('<table hidden><tbody id="'),
          Ne = f('">'),
          De = f("</tbody></table>"),
          Me = f('<table hidden><tr id="'),
          Ue = f('">'),
          Be = f("</tr></table>"),
          Fe = f('<table hidden><colgroup id="'),
          je = f('">'),
          We = f("</colgroup></table>");
        var He = f(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
          ),
          qe = f('$RS("'),
          ze = f('","'),
          Ye = f('")</script>'),
          Ve = f(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
          ),
          Ge = f('$RC("'),
          $e = f('","'),
          Ze = f('")</script>'),
          Je = f(
            'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
          ),
          Xe = f('$RX("'),
          Ke = f('"'),
          Qe = f(")</script>"),
          et = f(","),
          tt = /[<\u2028\u2029]/g;
        function nt(e) {
          return JSON.stringify(e).replace(tt, function (e) {
            switch (e) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error(
                  "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
                );
            }
          });
        }
        var rt = Object.assign,
          ot = Symbol.for("react.element"),
          it = Symbol.for("react.portal"),
          at = Symbol.for("react.fragment"),
          st = Symbol.for("react.strict_mode"),
          ut = Symbol.for("react.profiler"),
          lt = Symbol.for("react.provider"),
          ct = Symbol.for("react.context"),
          dt = Symbol.for("react.forward_ref"),
          ft = Symbol.for("react.suspense"),
          pt = Symbol.for("react.suspense_list"),
          ht = Symbol.for("react.memo"),
          mt = Symbol.for("react.lazy"),
          gt = Symbol.for("react.scope"),
          vt = Symbol.for("react.debug_trace_mode"),
          _t = Symbol.for("react.legacy_hidden"),
          yt = Symbol.for("react.default_value"),
          wt = Symbol.iterator;
        function bt(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case at:
              return "Fragment";
            case it:
              return "Portal";
            case ut:
              return "Profiler";
            case st:
              return "StrictMode";
            case ft:
              return "Suspense";
            case pt:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case ct:
                return (e.displayName || "Context") + ".Consumer";
              case lt:
                return (e._context.displayName || "Context") + ".Provider";
              case dt:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case ht:
                return null !== (t = e.displayName || null)
                  ? t
                  : bt(e.type) || "Memo";
              case mt:
                (t = e._payload), (e = e._init);
                try {
                  return bt(e(t));
                } catch (e) {}
            }
          return null;
        }
        var St = {};
        function Et(e, t) {
          if (!(e = e.contextTypes)) return St;
          var n,
            r = {};
          for (n in e) r[n] = t[n];
          return r;
        }
        var Tt = null;
        function Ct(e, t) {
          if (e !== t) {
            (e.context._currentValue = e.parentValue), (e = e.parent);
            var n = t.parent;
            if (null === e) {
              if (null !== n) throw Error(o(401));
            } else {
              if (null === n) throw Error(o(401));
              Ct(e, n);
            }
            t.context._currentValue = t.value;
          }
        }
        function kt(e) {
          var t = Tt;
          t !== e &&
            (null === t
              ? (function e(t) {
                  var n = t.parent;
                  null !== n && e(n), (t.context._currentValue = t.value);
                })(e)
              : null === e
              ? (function e(t) {
                  (t.context._currentValue = t.parentValue),
                    null !== (t = t.parent) && e(t);
                })(t)
              : t.depth === e.depth
              ? Ct(t, e)
              : t.depth > e.depth
              ? (function e(t, n) {
                  if (
                    ((t.context._currentValue = t.parentValue),
                    null === (t = t.parent))
                  )
                    throw Error(o(402));
                  t.depth === n.depth ? Ct(t, n) : e(t, n);
                })(t, e)
              : (function e(t, n) {
                  var r = n.parent;
                  if (null === r) throw Error(o(402));
                  t.depth === r.depth ? Ct(t, r) : e(t, r),
                    (n.context._currentValue = n.value);
                })(t, e),
            (Tt = e));
        }
        var xt = {
          isMounted: function () {
            return !1;
          },
          enqueueSetState: function (e, t) {
            null !== (e = e._reactInternals).queue && e.queue.push(t);
          },
          enqueueReplaceState: function (e, t) {
            ((e = e._reactInternals).replace = !0), (e.queue = [t]);
          },
          enqueueForceUpdate: function () {},
        };
        function It(e, t, n, r) {
          var o = void 0 !== e.state ? e.state : null;
          (e.updater = xt), (e.props = n), (e.state = o);
          var i = { queue: [], replace: !1 };
          e._reactInternals = i;
          var a = t.contextType;
          if (
            ((e.context =
              "object" == typeof a && null !== a ? a._currentValue : r),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              ((o = null == (a = a(n, o)) ? o : rt({}, o, a)), (e.state = o)),
            "function" != typeof t.getDerivedStateFromProps &&
              "function" != typeof e.getSnapshotBeforeUpdate &&
              ("function" == typeof e.UNSAFE_componentWillMount ||
                "function" == typeof e.componentWillMount))
          )
            if (
              ((t = e.state),
              "function" == typeof e.componentWillMount &&
                e.componentWillMount(),
              "function" == typeof e.UNSAFE_componentWillMount &&
                e.UNSAFE_componentWillMount(),
              t !== e.state && xt.enqueueReplaceState(e, e.state, null),
              null !== i.queue && 0 < i.queue.length)
            )
              if (
                ((t = i.queue),
                (a = i.replace),
                (i.queue = null),
                (i.replace = !1),
                a && 1 === t.length)
              )
                e.state = t[0];
              else {
                for (
                  i = a ? t[0] : e.state, o = !0, a = a ? 1 : 0;
                  a < t.length;
                  a++
                ) {
                  var s = t[a];
                  null !=
                    (s = "function" == typeof s ? s.call(e, i, n, r) : s) &&
                    (o ? ((o = !1), (i = rt({}, i, s))) : rt(i, s));
                }
                e.state = i;
              }
            else i.queue = null;
        }
        var Ot = { id: 1, overflow: "" };
        function At(e, t, n) {
          var r = e.id;
          e = e.overflow;
          var o = 32 - Pt(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - Pt(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            return (
              (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              { id: (1 << (32 - Pt(t) + o)) | (n << o) | r, overflow: i + e }
            );
          }
          return { id: (1 << i) | (n << o) | r, overflow: e };
        }
        var Pt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((Lt(e) / Rt) | 0)) | 0;
              },
          Lt = Math.log,
          Rt = Math.LN2;
        var Nt =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          Dt = null,
          Mt = null,
          Ut = null,
          Bt = null,
          Ft = !1,
          jt = !1,
          Wt = 0,
          Ht = null,
          qt = 0;
        function zt() {
          if (null === Dt) throw Error(o(321));
          return Dt;
        }
        function Yt() {
          if (0 < qt) throw Error(o(312));
          return { memoizedState: null, queue: null, next: null };
        }
        function Vt() {
          return (
            null === Bt
              ? null === Ut
                ? ((Ft = !1), (Ut = Bt = Yt()))
                : ((Ft = !0), (Bt = Ut))
              : null === Bt.next
              ? ((Ft = !1), (Bt = Bt.next = Yt()))
              : ((Ft = !0), (Bt = Bt.next)),
            Bt
          );
        }
        function Gt() {
          (Mt = Dt = null), (jt = !1), (Ut = null), (qt = 0), (Bt = Ht = null);
        }
        function $t(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Zt(e, t, n) {
          if (((Dt = zt()), (Bt = Vt()), Ft)) {
            var r = Bt.queue;
            if (((t = r.dispatch), null !== Ht && void 0 !== (n = Ht.get(r)))) {
              Ht.delete(r), (r = Bt.memoizedState);
              do {
                (r = e(r, n.action)), (n = n.next);
              } while (null !== n);
              return (Bt.memoizedState = r), [r, t];
            }
            return [Bt.memoizedState, t];
          }
          return (
            (e =
              e === $t
                ? "function" == typeof t
                  ? t()
                  : t
                : void 0 !== n
                ? n(t)
                : t),
            (Bt.memoizedState = e),
            (e = (e = Bt.queue = { last: null, dispatch: null }).dispatch =
              Xt.bind(null, Dt, e)),
            [Bt.memoizedState, e]
          );
        }
        function Jt(e, t) {
          if (
            ((Dt = zt()), (t = void 0 === t ? null : t), null !== (Bt = Vt()))
          ) {
            var n = Bt.memoizedState;
            if (null !== n && null !== t) {
              var r = n[1];
              e: if (null === r) r = !1;
              else {
                for (var o = 0; o < r.length && o < t.length; o++)
                  if (!Nt(t[o], r[o])) {
                    r = !1;
                    break e;
                  }
                r = !0;
              }
              if (r) return n[0];
            }
          }
          return (e = e()), (Bt.memoizedState = [e, t]), e;
        }
        function Xt(e, t, n) {
          if (25 <= qt) throw Error(o(301));
          if (e === Dt)
            if (
              ((jt = !0),
              (e = { action: n, next: null }),
              null === Ht && (Ht = new Map()),
              void 0 === (n = Ht.get(t)))
            )
              Ht.set(t, e);
            else {
              for (t = n; null !== t.next; ) t = t.next;
              t.next = e;
            }
        }
        function Kt() {
          throw Error(o(394));
        }
        function Qt() {}
        var en = {
            readContext: function (e) {
              return e._currentValue;
            },
            useContext: function (e) {
              return zt(), e._currentValue;
            },
            useMemo: Jt,
            useReducer: Zt,
            useRef: function (e) {
              Dt = zt();
              var t = (Bt = Vt()).memoizedState;
              return null === t
                ? ((e = { current: e }), (Bt.memoizedState = e))
                : t;
            },
            useState: function (e) {
              return Zt($t, e);
            },
            useInsertionEffect: Qt,
            useLayoutEffect: function () {},
            useCallback: function (e, t) {
              return Jt(function () {
                return e;
              }, t);
            },
            useImperativeHandle: Qt,
            useEffect: Qt,
            useDebugValue: Qt,
            useDeferredValue: function (e) {
              return zt(), e;
            },
            useTransition: function () {
              return zt(), [!1, Kt];
            },
            useId: function () {
              var e = Mt.treeContext,
                t = e.overflow;
              e = ((e = e.id) & ~(1 << (32 - Pt(e) - 1))).toString(32) + t;
              var n = tn;
              if (null === n) throw Error(o(404));
              return (
                (t = Wt++),
                (e = ":" + n.idPrefix + "R" + e),
                0 < t && (e += "H" + t.toString(32)),
                e + ":"
              );
            },
            useMutableSource: function (e, t) {
              return zt(), t(e._source);
            },
            useSyncExternalStore: function (e, t, n) {
              if (void 0 === n) throw Error(o(407));
              return n();
            },
          },
          tn = null,
          nn =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentDispatcher;
        function rn(e) {
          return console.error(e), null;
        }
        function on() {}
        function an(e, t, n, r, o, i, a, s) {
          e.allPendingTasks++,
            null === n ? e.pendingRootTasks++ : n.pendingTasks++;
          var u = {
            node: t,
            ping: function () {
              var t = e.pingedTasks;
              t.push(u), 1 === t.length && wn(e);
            },
            blockedBoundary: n,
            blockedSegment: r,
            abortSet: o,
            legacyContext: i,
            context: a,
            treeContext: s,
          };
          return o.add(u), u;
        }
        function sn(e, t, n, r, o, i) {
          return {
            status: 0,
            id: -1,
            index: t,
            parentFlushed: !1,
            chunks: [],
            children: [],
            formatContext: r,
            boundary: n,
            lastPushedText: o,
            textEmbedded: i,
          };
        }
        function un(e, t) {
          if (null != (e = e.onError(t)) && "string" != typeof e)
            throw Error(
              'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
                typeof e +
                '" instead'
            );
          return e;
        }
        function ln(e, t) {
          var n = e.onShellError;
          n(t),
            (n = e.onFatalError)(t),
            null !== e.destination
              ? ((e.status = 2), p(e.destination, t))
              : ((e.status = 1), (e.fatalError = t));
        }
        function cn(e, t, n, r, o) {
          for (Dt = {}, Mt = t, Wt = 0, e = n(r, o); jt; )
            (jt = !1), (Wt = 0), (qt += 1), (Bt = null), (e = n(r, o));
          return Gt(), e;
        }
        function dn(e, t, n, r) {
          var i = n.render(),
            a = r.childContextTypes;
          if (null != a) {
            var s = t.legacyContext;
            if ("function" != typeof n.getChildContext) r = s;
            else {
              for (var u in (n = n.getChildContext()))
                if (!(u in a)) throw Error(o(108, bt(r) || "Unknown", u));
              r = rt({}, s, n);
            }
            (t.legacyContext = r), hn(e, t, i), (t.legacyContext = s);
          } else hn(e, t, i);
        }
        function fn(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = rt({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function pn(e, t, n, r, i) {
          if ("function" == typeof n)
            if (n.prototype && n.prototype.isReactComponent) {
              i = Et(n, t.legacyContext);
              var a = n.contextType;
              It(
                (a = new n(
                  r,
                  "object" == typeof a && null !== a ? a._currentValue : i
                )),
                n,
                r,
                i
              ),
                dn(e, t, a, n);
            } else {
              i = cn(e, t, n, r, (a = Et(n, t.legacyContext)));
              var s = 0 !== Wt;
              if (
                "object" == typeof i &&
                null !== i &&
                "function" == typeof i.render &&
                void 0 === i.$$typeof
              )
                It(i, n, r, a), dn(e, t, i, n);
              else if (s) {
                (r = t.treeContext), (t.treeContext = At(r, 1, 0));
                try {
                  hn(e, t, i);
                } finally {
                  t.treeContext = r;
                }
              } else hn(e, t, i);
            }
          else {
            if ("string" != typeof n) {
              switch (n) {
                case _t:
                case vt:
                case st:
                case ut:
                case at:
                case pt:
                  return void hn(e, t, r.children);
                case gt:
                  throw Error(o(343));
                case ft:
                  e: {
                    (n = t.blockedBoundary),
                      (i = t.blockedSegment),
                      (a = r.fallback),
                      (r = r.children);
                    var u = {
                        id: null,
                        rootSegmentID: -1,
                        parentFlushed: !1,
                        pendingTasks: 0,
                        forceClientRender: !1,
                        completedSegments: [],
                        byteSize: 0,
                        fallbackAbortableTasks: (s = new Set()),
                        errorDigest: null,
                      },
                      l = sn(0, i.chunks.length, u, i.formatContext, !1, !1);
                    i.children.push(l), (i.lastPushedText = !1);
                    var c = sn(0, 0, null, i.formatContext, !1, !1);
                    (c.parentFlushed = !0),
                      (t.blockedBoundary = u),
                      (t.blockedSegment = c);
                    try {
                      if (
                        (gn(e, t, r),
                        c.lastPushedText && c.textEmbedded && c.chunks.push(B),
                        (c.status = 1),
                        _n(u, c),
                        0 === u.pendingTasks)
                      )
                        break e;
                    } catch (t) {
                      (c.status = 4),
                        (u.forceClientRender = !0),
                        (u.errorDigest = un(e, t));
                    } finally {
                      (t.blockedBoundary = n), (t.blockedSegment = i);
                    }
                    (t = an(
                      e,
                      a,
                      n,
                      l,
                      s,
                      t.legacyContext,
                      t.context,
                      t.treeContext
                    )),
                      e.pingedTasks.push(t);
                  }
                  return;
              }
              if ("object" == typeof n && null !== n)
                switch (n.$$typeof) {
                  case dt:
                    if (((r = cn(e, t, n.render, r, i)), 0 !== Wt)) {
                      (n = t.treeContext), (t.treeContext = At(n, 1, 0));
                      try {
                        hn(e, t, r);
                      } finally {
                        t.treeContext = n;
                      }
                    } else hn(e, t, r);
                    return;
                  case ht:
                    return void pn(e, t, (n = n.type), (r = fn(n, r)), i);
                  case lt:
                    if (
                      ((i = r.children),
                      (n = n._context),
                      (r = r.value),
                      (a = n._currentValue),
                      (n._currentValue = r),
                      (Tt = r =
                        {
                          parent: (s = Tt),
                          depth: null === s ? 0 : s.depth + 1,
                          context: n,
                          parentValue: a,
                          value: r,
                        }),
                      (t.context = r),
                      hn(e, t, i),
                      null === (e = Tt))
                    )
                      throw Error(o(403));
                    return (
                      (r = e.parentValue),
                      (e.context._currentValue =
                        r === yt ? e.context._defaultValue : r),
                      (e = Tt = e.parent),
                      void (t.context = e)
                    );
                  case ct:
                    return void hn(
                      e,
                      t,
                      (r = (r = r.children)(n._currentValue))
                    );
                  case mt:
                    return void pn(
                      e,
                      t,
                      (n = (i = n._init)(n._payload)),
                      (r = fn(n, r)),
                      void 0
                    );
                }
              throw Error(o(130, null == n ? n : typeof n, ""));
            }
            switch (
              ((a = ae(
                (i = t.blockedSegment).chunks,
                n,
                r,
                e.responseState,
                i.formatContext
              )),
              (i.lastPushedText = !1),
              (s = i.formatContext),
              (i.formatContext = (function (e, t, n) {
                switch (t) {
                  case "select":
                    return U(1, null != n.value ? n.value : n.defaultValue);
                  case "svg":
                    return U(2, null);
                  case "math":
                    return U(3, null);
                  case "foreignObject":
                    return U(1, null);
                  case "table":
                    return U(4, null);
                  case "thead":
                  case "tbody":
                  case "tfoot":
                    return U(5, null);
                  case "colgroup":
                    return U(7, null);
                  case "tr":
                    return U(6, null);
                }
                return 4 <= e.insertionMode || 0 === e.insertionMode
                  ? U(1, null)
                  : e;
              })(s, n, r)),
              gn(e, t, a),
              (i.formatContext = s),
              n)
            ) {
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break;
              default:
                i.chunks.push(se, d(n), ue);
            }
            i.lastPushedText = !1;
          }
        }
        function hn(e, t, n) {
          if (((t.node = n), "object" == typeof n && null !== n)) {
            switch (n.$$typeof) {
              case ot:
                return void pn(e, t, n.type, n.props, n.ref);
              case it:
                throw Error(o(257));
              case mt:
                var r = n._init;
                return void hn(e, t, (n = r(n._payload)));
            }
            if (O(n)) return void mn(e, t, n);
            if (
              (null === n || "object" != typeof n
                ? (r = null)
                : (r =
                    "function" == typeof (r = (wt && n[wt]) || n["@@iterator"])
                      ? r
                      : null),
              r && (r = r.call(n)))
            ) {
              if (!(n = r.next()).done) {
                var i = [];
                do {
                  i.push(n.value), (n = r.next());
                } while (!n.done);
                mn(e, t, i);
              }
              return;
            }
            throw (
              ((e = Object.prototype.toString.call(n)),
              Error(
                o(
                  31,
                  "[object Object]" === e
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e
                )
              ))
            );
          }
          "string" == typeof n
            ? ((r = t.blockedSegment).lastPushedText = F(
                t.blockedSegment.chunks,
                n,
                e.responseState,
                r.lastPushedText
              ))
            : "number" == typeof n &&
              ((r = t.blockedSegment).lastPushedText = F(
                t.blockedSegment.chunks,
                "" + n,
                e.responseState,
                r.lastPushedText
              ));
        }
        function mn(e, t, n) {
          for (var r = n.length, o = 0; o < r; o++) {
            var i = t.treeContext;
            t.treeContext = At(i, r, o);
            try {
              gn(e, t, n[o]);
            } finally {
              t.treeContext = i;
            }
          }
        }
        function gn(e, t, n) {
          var r = t.blockedSegment.formatContext,
            o = t.legacyContext,
            i = t.context;
          try {
            return hn(e, t, n);
          } catch (u) {
            if (
              (Gt(),
              "object" != typeof u || null === u || "function" != typeof u.then)
            )
              throw (
                ((t.blockedSegment.formatContext = r),
                (t.legacyContext = o),
                (t.context = i),
                kt(i),
                u)
              );
            n = u;
            var a = t.blockedSegment,
              s = sn(
                0,
                a.chunks.length,
                null,
                a.formatContext,
                a.lastPushedText,
                !0
              );
            a.children.push(s),
              (a.lastPushedText = !1),
              (e = an(
                e,
                t.node,
                t.blockedBoundary,
                s,
                t.abortSet,
                t.legacyContext,
                t.context,
                t.treeContext
              ).ping),
              n.then(e, e),
              (t.blockedSegment.formatContext = r),
              (t.legacyContext = o),
              (t.context = i),
              kt(i);
          }
        }
        function vn(e) {
          var t = e.blockedBoundary;
          ((e = e.blockedSegment).status = 3), yn(this, t, e);
        }
        function _n(e, t) {
          if (
            0 === t.chunks.length &&
            1 === t.children.length &&
            null === t.children[0].boundary
          ) {
            var n = t.children[0];
            (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && _n(e, n);
          } else e.completedSegments.push(t);
        }
        function yn(e, t, n) {
          if (null === t) {
            if (n.parentFlushed) {
              if (null !== e.completedRootSegment) throw Error(o(389));
              e.completedRootSegment = n;
            }
            e.pendingRootTasks--,
              0 === e.pendingRootTasks &&
                ((e.onShellError = on), (t = e.onShellReady)());
          } else
            t.pendingTasks--,
              t.forceClientRender ||
                (0 === t.pendingTasks
                  ? (n.parentFlushed && 1 === n.status && _n(t, n),
                    t.parentFlushed && e.completedBoundaries.push(t),
                    t.fallbackAbortableTasks.forEach(vn, e),
                    t.fallbackAbortableTasks.clear())
                  : n.parentFlushed &&
                    1 === n.status &&
                    (_n(t, n),
                    1 === t.completedSegments.length &&
                      t.parentFlushed &&
                      e.partialBoundaries.push(t)));
          e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
        }
        function wn(e) {
          if (2 !== e.status) {
            var t = Tt,
              n = nn.current;
            nn.current = en;
            var r = tn;
            tn = e.responseState;
            try {
              var o,
                i = e.pingedTasks;
              for (o = 0; o < i.length; o++) {
                var a = i[o],
                  s = e,
                  u = a.blockedSegment;
                if (0 === u.status) {
                  kt(a.context);
                  try {
                    hn(s, a, a.node),
                      u.lastPushedText && u.textEmbedded && u.chunks.push(B),
                      a.abortSet.delete(a),
                      (u.status = 1),
                      yn(s, a.blockedBoundary, u);
                  } catch (e) {
                    if (
                      (Gt(),
                      "object" == typeof e &&
                        null !== e &&
                        "function" == typeof e.then)
                    ) {
                      var l = a.ping;
                      e.then(l, l);
                    } else {
                      a.abortSet.delete(a), (u.status = 4);
                      var c = a.blockedBoundary,
                        d = e,
                        f = un(s, d);
                      if (
                        (null === c
                          ? ln(s, d)
                          : (c.pendingTasks--,
                            c.forceClientRender ||
                              ((c.forceClientRender = !0),
                              (c.errorDigest = f),
                              c.parentFlushed &&
                                s.clientRenderedBoundaries.push(c))),
                        s.allPendingTasks--,
                        0 === s.allPendingTasks)
                      )
                        (0, s.onAllReady)();
                    }
                  }
                }
              }
              i.splice(0, o), null !== e.destination && kn(e, e.destination);
            } catch (t) {
              un(e, t), ln(e, t);
            } finally {
              (tn = r), (nn.current = n), n === en && kt(t);
            }
          }
        }
        function bn(e, t, n) {
          switch (((n.parentFlushed = !0), n.status)) {
            case 0:
              var r = (n.id = e.nextSegmentId++);
              return (
                (n.lastPushedText = !1),
                (n.textEmbedded = !1),
                (e = e.responseState),
                s(t, le),
                s(t, e.placeholderPrefix),
                s(t, (e = d(r.toString(16)))),
                u(t, ce)
              );
            case 1:
              n.status = 2;
              var i = !0;
              r = n.chunks;
              var a = 0;
              n = n.children;
              for (var l = 0; l < n.length; l++) {
                for (i = n[l]; a < i.index; a++) s(t, r[a]);
                i = Sn(e, t, i);
              }
              for (; a < r.length - 1; a++) s(t, r[a]);
              return a < r.length && (i = u(t, r[a])), i;
            default:
              throw Error(o(390));
          }
        }
        function Sn(e, t, n) {
          var r = n.boundary;
          if (null === r) return bn(e, t, n);
          if (((r.parentFlushed = !0), r.forceClientRender))
            (r = r.errorDigest),
              u(t, he),
              s(t, ge),
              r && (s(t, _e), s(t, d(k(r))), s(t, ve)),
              u(t, ye),
              bn(e, t, n);
          else if (0 < r.pendingTasks) {
            (r.rootSegmentID = e.nextSegmentId++),
              0 < r.completedSegments.length && e.partialBoundaries.push(r);
            var i = e.responseState,
              a = i.nextSuspenseID++;
            (i = f(i.boundaryPrefix + a.toString(16))),
              (r = r.id = i),
              we(t, e.responseState, r),
              bn(e, t, n);
          } else if (r.byteSize > e.progressiveChunkSize)
            (r.rootSegmentID = e.nextSegmentId++),
              e.completedBoundaries.push(r),
              we(t, e.responseState, r.id),
              bn(e, t, n);
          else {
            if ((u(t, de), 1 !== (n = r.completedSegments).length))
              throw Error(o(391));
            Sn(e, t, n[0]);
          }
          return u(t, me);
        }
        function En(e, t, n) {
          return (
            (function (e, t, n, r) {
              switch (n.insertionMode) {
                case 0:
                case 1:
                  return (
                    s(e, be),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Se)
                  );
                case 2:
                  return (
                    s(e, Te),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Ce)
                  );
                case 3:
                  return (
                    s(e, xe),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Ie)
                  );
                case 4:
                  return (
                    s(e, Ae),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Pe)
                  );
                case 5:
                  return (
                    s(e, Re),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Ne)
                  );
                case 6:
                  return (
                    s(e, Me),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, Ue)
                  );
                case 7:
                  return (
                    s(e, Fe),
                    s(e, t.segmentPrefix),
                    s(e, d(r.toString(16))),
                    u(e, je)
                  );
                default:
                  throw Error(o(397));
              }
            })(t, e.responseState, n.formatContext, n.id),
            Sn(e, t, n),
            (function (e, t) {
              switch (t.insertionMode) {
                case 0:
                case 1:
                  return u(e, Ee);
                case 2:
                  return u(e, ke);
                case 3:
                  return u(e, Oe);
                case 4:
                  return u(e, Le);
                case 5:
                  return u(e, De);
                case 6:
                  return u(e, Be);
                case 7:
                  return u(e, We);
                default:
                  throw Error(o(397));
              }
            })(t, n.formatContext)
          );
        }
        function Tn(e, t, n) {
          for (var r = n.completedSegments, i = 0; i < r.length; i++)
            Cn(e, t, n, r[i]);
          if (
            ((r.length = 0),
            (e = e.responseState),
            (r = n.id),
            (n = n.rootSegmentID),
            s(t, e.startInlineScript),
            e.sentCompleteBoundaryFunction
              ? s(t, Ge)
              : ((e.sentCompleteBoundaryFunction = !0), s(t, Ve)),
            null === r)
          )
            throw Error(o(395));
          return (
            (n = d(n.toString(16))),
            s(t, r),
            s(t, $e),
            s(t, e.segmentPrefix),
            s(t, n),
            u(t, Ze)
          );
        }
        function Cn(e, t, n, r) {
          if (2 === r.status) return !0;
          var i = r.id;
          if (-1 === i) {
            if (-1 === (r.id = n.rootSegmentID)) throw Error(o(392));
            return En(e, t, r);
          }
          return (
            En(e, t, r),
            s(t, (e = e.responseState).startInlineScript),
            e.sentCompleteSegmentFunction
              ? s(t, qe)
              : ((e.sentCompleteSegmentFunction = !0), s(t, He)),
            s(t, e.segmentPrefix),
            s(t, (i = d(i.toString(16)))),
            s(t, ze),
            s(t, e.placeholderPrefix),
            s(t, i),
            u(t, Ye)
          );
        }
        function kn(e, t) {
          (i = new Uint8Array(512)), (a = 0);
          try {
            var n = e.completedRootSegment;
            if (null !== n && 0 === e.pendingRootTasks) {
              Sn(e, t, n), (e.completedRootSegment = null);
              var r = e.responseState.bootstrapChunks;
              for (n = 0; n < r.length - 1; n++) s(t, r[n]);
              n < r.length && u(t, r[n]);
            }
            var c,
              f = e.clientRenderedBoundaries;
            for (c = 0; c < f.length; c++) {
              var p = f[c];
              r = t;
              var h = e.responseState,
                m = p.id,
                g = p.errorDigest,
                v = p.errorMessage,
                _ = p.errorComponentStack;
              if (
                (s(r, h.startInlineScript),
                h.sentClientRenderFunction
                  ? s(r, Xe)
                  : ((h.sentClientRenderFunction = !0), s(r, Je)),
                null === m)
              )
                throw Error(o(395));
              if (
                (s(r, m),
                s(r, Ke),
                (g || v || _) && (s(r, et), s(r, d(nt(g || "")))),
                (v || _) && (s(r, et), s(r, d(nt(v || "")))),
                _ && (s(r, et), s(r, d(nt(_)))),
                !u(r, Qe))
              )
                return (e.destination = null), c++, void f.splice(0, c);
            }
            f.splice(0, c);
            var y = e.completedBoundaries;
            for (c = 0; c < y.length; c++)
              if (!Tn(e, t, y[c]))
                return (e.destination = null), c++, void y.splice(0, c);
            y.splice(0, c), l(t), (i = new Uint8Array(512)), (a = 0);
            var w = e.partialBoundaries;
            for (c = 0; c < w.length; c++) {
              var b = w[c];
              e: {
                (f = e), (p = t);
                var S = b.completedSegments;
                for (h = 0; h < S.length; h++)
                  if (!Cn(f, p, b, S[h])) {
                    h++, S.splice(0, h);
                    var E = !1;
                    break e;
                  }
                S.splice(0, h), (E = !0);
              }
              if (!E) return (e.destination = null), c++, void w.splice(0, c);
            }
            w.splice(0, c);
            var T = e.completedBoundaries;
            for (c = 0; c < T.length; c++)
              if (!Tn(e, t, T[c]))
                return (e.destination = null), c++, void T.splice(0, c);
            T.splice(0, c);
          } finally {
            l(t),
              0 === e.allPendingTasks &&
                0 === e.pingedTasks.length &&
                0 === e.clientRenderedBoundaries.length &&
                0 === e.completedBoundaries.length &&
                t.close();
          }
        }
        function xn(e, t) {
          try {
            var n = e.abortableTasks;
            n.forEach(function (n) {
              return (function e(t, n, r) {
                var i = t.blockedBoundary;
                (t.blockedSegment.status = 3),
                  null === i
                    ? (n.allPendingTasks--,
                      2 !== n.status &&
                        ((n.status = 2),
                        null !== n.destination && n.destination.close()))
                    : (i.pendingTasks--,
                      i.forceClientRender ||
                        ((i.forceClientRender = !0),
                        (t = void 0 === r ? Error(o(432)) : r),
                        (i.errorDigest = n.onError(t)),
                        i.parentFlushed && n.clientRenderedBoundaries.push(i)),
                      i.fallbackAbortableTasks.forEach(function (t) {
                        return e(t, n, r);
                      }),
                      i.fallbackAbortableTasks.clear(),
                      n.allPendingTasks--,
                      0 === n.allPendingTasks && (i = n.onAllReady)());
              })(n, e, t);
            }),
              n.clear(),
              null !== e.destination && kn(e, e.destination);
          } catch (t) {
            un(e, t), ln(e, t);
          }
        }
        (t.renderToReadableStream = function (t, n) {
          return new e(function (r, o) {
            var i,
              a,
              s = new e(function (e, t) {
                (a = e), (i = t);
              }),
              u = (function (e, t, n, r, o, i, a, s, u) {
                var l = [],
                  c = new Set();
                return (
                  ((n = sn(
                    (t = {
                      destination: null,
                      responseState: t,
                      progressiveChunkSize: void 0 === r ? 12800 : r,
                      status: 0,
                      fatalError: null,
                      nextSegmentId: 0,
                      allPendingTasks: 0,
                      pendingRootTasks: 0,
                      completedRootSegment: null,
                      abortableTasks: c,
                      pingedTasks: l,
                      clientRenderedBoundaries: [],
                      completedBoundaries: [],
                      partialBoundaries: [],
                      onError: void 0 === o ? rn : o,
                      onAllReady: void 0 === i ? on : i,
                      onShellReady: void 0 === a ? on : a,
                      onShellError: void 0 === s ? on : s,
                      onFatalError: void 0 === u ? on : u,
                    }),
                    0,
                    null,
                    n,
                    !1,
                    !1
                  )).parentFlushed = !0),
                  (e = an(t, e, null, n, c, St, null, Ot)),
                  l.push(e),
                  t
                );
              })(
                t,
                (function (e, t, n, r, o) {
                  (e = void 0 === e ? "" : e),
                    (t = void 0 === t ? A : f('<script nonce="' + k(t) + '">'));
                  var i = [];
                  if (
                    (void 0 !== n && i.push(t, d(("" + n).replace(D, M)), P),
                    void 0 !== r)
                  )
                    for (n = 0; n < r.length; n++) i.push(L, d(k(r[n])), N);
                  if (void 0 !== o)
                    for (r = 0; r < o.length; r++) i.push(R, d(k(o[r])), N);
                  return {
                    bootstrapChunks: i,
                    startInlineScript: t,
                    placeholderPrefix: f(e + "P:"),
                    segmentPrefix: f(e + "S:"),
                    boundaryPrefix: e + "B:",
                    idPrefix: e,
                    nextSuspenseID: 0,
                    sentCompleteSegmentFunction: !1,
                    sentCompleteBoundaryFunction: !1,
                    sentClientRenderFunction: !1,
                  };
                })(
                  n ? n.identifierPrefix : void 0,
                  n ? n.nonce : void 0,
                  n ? n.bootstrapScriptContent : void 0,
                  n ? n.bootstrapScripts : void 0,
                  n ? n.bootstrapModules : void 0
                ),
                (function (e) {
                  return U(
                    "http://www.w3.org/2000/svg" === e
                      ? 2
                      : "http://www.w3.org/1998/Math/MathML" === e
                      ? 3
                      : 0,
                    null
                  );
                })(n ? n.namespaceURI : void 0),
                n ? n.progressiveChunkSize : void 0,
                n ? n.onError : void 0,
                a,
                function () {
                  var e = new ReadableStream(
                    {
                      type: "bytes",
                      pull: function (e) {
                        if (1 === u.status) (u.status = 2), p(e, u.fatalError);
                        else if (2 !== u.status && null === u.destination) {
                          u.destination = e;
                          try {
                            kn(u, e);
                          } catch (e) {
                            un(u, e), ln(u, e);
                          }
                        }
                      },
                      cancel: function () {
                        xn(u);
                      },
                    },
                    { highWaterMark: 0 }
                  );
                  (e.allReady = s), r(e);
                },
                function (e) {
                  s.catch(function () {}), o(e);
                },
                i
              );
            if (n && n.signal) {
              var l = n.signal,
                c = function () {
                  xn(u, l.reason), l.removeEventListener("abort", c);
                };
              l.addEventListener("abort", c);
            }
            wn(u);
          });
        }),
          (t.version = "18.3.1");
      }).call(this, n(14));
    },
    14: function (e, t, n) {
      (function (t, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.8+1e68dce6
         */ var r;
        (r = function () {
          "use strict";
          function e(e) {
            return "function" == typeof e;
          }
          var r = Array.isArray
              ? Array.isArray
              : function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                },
            o = 0,
            i = void 0,
            a = void 0,
            s = function (e, t) {
              (h[o] = e), (h[o + 1] = t), 2 === (o += 2) && (a ? a(m) : w());
            },
            u = "undefined" != typeof window ? window : void 0,
            l = u || {},
            c = l.MutationObserver || l.WebKitMutationObserver,
            d =
              "undefined" == typeof self &&
              void 0 !== t &&
              "[object process]" === {}.toString.call(t),
            f =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel;
          function p() {
            var e = setTimeout;
            return function () {
              return e(m, 1);
            };
          }
          var h = new Array(1e3);
          function m() {
            for (var e = 0; e < o; e += 2)
              (0, h[e])(h[e + 1]), (h[e] = void 0), (h[e + 1] = void 0);
            o = 0;
          }
          var g,
            v,
            _,
            y,
            w = void 0;
          function b(e, t) {
            var n = this,
              r = new this.constructor(T);
            void 0 === r[E] && N(r);
            var o = n._state;
            if (o) {
              var i = arguments[o - 1];
              s(function () {
                return L(o, r, i, n._result);
              });
            } else A(n, r, e, t);
            return r;
          }
          function S(e) {
            if (e && "object" == typeof e && e.constructor === this) return e;
            var t = new this(T);
            return k(t, e), t;
          }
          d
            ? (w = function () {
                return t.nextTick(m);
              })
            : c
            ? ((v = 0),
              (_ = new c(m)),
              (y = document.createTextNode("")),
              _.observe(y, { characterData: !0 }),
              (w = function () {
                y.data = v = ++v % 2;
              }))
            : f
            ? (((g = new MessageChannel()).port1.onmessage = m),
              (w = function () {
                return g.port2.postMessage(0);
              }))
            : (w =
                void 0 === u
                  ? (function () {
                      try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (i = e.runOnLoop || e.runOnContext)
                          ? function () {
                              i(m);
                            }
                          : p();
                      } catch (e) {
                        return p();
                      }
                    })()
                  : p());
          var E = Math.random().toString(36).substring(2);
          function T() {}
          function C(t, n, r) {
            n.constructor === t.constructor &&
            r === b &&
            n.constructor.resolve === S
              ? (function (e, t) {
                  1 === t._state
                    ? I(e, t._result)
                    : 2 === t._state
                    ? O(e, t._result)
                    : A(
                        t,
                        void 0,
                        function (t) {
                          return k(e, t);
                        },
                        function (t) {
                          return O(e, t);
                        }
                      );
                })(t, n)
              : void 0 === r
              ? I(t, n)
              : e(r)
              ? (function (e, t, n) {
                  s(function (e) {
                    var r = !1,
                      o = (function (e, t, n, r) {
                        try {
                          e.call(t, n, r);
                        } catch (e) {
                          return e;
                        }
                      })(
                        n,
                        t,
                        function (n) {
                          r || ((r = !0), t !== n ? k(e, n) : I(e, n));
                        },
                        function (t) {
                          r || ((r = !0), O(e, t));
                        },
                        e._label
                      );
                    !r && o && ((r = !0), O(e, o));
                  }, e);
                })(t, n, r)
              : I(t, n);
          }
          function k(e, t) {
            if (e === t)
              O(e, new TypeError("You cannot resolve a promise with itself"));
            else if (
              ((o = typeof (r = t)),
              null === r || ("object" !== o && "function" !== o))
            )
              I(e, t);
            else {
              var n = void 0;
              try {
                n = t.then;
              } catch (t) {
                return void O(e, t);
              }
              C(e, t, n);
            }
            var r, o;
          }
          function x(e) {
            e._onerror && e._onerror(e._result), P(e);
          }
          function I(e, t) {
            void 0 === e._state &&
              ((e._result = t),
              (e._state = 1),
              0 !== e._subscribers.length && s(P, e));
          }
          function O(e, t) {
            void 0 === e._state && ((e._state = 2), (e._result = t), s(x, e));
          }
          function A(e, t, n, r) {
            var o = e._subscribers,
              i = o.length;
            (e._onerror = null),
              (o[i] = t),
              (o[i + 1] = n),
              (o[i + 2] = r),
              0 === i && e._state && s(P, e);
          }
          function P(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (
                var r = void 0, o = void 0, i = e._result, a = 0;
                a < t.length;
                a += 3
              )
                (r = t[a]), (o = t[a + n]), r ? L(n, r, o, i) : o(i);
              e._subscribers.length = 0;
            }
          }
          function L(t, n, r, o) {
            var i = e(r),
              a = void 0,
              s = void 0,
              u = !0;
            if (i) {
              try {
                a = r(o);
              } catch (e) {
                (u = !1), (s = e);
              }
              if (n === a)
                return void O(
                  n,
                  new TypeError(
                    "A promises callback cannot return that same promise."
                  )
                );
            } else a = o;
            void 0 !== n._state ||
              (i && u
                ? k(n, a)
                : !1 === u
                ? O(n, s)
                : 1 === t
                ? I(n, a)
                : 2 === t && O(n, a));
          }
          var R = 0;
          function N(e) {
            (e[E] = R++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          var D = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(T)),
                  this.promise[E] || N(this.promise),
                  r(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? I(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            I(this.promise, this._result)))
                    : O(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; void 0 === this._state && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var n = this._instanceConstructor,
                    r = n.resolve;
                  if (r === S) {
                    var o = void 0,
                      i = void 0,
                      a = !1;
                    try {
                      o = e.then;
                    } catch (e) {
                      (a = !0), (i = e);
                    }
                    if (o === b && void 0 !== e._state)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof o)
                      this._remaining--, (this._result[t] = e);
                    else if (n === M) {
                      var s = new n(T);
                      a ? O(s, i) : C(s, e, o), this._willSettleAt(s, t);
                    } else
                      this._willSettleAt(
                        new n(function (t) {
                          return t(e);
                        }),
                        t
                      );
                  } else this._willSettleAt(r(e), t);
                }),
                (e.prototype._settledAt = function (e, t, n) {
                  var r = this.promise;
                  void 0 === r._state &&
                    (this._remaining--,
                    2 === e ? O(r, n) : (this._result[t] = n)),
                    0 === this._remaining && I(r, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  A(
                    e,
                    void 0,
                    function (e) {
                      return n._settledAt(1, t, e);
                    },
                    function (e) {
                      return n._settledAt(2, t, e);
                    }
                  );
                }),
                e
              );
            })(),
            M = (function () {
              function t(e) {
                (this[E] = R++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  T !== e &&
                    ("function" != typeof e &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof t
                      ? (function (e, t) {
                          try {
                            t(
                              function (t) {
                                k(e, t);
                              },
                              function (t) {
                                O(e, t);
                              }
                            );
                          } catch (t) {
                            O(e, t);
                          }
                        })(this, e)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (t.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (t.prototype.finally = function (t) {
                  var n = this.constructor;
                  return e(t)
                    ? this.then(
                        function (e) {
                          return n.resolve(t()).then(function () {
                            return e;
                          });
                        },
                        function (e) {
                          return n.resolve(t()).then(function () {
                            throw e;
                          });
                        }
                      )
                    : this.then(t, t);
                }),
                t
              );
            })();
          return (
            (M.prototype.then = b),
            (M.all = function (e) {
              return new D(this, e).promise;
            }),
            (M.race = function (e) {
              var t = this;
              return r(e)
                ? new t(function (n, r) {
                    for (var o = e.length, i = 0; i < o; i++)
                      t.resolve(e[i]).then(n, r);
                  })
                : new t(function (e, t) {
                    return t(new TypeError("You must pass an array to race."));
                  });
            }),
            (M.resolve = S),
            (M.reject = function (e) {
              var t = new this(T);
              return O(t, e), t;
            }),
            (M._setScheduler = function (e) {
              a = e;
            }),
            (M._setAsap = function (e) {
              s = e;
            }),
            (M._asap = s),
            (M.polyfill = function () {
              var e = void 0;
              if (void 0 !== n) e = n;
              else if ("undefined" != typeof self) e = self;
              else
                try {
                  e = Function("return this")();
                } catch (e) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var t = e.Promise;
              if (t) {
                var r = null;
                try {
                  r = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if ("[object Promise]" === r && !t.cast) return;
              }
              e.Promise = M;
            }),
            (M.Promise = M),
            M
          );
        }),
          (e.exports = r());
      }).call(this, n(52), n(32));
    },
    17: function (e, t, n) {},
    19: function (e, t, n) {
      e.exports = n(1116);
    },
    22: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(1),
          o = n(5);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = r(n(5)),
          a = r(n(29)),
          s = r(n(8)),
          u = r(n(6)),
          l = r(n(3)),
          c = r(n(7)),
          d = n(43),
          f = r(n(314)),
          p = r(n(24)),
          h = r(n(13));
        function m() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ m =
            function () {
              return n;
            };
          var t,
            n = {},
            r = Object.prototype,
            i = r.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            u = s.iterator || "@@iterator",
            l = s.asyncIterator || "@@asyncIterator",
            c = s.toStringTag || "@@toStringTag";
          function d(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            d({}, "");
          } catch (t) {
            d = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function f(e, t, n, r) {
            var o = t && t.prototype instanceof y ? t : y,
              i = Object.create(o.prototype),
              s = new L(r || []);
            return a(i, "_invoke", { value: I(e, n, s) }), i;
          }
          function p(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          n.wrap = f;
          var h = "suspendedStart",
            g = "executing",
            v = "completed",
            _ = {};
          function y() {}
          function w() {}
          function b() {}
          var S = {};
          d(S, u, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            T = E && E(E(R([])));
          T && T !== r && i.call(T, u) && (S = T);
          var C = (b.prototype = y.prototype = Object.create(S));
          function k(e) {
            ["next", "throw", "return"].forEach(function (t) {
              d(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function n(r, a, s, u) {
              var l = p(e[r], e, a);
              if ("throw" !== l.type) {
                var c = l.arg,
                  d = c.value;
                return d && "object" == o(d) && i.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        n("next", e, s, u);
                      },
                      function (e) {
                        n("throw", e, s, u);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (c.value = e), s(c);
                      },
                      function (e) {
                        return n("throw", e, s, u);
                      }
                    );
              }
              u(l.arg);
            }
            var r;
            a(this, "_invoke", {
              value: function (e, o) {
                function i() {
                  return new t(function (t, r) {
                    n(e, o, t, r);
                  });
                }
                return (r = r ? r.then(i, i) : i());
              },
            });
          }
          function I(e, n, r) {
            var o = h;
            return function (i, a) {
              if (o === g) throw Error("Generator is already running");
              if (o === v) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (r.method = i, r.arg = a; ; ) {
                var s = r.delegate;
                if (s) {
                  var u = O(s, r);
                  if (u) {
                    if (u === _) continue;
                    return u;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (o === h) throw ((o = v), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = g;
                var l = p(e, n, r);
                if ("normal" === l.type) {
                  if (((o = r.done ? v : "suspendedYield"), l.arg === _))
                    continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((o = v), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function O(e, n) {
            var r = n.method,
              o = e.iterator[r];
            if (o === t)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  O(e, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                _
              );
            var i = p(o, e.iterator, n.arg);
            if ("throw" === i.type)
              return (
                (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), _
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  _)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                _);
          }
          function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function P(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function L(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(A, this),
              this.reset(!0);
          }
          function R(e) {
            if (e || "" === e) {
              var n = e[u];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  a = function n() {
                    for (; ++r < e.length; )
                      if (i.call(e, r))
                        return (n.value = e[r]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(o(e) + " is not iterable");
          }
          return (
            (w.prototype = b),
            a(C, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: w, configurable: !0 }),
            (w.displayName = d(b, c, "GeneratorFunction")),
            (n.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === w || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (n.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), d(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(C)),
                e
              );
            }),
            (n.awrap = function (e) {
              return { __await: e };
            }),
            k(x.prototype),
            d(x.prototype, l, function () {
              return this;
            }),
            (n.AsyncIterator = x),
            (n.async = function (t, r, o, i, a) {
              void 0 === a && (a = e);
              var s = new x(f(t, r, o, i), a);
              return n.isGeneratorFunction(r)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            k(C),
            d(C, c, "Generator"),
            d(C, u, function () {
              return this;
            }),
            d(C, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (n.values = R),
            (L.prototype = {
              constructor: L,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(P),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      i.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function r(r, o) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return r("end");
                  if (a.tryLoc <= this.prev) {
                    var u = i.call(a, "catchLoc"),
                      l = i.call(a, "finallyLoc");
                    if (u && l) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    i.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), _)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  _
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), P(n), _;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      P(n);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: R(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  _
                );
              },
            }),
            n
          );
        }
        var g = (function () {
          function t() {
            (0, s.default)(this, t),
              (0, l.default)(this, "subscribeUserUpdate", function (e, t) {
                var n = null;
                e.subscribe(function () {
                  var r = e.getState();
                  if (r.userInfo && r.userInfo.data) {
                    var o = r.userInfo.data,
                      i = JSON.stringify(o);
                    n != i &&
                      ((window._userInfoVersion = isNaN(window._userInfoVersion)
                        ? 1
                        : window._userInfoVersion + 1),
                      (n = i),
                      t(o));
                  }
                });
              }),
              (0, l.default)(
                this,
                "generateEmailHash",
                (function () {
                  var e = (0, a.default)(
                    m().mark(function e(t) {
                      var n, r, o;
                      return m().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log({ userInfo: t }),
                                null != t && t.email
                                  ? (console.log(
                                      "undefined" !== window.CryptoJS
                                        ? "CryptoJS Loaded"
                                        : "Failed to load CryptoJS"
                                    ),
                                    (null ==
                                    (o =
                                      null !==
                                        (n =
                                          null === (r = CryptoJS) ||
                                          void 0 === r
                                            ? void 0
                                            : r
                                                .SHA256(
                                                  null == t ? void 0 : t.email
                                                )
                                                .toString()) && void 0 !== n
                                        ? n
                                        : "")
                                      ? void 0
                                      : o.length) > 0 &&
                                      (new h.default().setCommonParams({
                                        user_id: o,
                                      }),
                                      (t.hashed_email_id = o)))
                                  : console.log("No user info found."),
                                e.abrupt("return", t)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            var e = this;
            c.default.isClient() &&
              (c.default.onPageLoad(function () {
                e.setWebengageUserAttr();
              }),
              void 0 === window._userInfo && (window._userInfo = null),
              void 0 === window.initGetHashUser &&
                (window.initGetHashUser = !1),
              void 0 === window.AmplitudeTracking &&
                (window.AmplitudeTracking = {}));
          }
          return (0, u.default)(
            t,
            [
              {
                key: "setUserInfo",
                value: function (e) {
                  c.default.isClient()
                    ? (window._userInfo = e)
                    : console.warn("SL:Warn setUserInfo only for client");
                },
              },
              {
                key: "getActiveUser",
                value: function () {
                  if (c.default.isClient()) {
                    var e =
                      c.default.getParameterByName("auh") ||
                      c.default.getHashByKey("auh");
                    if (c.default.isUserLoggedIn() || e) {
                      if (window._userInfo) {
                        var t,
                          n = this.getActiveWeUser() || {};
                        if (window._userInfo.email == n.email)
                          "jg-cohort-master" ==
                          (null === (t = window) || void 0 === t
                            ? void 0
                            : t.PAGE_TYPE)
                            ? (window._userInfo = c.default.mergeObjects(
                                window._userInfo,
                                n
                              ))
                            : (window._userInfo = c.default.mergeObjects(
                                n,
                                window._userInfo
                              ));
                      }
                    } else {
                      var r = this.getActiveWeUser() || {};
                      window._userInfo &&
                      Object.keys(window._userInfo).length > 0
                        ? ((window._userInfo = c.default.mergeObjects(
                            r,
                            window._userInfo
                          )),
                          AmplitudeTracking &&
                            AmplitudeTracking.eventReq &&
                            AmplitudeTracking.eventReq.loginUser())
                        : (window._userInfo = r);
                    }
                    return window._userInfo || null;
                  }
                  console.warn("SL:Warn getActiveUser only for client");
                },
              },
              {
                key: "getUserInfo",
                value: function (t, n) {
                  return new e(function (e, r) {
                    var o = { method: "getUserInfo" };
                    "object" == (0, i.default)(n) &&
                      n &&
                      (o = c.default.mergeObjects(o, n)),
                      "string" == typeof t && 0 !== t.length && (o.auh = t);
                    try {
                      (0, d.apiCallGetUserInfo)(o)
                        .then(e)
                        .catch(function (e) {
                          r(e), console.error("SL:Error getUserInfo", e);
                        });
                    } catch (e) {
                      console.error("Error :: getUserInfo", e);
                    }
                  });
                },
              },
              {
                key: "formatUserPhoneCode",
                value: function (e) {
                  var t = "";
                  try {
                    if (e) {
                      try {
                        t = "+" + e.replace(/\D/g, "") + "-";
                      } catch (e) {
                        console.error("SL:Error formatUserPhoneCode", e);
                      }
                    } else {
                      var n,
                        r,
                        o,
                        i =
                          null !==
                            (n =
                              null ===
                                (r = c.default.getValueByPath(
                                  webengage,
                                  "state"
                                )) ||
                              void 0 === r ||
                              null === (o = r.getForever()) ||
                              void 0 === o
                                ? void 0
                                : o.uattr) && void 0 !== n
                            ? n
                            : null;
                      t =
                        "string" == typeof i.we_phone
                          ? i.we_phone.split("-")[0].replace(/\D/g, "")
                          : "";
                    }
                  } catch (e) {
                    console.error("SL:Error formatUserPhoneCode", e);
                  }
                  return t;
                },
              },
              {
                key: "getHashUser",
                value: function (e) {
                  if (c.default.isClient()) {
                    var t = this,
                      n = t.getActiveUser(),
                      r = !0;
                    if (
                      n &&
                      Object.keys(n).length > 0 &&
                      void 0 !== n.shouldPrefill &&
                      void 0 !== n.subscription_status
                    )
                      return (r = !1), void e(t.getActiveUser());
                    (window.initGetHashUser && !r) ||
                      ((window.initGetHashUser = !0),
                      t.getHashUserAction(function (e) {
                        t.setUserInfo(e),
                          window.dispatchEvent(
                            new CustomEvent("onLoadUserInfo", { detail: e })
                          );
                      }));
                    var o = function (n) {
                      window.removeEventListener("onLoadUserInfo", o),
                        e(t.getActiveUser());
                    };
                    window.addEventListener("onLoadUserInfo", o);
                  }
                },
              },
              {
                key: "getAuh",
                value: function () {
                  return (
                    c.default.getParameterByName("auh") ||
                    c.default.getHashByKey("auh")
                  );
                },
              },
              {
                key: "clearCookieOnMismatch",
                value: function (e) {
                  window.user_params.loggedIn &&
                    e != window.user_params.email &&
                    (c.default.setCookie(p.default.USER_LEAD_COOKIE, 0, 0),
                    c.default.setCookie(
                      c.default.getConfig().OPTIN_COOKIE,
                      0,
                      0
                    )),
                    window.webengageOnLoad(function () {
                      if ("undefined" != typeof webengage) {
                        var t,
                          n,
                          r,
                          o =
                            null !==
                              (t =
                                null ===
                                  (n = c.default.getValueByPath(
                                    webengage,
                                    "state"
                                  )) ||
                                void 0 === n ||
                                null === (r = n.getForever()) ||
                                void 0 === r
                                  ? void 0
                                  : r.uattr) && void 0 !== t
                              ? t
                              : null;
                        "object" === (0, i.default)(o) &&
                          o.we_email &&
                          o.we_email !== e &&
                          (c.default.setCookie(
                            p.default.USER_LEAD_COOKIE,
                            0,
                            0
                          ),
                          c.default.setCookie(
                            c.default.getConfig().OPTIN_COOKIE,
                            0,
                            0
                          ));
                      }
                    });
                },
              },
              {
                key: "getHashUserAction",
                value: function (e) {
                  var n = this;
                  c.default.onPageLoad(function () {
                    try {
                      var r,
                        o,
                        a,
                        s,
                        u = function (t) {
                          t &&
                            void 0 !== t.phoneCode &&
                            t.phoneCode &&
                            (t.phoneCode = n.formatUserPhoneCode(t.phoneCode)),
                            n.setUserInfo(t),
                            c.default.updateSlGlobalData(t),
                            n
                              .generateEmailHash(t)
                              .then(function (e) {
                                return console.log({ response: e }), e;
                              })
                              .catch(function (e) {
                                return console.log(e);
                              }),
                            e(t);
                        },
                        l = n.getActiveUser();
                      if (
                        l &&
                        Object.keys(l).length > 0 &&
                        void 0 !== l.shouldPrefill &&
                        void 0 !== l.subscription_status
                      )
                        return void u(l);
                      if (
                        ("undefined" != typeof window &&
                          l &&
                          Object.keys(l).length > 0 &&
                          ("resources" ===
                            (null === (r = window) || void 0 === r
                              ? void 0
                              : r.PAGE_TYPE) ||
                            "segment" ===
                              (null === (o = window) || void 0 === o
                                ? void 0
                                : o.PAGE_TYPE))) ||
                        (null !== (a = window) &&
                          void 0 !== a &&
                          null !== (s = a.PAGE_TYPE) &&
                          void 0 !== s &&
                          s.startsWith("frs"))
                      )
                        return void u(l);
                      var d = null;
                      l = null;
                      var f =
                        c.default.getParameterByName("auh") ||
                        c.default.getHashByKey("auh");
                      if (void 0 !== f && null != f) {
                        var p = atob(f).split(","),
                          h = p[0].trim(),
                          m = void 0 !== p[1] && p[1] ? p[1] : "";
                        if (void 0 !== h && null != h)
                          return (
                            (l = { email: h }),
                            m && (l.phone = m),
                            (d = "url_hash"),
                            (l = t.parseUser(l, d)),
                            void n
                              .getUserInfo(f)
                              .then(function (e) {
                                (e = t.parseUser(e, d)),
                                  n.clearCookieOnMismatch(e.email),
                                  void 0 !== e.email_subscription_status &&
                                  void 0 !== e.email_dnc_status
                                    ? ((e.subscription_status =
                                        1 == e.email_subscription_status &&
                                        0 == e.email_dnc_status
                                          ? 1
                                          : 0),
                                      (e.shouldPrefill =
                                        0 == e.email_subscription_status &&
                                        1 == e.email_dnc_status
                                          ? 0
                                          : 1))
                                    : ((e.subscription_status = 1),
                                      (e.shouldPrefill = 1)),
                                  u(e);
                              })
                              .catch(function (e) {
                                reject(e),
                                  console.error("SL:Error getHashUser", e);
                              })
                          );
                        l = {};
                      } else l = {};
                      if (l && l.email) return void u(l);
                      if (window.user_params.loggedIn) {
                        var g = {
                          courseUri:
                            "undefined" != typeof courseUri ? courseUri : "",
                          courseId:
                            "undefined" != typeof courseId ? courseId : "",
                          bundleId:
                            "undefined" != typeof bundleId ? bundleId : "",
                        };
                        return void n
                          .getUserInfo(null, g)
                          .then(function (e) {
                            e
                              ? ((e = t.parseUser(e)),
                                n.clearCookieOnMismatch(e.email),
                                void 0 !== e.email_subscription_status &&
                                void 0 !== e.email_dnc_status
                                  ? ((e.subscription_status =
                                      1 == e.email_subscription_status &&
                                      0 == e.email_dnc_status
                                        ? 1
                                        : 0),
                                    (e.shouldPrefill =
                                      0 == e.email_subscription_status &&
                                      1 == e.email_dnc_status
                                        ? 0
                                        : 1))
                                  : ((e.subscription_status = 1),
                                    (e.shouldPrefill = 1)),
                                u(e))
                              : ((e = {}), u(null));
                          })
                          .catch(function (e) {
                            console.error("SL:Error getHashUser", e);
                          });
                      }
                      window.webengageOnLoad(function () {
                        if ("undefined" != typeof webengage) {
                          var e,
                            r,
                            o = c.default.getValueByPath(webengage, "state"),
                            a =
                              null !==
                                (e =
                                  null == o ||
                                  null === (r = o.getForever()) ||
                                  void 0 === r
                                    ? void 0
                                    : r.uattr) && void 0 !== e
                                ? e
                                : {};
                          if ("object" === (0, i.default)(a) && a.we_email) {
                            var s,
                              l = {
                                email:
                                  null !==
                                    (s = null == a ? void 0 : a.we_email) &&
                                  void 0 !== s
                                    ? s
                                    : "",
                              };
                            if (
                              (void 0 !==
                                a[
                                  WebTracking.userAttributesMap
                                    .sl_user_first_name
                                ] &&
                                ((l.name =
                                  a[
                                    WebTracking.userAttributesMap.sl_user_first_name
                                  ]),
                                (l.first_name = l.name)),
                              void 0 !==
                                a[
                                  WebTracking.userAttributesMap
                                    .sl_user_last_name
                                ] &&
                                ((l.last_name =
                                  a[
                                    WebTracking.userAttributesMap.sl_user_last_name
                                  ]),
                                (l.name = l.name + " " + l.last_name)),
                              void 0 !==
                                a[
                                  WebTracking.userAttributesMap.sl_user_phone
                                ] &&
                                (l.phone =
                                  a[
                                    WebTracking.userAttributesMap.sl_user_phone
                                  ]),
                              (d = "webengage"),
                              void 0 !==
                                (l = t.parseUser(l, d))
                                  .email_subscription_status &&
                                void 0 !== l.email_dnc_status)
                            )
                              (l.subscription_status =
                                1 == l.email_subscription_status &&
                                0 == l.email_dnc_status
                                  ? 1
                                  : 0),
                                (l.shouldPrefill =
                                  0 == l.email_subscription_status &&
                                  1 == l.email_dnc_status
                                    ? 0
                                    : 1),
                                u(l);
                            else {
                              var f = {
                                weEmail:
                                  void 0 !== a.we_email ? a.we_email : "",
                                wePhone:
                                  void 0 !==
                                  a[WebTracking.userAttributesMap.sl_user_phone]
                                    ? a[
                                        WebTracking.userAttributesMap
                                          .sl_user_phone
                                      ]
                                    : "",
                              };
                              n.getUserInfo(null, f).then(function (e) {
                                e &&
                                  (void 0 !== e.email_subscription_status &&
                                  void 0 !== e.email_dnc_status
                                    ? ((l.subscription_status =
                                        1 == e.email_subscription_status &&
                                        0 == e.email_dnc_status
                                          ? 1
                                          : 0),
                                      (l.shouldPrefill =
                                        0 == e.email_subscription_status &&
                                        1 == e.email_dnc_status
                                          ? 0
                                          : 1))
                                    : ((l.subscription_status = 1),
                                      (l.shouldPrefill = 1)),
                                  u(l));
                              });
                            }
                            return;
                          }
                          (l = {}), u(null);
                        } else (l = {}), u(null), console.warn("SL:Warn getHashUser - webengage undefined");
                      });
                    } catch (e) {
                      console.error("SL:Error getHashUser", e);
                    }
                  });
                },
              },
              {
                key: "getActiveWeUser",
                value: function () {
                  var e = null;
                  try {
                    var n, r, o, i;
                    if (
                      null !==
                        (n =
                          null ===
                            (r = c.default.getValueByPath(
                              window,
                              "webengage.state"
                            )) ||
                          void 0 === r ||
                          null === (o = r.getForever()) ||
                          void 0 === o ||
                          null === (i = o.uattr) ||
                          void 0 === i
                            ? void 0
                            : i.we_email) && void 0 !== n
                        ? n
                        : null
                    ) {
                      var a,
                        s,
                        u,
                        l =
                          null !==
                            (a =
                              null ===
                                (s = c.default.getValueByPath(
                                  window,
                                  "webengage.state"
                                )) ||
                              void 0 === s ||
                              null === (u = s.getForever()) ||
                              void 0 === u
                                ? void 0
                                : u.uattr) && void 0 !== a
                            ? a
                            : null;
                      AmplitudeTracking &&
                        AmplitudeTracking.eventReq &&
                        (AmplitudeTracking.eventReq.userEmail = l.we_email),
                        (e = { email: l.we_email || "" }),
                        void 0 !==
                          l[WebTracking.userAttributesMap.sl_user_first_name] &&
                          (e.name =
                            l[
                              WebTracking.userAttributesMap.sl_user_first_name
                            ]),
                        (e.first_name = e.name),
                        void 0 !==
                          l[WebTracking.userAttributesMap.sl_user_last_name] &&
                          (e.last_name =
                            l[WebTracking.userAttributesMap.sl_user_last_name]),
                        (e.name = e.name + " " + e.last_name),
                        void 0 !==
                          l[WebTracking.userAttributesMap.sl_user_phone] &&
                          (e.phone =
                            l[WebTracking.userAttributesMap.sl_user_phone]);
                      e = t.parseUser(e, "webengage");
                    }
                  } catch (e) {
                    console.error("SL:Error getActiveWeUser", e);
                  }
                  return e;
                },
              },
              {
                key: "generateUserHash",
                value: function (e) {
                  try {
                    var t = e || this.getActiveUser();
                    if (
                      ("object" === (0, i.default)(t) && t && t.email,
                      "function" != typeof n)
                    )
                      var n = c.default.btoa;
                    var r = [],
                      o =
                        t && void 0 !== t.phoneCode && t.phoneCode
                          ? "+" +
                            t.phoneCode.replace("-", "").replace("+", "") +
                            "-"
                          : "";
                    o += t && void 0 !== t.phone && t.phone ? t.phone : "";
                    var a =
                      t && void 0 !== t.username && t.username
                        ? t.username
                        : "";
                    a ||
                      ((a =
                        (t && void 0 !== t.firstname && t.firstname
                          ? t.firstname
                          : "") + " "),
                      (a = (a +=
                        t && void 0 !== t.last_name && t.last_name
                          ? t.last_name
                          : "").trim()));
                    var s = t && void 0 !== t.email && t.email ? t.email : "";
                    return (
                      r.push(s || ""),
                      r.push(o || ""),
                      r.push(a || ""),
                      n(r.join(","))
                    );
                  } catch (e) {
                    console.error("SL:Error generateUserHash", e);
                  }
                  return "";
                },
              },
              {
                key: "parsePhone",
                value: function (e) {
                  try {
                    if (!e) return "";
                    var t = {
                      phoneCode: "",
                      phone: (e = e.toString()),
                      fullPhone: e,
                    };
                    return /^\+\d+\-\d+/.test(e)
                      ? ((t.phoneCode = e
                          .match(/\+\d+\-/)[0]
                          .replace("+", "")
                          .replace("-", "")),
                        (t.phoneCode = parseInt(t.phoneCode).toString()),
                        (t.phone = e.match(/\d+$/)[0].replace("+", "")),
                        (t.fullPhone = "+" + t.phoneCode + "-" + t.phone),
                        t)
                      : /^\d+\-\d+/.test(e)
                      ? ((t.phoneCode = parseInt(
                          e.match(/\d+\-/)[0].replace("-", "")
                        ).toString()),
                        (t.phoneCode = parseInt(t.phoneCode).toString()),
                        (t.phone = e.match(/\d+$/)[0]),
                        (t.fullPhone = "+" + t.phoneCode + "-" + t.phone),
                        t)
                      : t;
                  } catch (e) {
                    console.error("error SL:error parsePhone failed", e);
                  }
                },
              },
              {
                key: "getDataByAuh",
                value: function (e) {
                  var t = null;
                  try {
                    var n = c.default.atob(e).split(",");
                    if (
                      (t = {
                        name: n[2] ? n[2] : "",
                        email: n[0] ? n[0] : "",
                        phone: n[1] ? n[1] : "",
                      }).phone
                    ) {
                      var r = this.parsePhone(t.phone);
                      (t.phoneCode = ""),
                        r.phone &&
                          r.phoneCode &&
                          ((t.phoneCode = "+" + r.phoneCode),
                          (t.phone = r.phone));
                    }
                  } catch (e) {
                    console.error("error: getDataByAuh failed", e);
                  }
                  return t;
                },
              },
              {
                key: "updateUserInfoStoreAction",
                value: function (e, t) {
                  if (t) {
                    var n = isNaN(window._userInfoVersion)
                      ? 1
                      : window._userInfoVersion;
                    1 === n && e.attachReducers("userInfo", f.default),
                      void 0 !== t.email_subscription_status &&
                        void 0 !== t.email_dnc_status &&
                        ((t.subscription_status =
                          1 == t.email_subscription_status &&
                          0 == t.email_dnc_status
                            ? 1
                            : 0),
                        (t.shouldPrefill =
                          0 == t.email_subscription_status &&
                          1 == t.email_dnc_status
                            ? 0
                            : 1)),
                      e.dispatch({
                        type: "USER_INFO",
                        payload: { data: t, version: n },
                      });
                  }
                },
              },
            ],
            [
              {
                key: "parseUser",
                value: function (e, t) {
                  if (
                    ((e.name = e.name || e.firstname || e.username || ""),
                    e.phone)
                  ) {
                    var n = e.phone.split("-");
                    n[1] && ((e.phoneCode = n[0]), (e.phone = n[1]));
                  }
                  return (
                    void 0 !== t
                      ? (e.source = t)
                      : c.default.isUserLoggedIn()
                      ? (e.source = "logged_in_user")
                      : (e.source = "other"),
                    "string" == typeof e.name &&
                      e.name &&
                      ((e.firstname = (e.name.match(/^[^ ]+/) || [""])[0]),
                      (e.lastname = (e.name.match(/ .+/) || [""])[0].trim())),
                    "string" == typeof e.name &&
                      (e.name = e.name.replace(/undefined/gi, "").trim()),
                    "string" == typeof e.firstname &&
                      (e.firstname = e.firstname
                        .replace(/undefined/gi, "")
                        .trim()),
                    "string" == typeof e.lastname &&
                      ((e.lastname = e.lastname
                        .replace(/undefined/gi, "")
                        .trim()),
                      e.lastname.includes("@") &&
                        ((e.lastname = ""), (e.name = e.firstname))),
                    e
                  );
                },
              },
            ]
          );
        })();
        t.default = g;
      }).call(this, n(14));
    },
    321: function (e, t, n) {
      "use strict";
      var r = n(44);
      (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
    },
    33: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "domToReact", function () {
          return o;
        }),
        n.d(t, "htmlToDOM", function () {
          return i;
        }),
        n.d(t, "attributesToProps", function () {
          return a;
        }),
        n.d(t, "Comment", function () {
          return s;
        }),
        n.d(t, "Element", function () {
          return u;
        }),
        n.d(t, "ProcessingInstruction", function () {
          return l;
        }),
        n.d(t, "Text", function () {
          return c;
        });
      var r = n(559),
        o = r.domToReact,
        i = r.htmlToDOM,
        a = r.attributesToProps,
        s = r.Comment,
        u = r.Element,
        l = r.ProcessingInstruction,
        c = r.Text;
      t.default = r;
    },
    344: function (e, t, n) {
      (function (t) {
        var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          r = /^\w*$/,
          o = /^\./,
          i =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          a = /\\(\\)?/g,
          s = /^\[object .+?Constructor\]$/,
          u = "object" == typeof t && t && t.Object === Object && t,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = u || l || Function("return this")();
        var d,
          f = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          m = c["__core-js_shared__"],
          g = (d = /[^.]+$/.exec((m && m.keys && m.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          v = p.toString,
          _ = h.hasOwnProperty,
          y = h.toString,
          w = RegExp(
            "^" +
              v
                .call(_)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          b = c.Symbol,
          S = f.splice,
          E = N(c, "Map"),
          T = N(Object, "create"),
          C = b ? b.prototype : void 0,
          k = C ? C.toString : void 0;
        function x(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function I(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function O(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function A(e, t) {
          for (var n, r, o = e.length; o--; )
            if ((n = e[o][0]) === (r = t) || (n != n && r != r)) return o;
          return -1;
        }
        function P(e, t) {
          for (
            var o,
              i = 0,
              a = (t = (function (e, t) {
                if (B(e)) return !1;
                var o = typeof e;
                if (
                  "number" == o ||
                  "symbol" == o ||
                  "boolean" == o ||
                  null == e ||
                  j(e)
                )
                  return !0;
                return (
                  r.test(e) || !n.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : B((o = t))
                ? o
                : D(o)).length;
            null != e && i < a;

          )
            e = e[M(t[i++])];
          return i && i == a ? e : void 0;
        }
        function L(e) {
          return (
            !(!F(e) || ((t = e), g && g in t)) &&
            ((function (e) {
              var t = F(e) ? y.call(e) : "";
              return (
                "[object Function]" == t || "[object GeneratorFunction]" == t
              );
            })(e) ||
            (function (e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                try {
                  t = !!(e + "");
                } catch (e) {}
              return t;
            })(e)
              ? w
              : s
            ).test(
              (function (e) {
                if (null != e) {
                  try {
                    return v.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              })(e)
            )
          );
          var t;
        }
        function R(e, t) {
          var n,
            r,
            o = e.__data__;
          return (
            "string" == (r = typeof (n = t)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? o["string" == typeof t ? "string" : "hash"]
            : o.map;
        }
        function N(e, t) {
          var n = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return L(n) ? n : void 0;
        }
        (x.prototype.clear = function () {
          this.__data__ = T ? T(null) : {};
        }),
          (x.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (x.prototype.get = function (e) {
            var t = this.__data__;
            if (T) {
              var n = t[e];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return _.call(t, e) ? t[e] : void 0;
          }),
          (x.prototype.has = function (e) {
            var t = this.__data__;
            return T ? void 0 !== t[e] : _.call(t, e);
          }),
          (x.prototype.set = function (e, t) {
            return (
              (this.__data__[e] =
                T && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          }),
          (I.prototype.clear = function () {
            this.__data__ = [];
          }),
          (I.prototype.delete = function (e) {
            var t = this.__data__,
              n = A(t, e);
            return (
              !(n < 0) && (n == t.length - 1 ? t.pop() : S.call(t, n, 1), !0)
            );
          }),
          (I.prototype.get = function (e) {
            var t = this.__data__,
              n = A(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (I.prototype.has = function (e) {
            return A(this.__data__, e) > -1;
          }),
          (I.prototype.set = function (e, t) {
            var n = this.__data__,
              r = A(n, e);
            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
          }),
          (O.prototype.clear = function () {
            this.__data__ = {
              hash: new x(),
              map: new (E || I)(),
              string: new x(),
            };
          }),
          (O.prototype.delete = function (e) {
            return R(this, e).delete(e);
          }),
          (O.prototype.get = function (e) {
            return R(this, e).get(e);
          }),
          (O.prototype.has = function (e) {
            return R(this, e).has(e);
          }),
          (O.prototype.set = function (e, t) {
            return R(this, e).set(e, t), this;
          });
        var D = U(function (e) {
          var t;
          e =
            null == (t = e)
              ? ""
              : (function (e) {
                  if ("string" == typeof e) return e;
                  if (j(e)) return k ? k.call(e) : "";
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                })(t);
          var n = [];
          return (
            o.test(e) && n.push(""),
            e.replace(i, function (e, t, r, o) {
              n.push(r ? o.replace(a, "$1") : t || e);
            }),
            n
          );
        });
        function M(e) {
          if ("string" == typeof e || j(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }
        function U(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var n = function () {
            var r = arguments,
              o = t ? t.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, r);
            return (n.cache = i.set(o, a)), a;
          };
          return (n.cache = new (U.Cache || O)()), n;
        }
        U.Cache = O;
        var B = Array.isArray;
        function F(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function j(e) {
          return (
            "symbol" == typeof e ||
            ((function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
              "[object Symbol]" == y.call(e))
          );
        }
        e.exports = function (e, t, n) {
          var r = null == e ? void 0 : P(e, t);
          return void 0 === r ? n : r;
        };
      }).call(this, n(32));
    },
    377: function (e, t, n) {
      var r = n(0),
        o = n(1133),
        i = n(385),
        a = n(2),
        s = n(44);
      function u() {
        if (!(this instanceof u))
          throw new TypeError("Cannot call a class as a function");
        (this.update = this.update.bind(this)),
          (this.getContainerRef = function (e) {
            this.container = e;
          }.bind(this));
      }
      (u.prototype = Object.create(r.Component.prototype)),
        (u.prototype.componentDidMount = function () {
          window.addEventListener("resize", this.update, !1),
            window.addEventListener("load", this.update, !1),
            this.dotdotdot(s.findDOMNode(this.container));
        }),
        (u.prototype.componentWillUnmount = function () {
          window.removeEventListener("resize", this.update, !1),
            window.removeEventListener("load", this.update, !1);
        }),
        (u.prototype.componentDidUpdate = function () {
          this.dotdotdot(s.findDOMNode(this.container));
        }),
        (u.prototype.dotdotdot = function (e) {
          if (e && this.props.clamp) {
            if (e.length)
              throw new Error("Please provide exacly one child to dotdotdot");
            o(
              e,
              i(this.props, [
                "animate",
                "clamp",
                "splitOnChars",
                "truncationChar",
                "truncationHTML",
                "useNativeClamp",
              ])
            );
          }
        }),
        (u.prototype.update = function () {
          this.forceUpdate();
        }),
        (u.prototype.render = function () {
          return r.createElement(
            this.props.tagName,
            { ref: this.getContainerRef, className: this.props.className },
            this.props.children
          );
        }),
        (u.propTypes = {
          children: a.node,
          clamp: a.oneOfType([a.string, a.number, a.bool]).isRequired,
          truncationChar: a.string,
          useNativeClamp: a.bool,
          className: a.string,
          tagName: a.string,
        }),
        (u.defaultProps = {
          truncationChar: "…",
          useNativeClamp: !1,
          tagName: "div",
        }),
        (e.exports = u);
    },
    386: function (e, t, n) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ e.exports = function (e) {
        return null != e && "object" == typeof e && !1 === Array.isArray(e);
      };
    },
    481: function (e, t, n) {
      "use strict";
      var r = n(845),
        o = Object.prototype.toString;
      function i(e) {
        return "[object Array]" === o.call(e);
      }
      function a(e) {
        return void 0 === e;
      }
      function s(e) {
        return null !== e && "object" == typeof e;
      }
      function u(e) {
        return "[object Function]" === o.call(e);
      }
      function l(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), i(e)))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      e.exports = {
        isArray: i,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === o.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !a(e) &&
            null !== e.constructor &&
            !a(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: s,
        isUndefined: a,
        isDate: function (e) {
          return "[object Date]" === o.call(e);
        },
        isFile: function (e) {
          return "[object File]" === o.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === o.call(e);
        },
        isFunction: u,
        isStream: function (e) {
          return s(e) && u(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: l,
        merge: function e() {
          var t = {};
          function n(n, r) {
            "object" == typeof t[r] && "object" == typeof n
              ? (t[r] = e(t[r], n))
              : (t[r] = n);
          }
          for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n);
          return t;
        },
        deepMerge: function e() {
          var t = {};
          function n(n, r) {
            "object" == typeof t[r] && "object" == typeof n
              ? (t[r] = e(t[r], n))
              : (t[r] = "object" == typeof n ? e({}, n) : n);
          }
          for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n);
          return t;
        },
        extend: function (e, t, n) {
          return (
            l(t, function (t, o) {
              e[o] = n && "function" == typeof t ? r(t, n) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        },
      };
    },
    559: function (e, t, n) {
      var r = n(98),
        o = n(315),
        i = n(853),
        a = n(1132);
      o = "function" == typeof o.default ? o.default : o;
      var s = { lowerCaseAttributeNames: !1 };
      function u(e, t) {
        if ("string" != typeof e)
          throw new TypeError("First argument must be a string");
        return "" === e ? [] : a(o(e, (t = t || {}).htmlparser2 || s), t);
      }
      (u.domToReact = a),
        (u.htmlToDOM = o),
        (u.attributesToProps = i),
        (u.Comment = r.Comment),
        (u.Element = r.Element),
        (u.ProcessingInstruction = r.ProcessingInstruction),
        (u.Text = r.Text),
        (e.exports = u),
        (u.default = u);
    },
    600: function (e, t, n) {
      "use strict";
      var r, o;
      (r = n(1181)),
        (o = n(1182)),
        (t.version = r.version),
        (t.renderToString = r.renderToString),
        (t.renderToStaticMarkup = r.renderToStaticMarkup),
        (t.renderToNodeStream = r.renderToNodeStream),
        (t.renderToStaticNodeStream = r.renderToStaticNodeStream),
        (t.renderToReadableStream = o.renderToReadableStream);
    },
    7: function (e, t, n) {
      "use strict";
      (function (e, r, o) {
        var i = n(1);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          (t.getTrainingIdByType = ge);
        var a,
          s = i(n(28)),
          u = i(n(64)),
          l = i(n(3)),
          c = i(n(5)),
          d = i(n(308)),
          f = i(n(313)),
          p = i(n(51)),
          h = i(n(24)),
          m = i(n(54)),
          g = i(n(309)),
          v = i(n(344)),
          _ = i(n(13)),
          y = i(n(33)),
          w = n(17);
        function b(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function S(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? b(Object(n), !0).forEach(function (t) {
                  (0, l.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var E = {},
          T = {};
        "undefined" != typeof window && (T = window.Config);
        var C = {
            article: "articles",
            ebook: "ebooks",
            webinar: "webinars",
            "on-demand-webinar": "on-demand-webinars",
            fpt: "free-practice-tests",
          },
          k = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          x = ["webinar", "tutorial", "article", "ebook"];
        function I(e, t) {
          var n,
            r,
            o,
            i = "";
          for (
            i = X() ? document.cookie.split(";") : (t || "").split(";"), n = 0;
            n < i.length;
            n++
          )
            if (
              ((r = i[n].substr(0, i[n].indexOf("="))),
              (o = i[n].substr(i[n].indexOf("=") + 1)),
              (r = r.replace(/^\s+|\s+$/g, "")) == e)
            )
              return unescape(o);
        }
        function O(e, t) {
          var n,
            r,
            o = "";
          for (
            o = X() ? document.cookie.split(";") : (t || "").split(";"), n = 0;
            n < o.length;
            n++
          ) {
            (r = o[n].substr(0, o[n].indexOf("="))),
              o[n].substr(o[n].indexOf("=") + 1);
            var i = (r = r.replace(/^\s+|\s+$/g, "")).match(e);
            if (i) return i;
          }
        }
        function A(e, t, n) {
          var r = new Date();
          r.setTime(r.getTime() + 864e5 * n);
          var o =
            void 0 !== window.Config && void 0 !== window.Config.cookieDomain
              ? window.Config.cookieDomain
              : ".simplilearn.com";
          document.cookie =
            e +
            "=" +
            t +
            ";path=/;expires=" +
            r.toGMTString() +
            ";domain=" +
            o +
            ";SameSite=Lax";
        }
        function P(e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s = new URLSearchParams(e),
            u =
              !(
                null === (t = window) ||
                void 0 === t ||
                null === (n = t.Config) ||
                void 0 === n ||
                null === (r = n.app) ||
                void 0 === r ||
                !r.UTM_PAGE_VERSION_STRING
              ) &&
              (null === (o = window) ||
              void 0 === o ||
              null === (i = o.Config) ||
              void 0 === i ||
              null === (a = i.app) ||
              void 0 === a
                ? void 0
                : a.UTM_PAGE_VERSION_STRING);
          s &&
            u &&
            (("v2" !== s.get(u) && "V2" !== s.get(u)) ||
              SLFunctions.setCookie(u, "v2", 1));
        }
        function L(e, t, n) {
          var r = new Date();
          r.setTime(r.getTime() + 864e5 * n);
          var o =
              void 0 !== window.Config &&
              void 0 !== window.Config.app &&
              void 0 !== window.Config.app.DEFAULT_SL_DOMAIN
                ? window.Config.app.DEFAULT_SL_DOMAIN
                : "simplilearn.com",
            i =
              void 0 !== window.Config &&
              void 0 !== window.Config.cookieDomain &&
              0 == window.Config.cookieDomain.includes(o)
                ? window.Config.cookieDomain
                : ".simplilearn.com";
          document.cookie =
            e +
            "=" +
            t +
            ";path=/;expires=" +
            r.toGMTString() +
            ";domain=" +
            i +
            ";SameSite=Lax";
        }
        function R() {
          var e = M(),
            t = e.search(/|/i),
            n = !1,
            r = "",
            o = "";
          if ("" != e && t >= 0) {
            if ((e = e.split("|")).length > 0) {
              for (var i = 0; i < e.length; i++)
                if ((t = e[i].search(/=/i)) >= 0) {
                  var a = e[i].split("=");
                  (t = a[0].search(/utmcsr/i)),
                    "utmccn" == a[0] && "" != a[1]
                      ? (n = !0)
                      : -1 != a[0].search(/utmgclid/i) && (r = a[1]);
                }
              return n && "" != r && (o = r), o;
            }
            return o;
          }
          return o;
        }
        function N() {
          var e = D("utm_source"),
            t = D("utm_campaign"),
            n = D("utm_medium"),
            r = D("utm_term"),
            o = D("utm_content"),
            i = D("gclid"),
            a = null;
          return (
            (e || t || n || r || o || i) &&
              (a =
                "utmcsr=" +
                e +
                "|utmgclid=" +
                i +
                "|utmccn=" +
                t +
                "|utmcmd=" +
                n +
                "|utmctr=" +
                r +
                "|utmcct=" +
                o +
                "|create_type=manual_url"),
            a
          );
        }
        function D(e) {
          e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
          return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
        }
        function M() {
          var e,
            t,
            n,
            r,
            o,
            i,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "__utmz",
            s =
              "utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)|create_type=manual",
            u = I(a);
          if (
            ((void 0 !== u && u) || (u = N()),
            (void 0 === u || !u) && document.referrer)
          ) {
            var l = document.referrer,
              c = l.match(/\/\/[^/]+/),
              d = "",
              f = "referral",
              p = "(referral)",
              h = ["simplilearn", "marketmotive"],
              m = [
                "google",
                "bing",
                "yahoo",
                "baidu",
                "ask",
                "youtube",
                "yandex",
                "aol",
              ],
              g = !1;
            if (Array.isArray(c) && c[0]) {
              for (var v in ((d =
                "string" == typeof c[0] ? c[0].replace("//", "") : ""),
              h)) {
                var _ = h[v];
                -1 !== d.indexOf(_) && (g = !0);
              }
              if (!g)
                for (var y in m) {
                  var w = m[y];
                  if (-1 !== d.indexOf(w)) {
                    (d = w), (f = "organic"), (p = "(organic)");
                    break;
                  }
                }
            }
            if (!g) {
              var b = "",
                S = "";
              u =
                "utmcsr=" +
                d +
                "|utmccn=" +
                p +
                "|utmcmd=" +
                f +
                "|utmctr=" +
                b +
                "|utmcct=" +
                l +
                "|utmgclid=" +
                S +
                "|create_type=manual_ref";
            }
          }
          (void 0 !== u && u) || (u = I("sl_utmz") ? I("sl_utmz") : s);
          var E =
              null !==
                (e =
                  null === (t = window.INITIAL_STATE) ||
                  void 0 === t ||
                  null === (n = t.paramsData) ||
                  void 0 === n
                    ? void 0
                    : n.hostName) && void 0 !== e
                ? e
                : "",
            T =
              null !==
                (r =
                  null === (o = window.INITIAL_STATE) ||
                  void 0 === o ||
                  null === (i = o.paramsData) ||
                  void 0 === i
                    ? void 0
                    : i.isUniversityDomain) &&
              void 0 !== r &&
              r;
          if (!I(a)) {
            var C = new Date();
            C.setTime(C.getTime() + 7776e6),
              (document.cookie =
                T && E
                  ? "sl_utmz=" +
                    u +
                    "; expires=" +
                    C.toGMTString() +
                    "; path=/;domain=." +
                    E +
                    ";SameSite=Lax"
                  : "sl_utmz=" +
                    u +
                    "; expires=" +
                    C.toGMTString() +
                    "; path=/;domain=.simplilearn.com;SameSite=Lax");
          }
          return (
            window && window.user_params && (window.user_params.utm_params = u),
            u
          );
        }
        function U(e) {
          var t = I("__utmz");
          if (
            ((void 0 !== t && t) || (t = I("sl_utmz")),
            "" != t && void 0 !== t && null != t)
          ) {
            var n = "";
            n = (n = t.replace(/(.)+utmcsr/g, "utmcsr")).split("|");
            for (var r = 0; r < n.length; r++) {
              var o = n[r].split("=");
              if (o[0] == e) return o[1];
            }
            return !1;
          }
          return !1;
        }
        function B(e) {
          return (
            (void 0 === e || !e) && (e = "*"),
            (window.latest_lead_uid =
              new Date().getTime() +
              "_" +
              e.substr(0, 4) +
              "_" +
              parseInt(1e4 * Math.random())),
            window.latest_lead_uid
          );
        }
        function F() {
          try {
            if ("undefined" == typeof PAGE_TYPE) return;
            "function" == typeof prechat_sub && prechat_sub();
          } catch (e) {
            console.error("SL:Error prechat_sub failed", e);
          }
        }
        function j(e) {
          if (!e) return !1;
          for (var t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        }
        function W(e, t) {
          (e = j(e) ? {} : e), (t = j(t) ? {} : t);
          var n = e;
          return (
            Object.keys(t).forEach(function (e) {
              n[e] = t[e];
            }),
            n
          );
        }
        function H(t, n) {
          return new e(function (e, r) {
            var o =
                "onScrollReach" +
                (n || "") +
                Date.now() +
                "_" +
                Math.ceil(1e5 * Math.random()),
              i = function () {
                e();
              };
            if (window.scrollY > t) i();
            else {
              var a = function () {
                window.scrollY >= t &&
                  (i(), window.removeEventListener("scroll", a));
              };
              window[o]
                ? console.warn("SL:Warn duplicate event", o)
                : ((window[o] = !0), window.addEventListener("scroll", a));
            }
          });
        }
        function q() {
          if (!j(he().SSO_COOKIE_NAME)) {
            var e = I(he().SSO_COOKIE_NAME);
            if (void 0 !== e && void 0 !== window.user_params) {
              var t = (0, d.default)(e);
              return (
                (window.user_params.loggedIn = !0),
                (window.user_params.user_id = t.data && t.data.id),
                (window.user_params.email = t.data && t.data.email),
                (window.user_params.name = t.data && t.data.name),
                (window.user_params.lgid = t.data && t.data.lgid),
                !0
              );
            }
          }
          return !1;
        }
        function z(e, t) {
          "object" != (0, c.default)(window.sl_custom_val) &&
            (window.sl_custom_val = {}),
            (window.sl_custom_val[e] = t),
            (window.sl_custom_param = encodeURIComponent(
              JSON.stringify(window.sl_custom_val)
            ));
        }
        var Y = function (e) {
          if (e) {
            var t = String(e).split(".");
            return t[0] ? Number(t[0]) : void 0;
          }
        };
        function V(e) {
          return (
            (e = parseInt(e)),
            (e += e * (he().IND_SERVICE_TAX / 100)),
            Math.round(e)
          );
        }
        function G(e) {
          for (
            var t = location.hash.replace("#/", "").replace("#", "").split("&"),
              n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n].split("=");
            if (decodeURIComponent(r[0]) == e)
              return r[1] ? decodeURIComponent(r[1]) : "";
          }
          return null;
        }
        function $(e) {
          if ("undefined" != typeof document) {
            void 0 === e && (e = "onload");
            var t = e,
              n = [].slice.call(document.querySelectorAll(".lazy"));
            try {
              if (Array.isArray(n)) {
                var r = [].slice.call(
                  document.querySelectorAll("img[lazyloadimg]")
                );
                n = n.concat(r);
              }
            } catch (e) {
              console.error("SL:Error lazyLoad", e);
            }
            if (
              ("onload" == t &&
                n.forEach(function (e) {
                  e.classList.remove("lazy"),
                    e.dataset.src &&
                      ((e.src = e.dataset.src),
                      e.classList.add("blend-mode"),
                      e.removeAttribute("data-src"));
                }),
              "ondemand" == t)
            )
              if ("IntersectionObserver" in window) {
                var o = new IntersectionObserver(function (e, t) {
                  e.forEach(function (e) {
                    if (e.isIntersecting) {
                      var t = e.target;
                      if ((t.classList.remove("lazy"), !t.dataset.src)) return;
                      (t.src = t.dataset.src),
                        t.classList.add("blend-mode"),
                        t.removeAttribute("data-src"),
                        o.unobserve(t);
                    }
                  });
                });
                n.forEach(function (e) {
                  o.observe(e);
                });
              } else $((e = "onload"));
          }
        }
        function Z(e) {
          if (
            "undefined" != typeof document &&
            window &&
            [
              "frs-article",
              "course",
              "course-new",
              "classroom-course",
              "degree-program",
              "master",
              "cohort-master",
              "jg-cohort-master",
              "purdue-master",
              "university",
            ].indexOf(window.PAGE_TYPE) > -1
          ) {
            void 0 === e && (e = "onload");
            var t = e,
              n = [].slice.call(document.querySelectorAll(".lazy-picture"));
            try {
              if (Array.isArray(n)) {
                var r = [].slice.call(
                  document.querySelectorAll("source[lazyloadimg]")
                );
                n = n.concat(r);
              }
            } catch (e) {
              console.error("SL:Error lazyLoad", e);
            }
            if (
              ("onload" == t &&
                n.forEach(function (e) {
                  e.classList.remove("lazy-picture"),
                    e.dataset.srcset &&
                      ((e.srcset = e.dataset.srcset),
                      e.classList.add("blend-mode"),
                      e.removeAttribute("data-srcset"));
                }),
              "ondemand" == t)
            )
              if ("IntersectionObserver" in window) {
                var o = new IntersectionObserver(function (e, t) {
                  e.forEach(function (e) {
                    if (e.isIntersecting) {
                      var t = e.target;
                      if (
                        (t.classList.remove("lazy-picture"), !t.dataset.srcset)
                      )
                        return;
                      (t.srcset = t.dataset.srcset),
                        t.classList.add("blend-mode"),
                        t.removeAttribute("data-srcset"),
                        o.unobserve(t);
                    }
                  });
                });
                n.forEach(function (e) {
                  o.observe(e);
                });
              } else $((e = "onload"));
          }
        }
        (String.prototype.rtrim = function (e) {
          return (
            null == e && (e = "\\s"),
            this.replace(new RegExp("[" + e + "]*$"), "")
          );
        }),
          (String.prototype.ltrim = function (e) {
            return (
              null == e && (e = "\\s"),
              this.replace(new RegExp("^[" + e + "]*"), "")
            );
          }),
          String.prototype.padStart ||
            (String.prototype.padStart = function (e, t) {
              return (
                (e >>= 0),
                (t = String(void 0 !== t ? t : " ")),
                this.length > e
                  ? String(this)
                  : ((e -= this.length) > t.length &&
                      (t += t.repeat(e / t.length)),
                    t.slice(0, e) + String(this))
              );
            });
        var J;
        function X() {
          return "undefined" != typeof window;
        }
        function K(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Asia/Kolkata";
          if (void 0 !== e) {
            var n = new Date(
              new Date(
                e.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
              ).toLocaleString("en-US", { timeZone: t })
            );
            return k[n.getMonth()] + " " + n.getDate() + ", " + n.getFullYear();
          }
        }
        function Q() {
          I("simplilearn_first_page") ||
            (A("simplilearn_first_page", location.href, 90),
            A("simplilearn_landing_time", new Date().toISOString(), 90)),
            I("simplilearn_custom") ||
              (function e(t) {
                var n = I("__utmz");
                if (n) {
                  var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l =
                      null !==
                        (r =
                          null === (o = window.INITIAL_STATE) ||
                          void 0 === o ||
                          null === (i = o.paramsData) ||
                          void 0 === i
                            ? void 0
                            : i.hostName) && void 0 !== r
                        ? r
                        : "",
                    c =
                      null !==
                        (a =
                          null === (s = window.INITIAL_STATE) ||
                          void 0 === s ||
                          null === (u = s.paramsData) ||
                          void 0 === u
                            ? void 0
                            : u.isUniversityDomain) &&
                      void 0 !== a &&
                      a,
                    d = new Date();
                  return (
                    d.setTime(d.getTime() + 7776e6),
                    void (document.cookie =
                      c && l
                        ? "simplilearn_custom=" +
                          n +
                          "; expires=" +
                          d.toGMTString() +
                          "; path=/;domain=." +
                          l +
                          ";SameSite=Lax"
                        : "simplilearn_custom=" +
                          n +
                          "; expires=" +
                          d.toGMTString() +
                          "; path=/;domain=.simplilearn.com;SameSite=Lax")
                  );
                }
                if (++t > 10) return !1;
                setTimeout(function () {
                  e(t);
                }, 400);
              })(0);
        }
        function ee() {
          var e = !1;
          if (
            (I("newuser_identify") || (A("newuser_identify", 1, 360), (e = !0)),
            !e &&
              window &&
              window.user_params &&
              window.user_params.adElementData)
          ) {
            var t = window.user_params.adElementData;
            t[0] && t[0].userType && (t[0].userType = "returning"),
              (window.user_params.adElementData = t);
          }
          return e;
        }
        function te() {
          var e = I("__utmz"),
            t = I("sl_utmz");
          return (e = void 0 !== e ? e : t);
        }
        function ne() {
          var e = "unknown",
            t = navigator.userAgent,
            n = [
              { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
              { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
              { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
              { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
              { s: "Windows Vista", r: /Windows NT 6.0/ },
              { s: "Windows Server 2003", r: /Windows NT 5.2/ },
              { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
              { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
              { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
              { s: "Windows 98", r: /(Windows 98|Win98)/ },
              { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
              {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
              },
              { s: "Windows CE", r: /Windows CE/ },
              { s: "Windows 3.11", r: /Win16/ },
              { s: "Android", r: /Android/ },
              { s: "Open BSD", r: /OpenBSD/ },
              { s: "Sun OS", r: /SunOS/ },
              { s: "Linux", r: /(Linux|X11)/ },
              { s: "iOS", r: /(iPhone|iPad|iPod)/ },
              { s: "Mac OS X", r: /Mac OS X/ },
              { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
              { s: "QNX", r: /QNX/ },
              { s: "UNIX", r: /UNIX/ },
              { s: "BeOS", r: /BeOS/ },
              { s: "OS/2", r: /OS\/2/ },
              {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
              },
            ];
          // var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
          for (var r in n) {
            var o = n[r];
            if (o.r.test(t)) {
              e = o.s;
              break;
            }
          }
          var i = "Desktop";
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              navigator.userAgent.substr(0, 4)
            )) &&
            (i = "Mobile");
          var a = null;
          return (
            navigator.userAgent.match(/Android/i) && (a = "Android"),
            navigator.userAgent.match(/BlackBerry/i) && (a = "BlackBerry"),
            navigator.userAgent.match(/iPhone/i) && (a = "iPhone"),
            navigator.userAgent.match(/iPad/i) && (a = "iPad"),
            navigator.userAgent.match(/iPod/i) && (a = "iPod"),
            { browserOs: e, deviceType: i, deviceName: a }
          );
        }
        function re() {
          return window.user_params || {};
        }
        function oe(e, t) {
          var n = "",
            r = T.app.euroCountries;
          return (
            (e = parseInt(e)) &&
              t &&
              Array.isArray(r) &&
              -1 != r.indexOf(e) &&
              -1 !=
                [
                  "course_preview_playlist",
                  "course_agenda_first_fold",
                  "bundle agenda",
                  "course preview",
                  "course agenda",
                  "ebook_download",
                  "frs-ebook-hot",
                  "on demand webinar",
                  "fpt-paper-cold",
                  "GSA_Brochure",
                  "atp brochure",
                  "B2B-ebook",
                ].indexOf(t) &&
              (n =
                "Please contact me about course options and additional scholarships."),
            n
          );
        }
        function ie(e, t, n, r) {
          var o,
            i,
            a,
            s,
            u,
            l,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            _,
            y,
            w,
            b,
            S,
            E,
            C,
            k,
            x,
            O,
            A = re(),
            P = t.sl_event_time,
            L = t.sl_site_module,
            N = t.sl_lead_type,
            U = ae(t.sl_product_training_type),
            F = t.sl_product_id,
            j = void 0 !== e.personEmail ? e.personEmail : t.sl_user_email,
            W = window.cdnCountry || "US",
            H =
              void 0 !== e.leadSourceString ? e.leadSourceString : document.URL,
            q =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.country_id
                ? e.cookie_data.country_id
                : e.countryId,
            z =
              void 0 !== e.cookie_country_name
                ? e.cookie_country_name
                : e.countryName;
          z && (z = z.replace(/\+/g, " "));
          var Y =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.city_id
                ? e.cookie_data.city_id
                : e.cityId,
            V =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.name
                ? e.cookie_data.name
                : e.cityName;
          V && (V = V.replace(/\+/g, " "));
          var G = void 0 !== e.sl_user_message ? e.sl_user_message : "",
            $ = void 0 !== e.leadTrainingType ? e.leadTrainingType : "Not Sure",
            Z = te(),
            J = e.b2cQueryType,
            X = void 0 !== e.productTypeId ? e.productTypeId : "",
            K = void 0 !== e.billingTypeId ? e.billingTypeId : "",
            Q = "One time";
          2 === parseInt(K) && (Q = "Subscription");
          var ee =
            void 0 !== e.selected_course
              ? e.selected_course.id
              : e.sl_product_id;
          !ee && t.sl_product_id && (ee = t.sl_product_id);
          var ie =
            void 0 !== r.default_region_name ? r.default_region_name : "";
          !ee && F && (ee = F),
            (ie =
              void 0 !== e.region_name
                ? e.region_name
                : void 0 !== r.default_region_name
                ? r.default_region_name
                : "") && (ie = ie.replace(/\+/g, " "));
          var ue = void 0 !== e.lead_uid ? e.lead_uid : B(j);
          q || (q = r.id);
          var le = I("_mkto_trk"),
            ce = void 0 !== P ? "leadat" + P : "",
            de = void 0 !== P ? P : "",
            fe = I("simplilearn_custom"),
            pe = I("mbsy"),
            he =
              location.protocol +
              "//" +
              location.hostname +
              (location.port ? ":" + location.port : ""),
            me = navigator.userAgent,
            ge = ne(),
            ve = A.cold_site_modules,
            _e = !0,
            ye =
              "undefined" != typeof leadTeamHot && leadTeamHot
                ? leadTeamHot
                : "hot";
          void 0 !== ve &&
            ve &&
            -1 != ve.indexOf(L) &&
            ((_e = !1),
            (ye =
              "undefined" != typeof leadTeamCold && leadTeamCold
                ? leadTeamCold
                : "cold")),
            void 0 !== A.sl_override_site_module &&
              A.sl_override_site_module &&
              L == A.sl_override_site_module &&
              ((_e = !1),
              (ye =
                "undefined" != typeof leadTeamMql && leadTeamMql
                  ? leadTeamMql
                  : "mql")),
            void 0 !== A.sl_banner_id &&
              A.sl_banner_id &&
              void 0 !== A.sl_override_site_module_banner &&
              A.sl_override_site_module_banner &&
              ((_e = !1), (ye = "mql")),
            (("boolean" == typeof n.isEligible && !n.isEligible) ||
              (1 == D("auto_lead") &&
                "jg-cohort-master" ==
                  (null === (o = window) || void 0 === o
                    ? void 0
                    : o.PAGE_TYPE))) &&
              ((_e = !1), (ye = "cold"));
          var we,
            be =
              "undefined" != typeof window
                ? null === (i = window) ||
                  void 0 === i ||
                  null === (a = i.Config) ||
                  void 0 === a ||
                  null === (s = a.app) ||
                  void 0 === s
                  ? void 0
                  : s.JG_FSD_BUNDLE_ID
                : void 0;
          we = oe(q, L);
          var Se = "Online";
          "Tollfree" == L && (Se = "Offline");
          var Ee = se(I("simplilearn_landing_time")),
            Ce = I("__staticWebinar");
          "string" != typeof Ce ||
            "" === Ce ||
            ("frs-video" !=
              (null === (u = window) || void 0 === u ? void 0 : u.PAGE_TYPE) &&
              "frs-article" !=
                (null === (l = window) || void 0 === l
                  ? void 0
                  : l.PAGE_TYPE)) ||
            ((fe = Ce), (Z = Ce));
          var ke = (null == e ? void 0 : e.isForcedHotLead) || !1,
            xe = Te(),
            Ie = !1,
            Oe = !1,
            Ae = "v2",
            Pe =
              !(
                null === (d = window) ||
                void 0 === d ||
                null === (f = d.Config) ||
                void 0 === f ||
                null === (p = f.app) ||
                void 0 === p ||
                !p.UTM_PAGE_VERSION_STRING
              ) &&
              (null === (h = window) ||
              void 0 === h ||
              null === (m = h.Config) ||
              void 0 === m ||
              null === (g = m.app) ||
              void 0 === g
                ? void 0
                : g.UTM_PAGE_VERSION_STRING);
          if (Pe) {
            var Le, Re, Ne, De, Me;
            if ((I(Pe) && (Ie = I(Pe) == Ae), H)) {
              var Be = new RegExp("(".concat(Pe, "=").concat(Ae, ")(&|$)"));
              (Oe = H.match(Be)) ||
                ((Ae = "V2"),
                (Be = new RegExp("(".concat(Pe, "=").concat(Ae, ")(&|$)"))),
                (Oe = H.match(Be)));
            }
            var Fe = !(
              null === (Le = window) ||
              void 0 === Le ||
              null === (Re = Le.COMPONENT_INITIAL_DATA) ||
              void 0 === Re ||
              !Re.universityName ||
              null ==
                (null === (Ne = window) ||
                void 0 === Ne ||
                null === (De = Ne.COMPONENT_INITIAL_DATA) ||
                void 0 === De
                  ? void 0
                  : De.universityName)
            );
            ("university" ===
              (null === (Me = window) || void 0 === Me
                ? void 0
                : Me.PAGE_TYPE) ||
              !1) &&
              (Oe || Ie) &&
              Fe &&
              "No Experience" ===
                (null == e ? void 0 : e.years_of_experience) &&
              ((_e = !1), (ye = "cold"));
          }
          var je,
            We = {
              sl_user_country: z,
              countryId: q,
              city_id: Y,
              city: V,
              sl_user_message: G,
              sl_lead_user_message: G,
              lead_training_type: $,
              lead_source_string: H,
              last_cookie_source: Z,
              type: L || J,
              product_type_id: isNaN(X) ? "" : parseInt(X),
              billing_type_id: K,
              billing_type_name: Q,
              first_cookie_source: void 0 !== fe ? fe : "",
              user_agent: me,
              Browser: void 0 !== me ? me : "",
              crt_lead_time: de,
              cookie: void 0 !== le ? le : "",
              first_page: I("simplilearn_first_page"),
              first_page_time: Ee,
              optInText: we,
              mbsy_short_code: void 0 !== pe ? pe : "",
              GCLID: R(),
              lead_uid: ue,
              microKey: ce,
              entity_id: ee,
              sl_user_state: ie,
              prefilled_source: e.prefilled_source || "",
              prefillled_data: e.prefillled_data || "",
              prefilled_modified: e.prefilled_modified || 0,
              Website: he,
              device_type: ge.deviceType,
              device_os: ge.browserOs,
              device_name: ge.deviceName,
              Operating_System: ge.browserOs,
              isHotLead: !!ke || _e,
              lead_creation_mode: Se,
              cdnCountry: W,
              Entry_Page: H,
              queryType: void 0 !== N ? N : "b2c",
              recordType: "B2C",
              bu_type: "B2C",
              team: "marketing",
              lead_stage: "New",
              lead_status: "Sales Rep Needs To Call/Email",
              leadsource: "SL-Website",
              Created_By_Email: "marketinglead@simplilearn.com",
              trainingType: U,
              lead_team: ke ? "hot" : ye,
              campaign_source: xe.campaign_source || "",
              campaign_source_id: xe.campaign_source_id || "",
              mkwid: xe.mkwid || "",
              sl_call_opt_in: !0,
              auto_lead: e.auto_lead || 0,
              fbbrowserid: I("_fbp") || "",
              webinar_title: e.webinar_title || "",
              webinarKey: e.webinarKey || "",
              referrer_email: e.refererEmail || "",
              referrer_name: e.refererName || "",
              sl_lead_user_consent:
                (null == n ? void 0 : n.sms_compliance_agreed) || void 0,
            };
          "jg-cohort-master" ==
            (null === (v = window) || void 0 === v ? void 0 : v.PAGE_TYPE) &&
            ee &&
            ee == be &&
            q ==
              (null === (_ = T) ||
              void 0 === _ ||
              null === (y = _.app) ||
              void 0 === y
                ? void 0
                : y.IND_COUNTRY_ID) &&
            ((We.is_jg_eligible = !0),
            (We.is_technical = !0),
            (We.hackerearth_test_id =
              void 0 !== A &&
              A &&
              null !== (je = null == A ? void 0 : A.exam_id) &&
              void 0 !== je
                ? je
                : void 0));
          "university-domain-new" ==
            (null === (w = window) || void 0 === w ? void 0 : w.PAGE_TYPE) &&
            null !== (b = window) &&
            void 0 !== b &&
            null !== (S = b.COMPONENT_INITIAL_DATA) &&
            void 0 !== S &&
            S.isApplicationformEnable &&
            ((We.hostname = he), (We.isApplicationUrlSet = !0)),
            "jg-cohort-master" ==
              (null === (E = window) || void 0 === E ? void 0 : E.PAGE_TYPE) &&
              ee &&
              ee == be &&
              (t.sl_utm_src || (t.sl_utm_src = M())),
            (null == n ||
            null === (C = n.applicationDataJobGuarantee) ||
            void 0 === C
              ? void 0
              : C.length) > 0 &&
              ((We.isEligible = n.isEligible),
              n.isEligible && (We.application = n.applicationDataJobGuarantee)),
            "string" != typeof Ce ||
              "" === Ce ||
              ("frs-video" !=
                (null === (k = window) || void 0 === k
                  ? void 0
                  : k.PAGE_TYPE) &&
                "frs-article" !=
                  (null === (x = window) || void 0 === x
                    ? void 0
                    : x.PAGE_TYPE)) ||
              (We.sl_utm_src = Ce),
            e.years_of_experience &&
              (We.years_of_experience = e.years_of_experience),
            e.schedule_call_date_time &&
              (We.schedule_call_date_time = e.schedule_call_date_time),
            null != e && e.timeZone && (We.timeZone = e.timeZone),
            e.schedule_call_date_time &&
              (We.group_enrollment_status =
                (null == e ? void 0 : e.group_enrollment_status) || 0),
            e.lead_creation_time &&
              (We.lead_creation_time = e.lead_creation_time);
          var He = {};
          if (t.sl_user_last_name) {
            var qe = t.sl_user_last_name;
            t.sl_user_last_name = qe.trim();
          }
          if (t.sl_user_first_name) {
            var ze = t.sl_user_first_name;
            t.sl_user_first_name = ze.trim();
          }
          t.sl_product_id ||
            (We.sl_product_id = e.sl_product_id ? e.sl_product_id : ""),
            t.sl_product_name ||
              (We.sl_product_name = e.sl_product_name ? e.sl_product_name : "");
          for (
            var Ye = [
                "createdByEmail",
                "chatOwnerEmail",
                "alternatePhone",
                "alternateEmail",
                "hiddenTokenChat",
                "cl_assign_flag",
                "sl_utm_src",
                "years_of_experience",
              ],
              Ve = 0;
            Ve < Ye.length;
            Ve++
          )
            e[Ye[Ve]] && (We[Ye[Ve]] = e[Ye[Ve]] ? e[Ye[Ve]] : "");
          "refer-and-earn" ==
            (null === (O = window) || void 0 === O ? void 0 : O.PAGE_TYPE) &&
            ((We.referrer_email = n.referrer_email),
            (We.referrer_name = n.referrer_name),
            (We.sl_product_name =
              (null == e ? void 0 : e.courseName) ||
              (null == t ? void 0 : t.sl_product_name) ||
              ""),
            (We.sl_referrer_email_id =
              (null == n ? void 0 : n.referrer_email) || "")),
            e.leadsource &&
              (We.leadsource = e.leadsource ? e.leadsource : We.leadsource),
            e.address && (We.address = e.address ? e.address : We.address),
            (We.lead_submitted_timestamp = new Date().getTime());
          var Ge = Ue();
          if (
            (Ge && (We.ga_client_identifier = Ge),
            t.sl_user_email &&
              "undefined" != typeof window &&
              void 0 !== window.CryptoJS)
          ) {
            var $e,
              Ze,
              Je,
              Xe =
                null !==
                  ($e =
                    null === (Ze = window) ||
                    void 0 === Ze ||
                    null === (Je = Ze.CryptoJS) ||
                    void 0 === Je
                      ? void 0
                      : Je.SHA256(t.sl_user_email)) && void 0 !== $e
                  ? $e
                  : void 0;
            Xe && (We.sl_user_email_hash = Xe.toString());
          }
          if (
            !t.sl_user_phone &&
            "undefined" != typeof webengage &&
            void 0 !== webengage.state
          ) {
            var Ke = webengage.state.getForever();
            if (void 0 !== Ke && null != Ke) {
              var Qe = Ke.uattr;
              void 0 !== Qe && "undefined" !== Qe.we_phone && Qe.we_phone
                ? (We.sl_user_phone = Qe.we_phone)
                : n &&
                  n.phone &&
                  "logged_in_user" == n.source &&
                  (We.sl_user_phone = n.phone);
            } else
              n &&
                n.phone &&
                "logged_in_user" == n.source &&
                (We.sl_user_phone = n.phone);
          }
          for (var et in t)
            "object" == (0, c.default)(t[et])
              ? (He[et] = JSON.stringify(t[et]))
              : (He[et] = t[et]);
          for (var tt in We) He[tt] = We[tt];
          return (
            (He.event_id = "sl_lead_created"),
            (He.event_name = "Lead created"),
            sessionStorage &&
              ((He.we_attr_data = JSON.parse(
                sessionStorage.getItem("we_attr_data")
              )),
              (He.we_event_data = JSON.parse(
                sessionStorage.getItem("we_event_data")
              )),
              sessionStorage.setItem("we_attr_data", JSON.stringify([])),
              sessionStorage.setItem("we_event_data", JSON.stringify([]))),
            He
          );
        }
        function ae(e) {
          var t = "";
          if (void 0 !== e)
            switch (e) {
              case "classroom":
                t = "Classroom Training";
                break;
              case "osl":
                t = "Online Self Learning";
                break;
              case "coursePass":
              case "lvc":
                t = "Online Classroom Flexi-Pass";
                break;
              case "online":
                t = "Online Self Learning";
                break;
              default:
                t = "Online Self Learning";
            }
          return t;
        }
        function se(e) {
          var t = "";
          if (void 0 !== e && e) {
            var n = new Date(e),
              r = n.getFullYear(),
              o = n.getDate(),
              i = n.getMonth() + 1;
            o < 10 && (o = "0" + o), i < 10 && (i = "0" + i);
            var a = r + "-" + i + "-" + o,
              s = n.getHours(),
              u = n.getMinutes(),
              l = n.getSeconds();
            s < 10 && (s = "0" + s),
              u < 10 && (u = "0" + u),
              l < 10 && (l = "0" + l),
              (t = a + " " + s + ":" + u + ":" + l);
          }
          return t;
        }
        function ue() {
          if (X()) {
            var e =
                (!!window.opr && !!opr.addons) ||
                !!window.opera ||
                navigator.userAgent.indexOf(" OPR/") >= 0,
              t = "undefined" != typeof InstallTrigger,
              n =
                /constructor/i.test(window.HTMLElement) ||
                "[object SafariRemoteNotification]" ===
                  (
                    !window.safari ||
                    ("undefined" != typeof safari && safari.pushNotification)
                  ).toString(),
              r = !!document.documentMode,
              o = !r && !!window.StyleMedia,
              i = !(
                !window.chrome ||
                (!window.chrome.webstore && !window.chrome.runtime)
              ),
              a = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
              s =
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MSStream;
            return {
              isOpera: e,
              isFirefox: t,
              isSafari: n,
              isIE: r,
              isEdge: o,
              isChrome: i,
              isIos: s,
              isIosSafari: a && s,
            };
          }
        }
        X() &&
          (q(),
          (window.onscroll = function () {
            var e = window.pageYOffset;
            document.querySelectorAll("[data-an]").forEach(function (t) {
              var n = t.offsetTop,
                r = t.offsetHeight;
              if (e >= n && e - n >= 0 && e - n <= r) {
                var o = (50 * (e - n)) / r,
                  i = t.dataset.an;
                document.querySelector(
                  '[data-progress="'.concat(i, '"]')
                ).style.width = o + "%";
              }
            });
            for (
              var t = document.querySelectorAll(".nav-sticky"), n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (!r.attributes.getNamedItem("data-parent-dom"))
                return void console.error(
                  "SL:Error sitckyScrollInit - data-parent-dom is empty"
                );
              var o = document.querySelector(
                  "." + r.attributes.getNamedItem("data-parent-dom").value
                ),
                i = 100;
              document.getElementById("curriculum-height") && (i = 0),
                document.getElementById("prd-curriculum-height") && (i = 60),
                document.getElementById("freemium-course") && (i = 72);
              var a = o && o.offsetTop ? o.offsetTop + i : i,
                s = o && o.offsetHeight ? a + o.offsetHeight : a;
              window.pageYOffset >= a &&
              window.pageYOffset + window.innerHeight <= s
                ? r.classList.add("sticky-top")
                : r.classList.remove("sticky-top"),
                window.pageYOffset + window.innerHeight > s
                  ? r.classList.add("sticky-bottom")
                  : r.classList.remove("sticky-bottom");
            }
          }),
          Q(),
          (function e(t) {
            var n = I("__utmz");
            if (n) {
              var r = new Date();
              return (
                r.setTime(r.getTime() + 7776e6),
                void (document.cookie =
                  "sl_su_utmz=" +
                  n +
                  "; expires=" +
                  r.toGMTString() +
                  "; path=/;domain=.simplilearn.com;SameSite=Lax")
              );
            }
            if (++t > 10) return !1;
            setTimeout(function () {
              e(t);
            }, 400);
          })(0),
          X() &&
            window.addEventListener("load", function () {
              try {
                var e = document.createElement("script");
                (e.id = "intersection-observer-script"),
                  (e.type = "text/javascript"),
                  (e.innerHTML =
                    '!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/s+/).map(function(t){var e=/^(-?d*.?d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var r=i.element,s=h(r),c=this._rootContainsTarget(r),a=i.entry,u=e&&c&&this._computeTargetAndRootIntersection(r,n),l=i.entry=new o({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:n,intersectionRect:u});a?e&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var i,r,s,c,u,l,p,d,g=h(n),f=a(n),_=!1;!_;){var v=null,m=1==f.nodeType?t.getComputedStyle(f):{};if("none"==m.display)return;if(f==this.root||f==e?(_=!0,v=o):f!=e.body&&f!=e.documentElement&&"visible"!=m.overflow&&(v=h(f)),v&&(i=v,r=g,s=void 0,c=void 0,u=void 0,l=void 0,p=void 0,d=void 0,s=Math.max(i.top,r.top),c=Math.min(i.bottom,r.bottom),u=Math.max(i.left,r.left),l=Math.min(i.right,r.right),d=c-s,!(g=(p=l-u)>=0&&d>=0&&{top:s,bottom:c,left:u,right:l,width:p,height:d})))break;f=a(f)}return g}},i.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},i.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},i.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},i.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=o}function o(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=a(n)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(window,document);'),
                  e.addEventListener("load", function () {
                    try {
                      (window.pageLoaded = !0), Z("ondemand"), $("ondemand");
                    } catch (e) {
                      console.error("Error::Lazy Loading...");
                    }
                  }),
                  e.setAttribute("defer", "defer"),
                  e.setAttribute("async", "async"),
                  e.setAttribute("data-timestamp", +new Date()),
                  setTimeout(function () {
                    document.getElementsByTagName("head")[0].appendChild(e),
                      e.dispatchEvent(new Event("load"));
                  }, window.pageLoadDelay);
              } catch (e) {
                console.log("Error", e);
              }
            }),
          ee(),
          (function () {
            try {
              window.addEventListener(
                "load",
                function () {
                  var e = U("utmcsr"),
                    t = U("utmcmd"),
                    n = ["gclid", "fbclid", "msclkid"],
                    r = D("mkwid"),
                    o = I("user_source_cookie"),
                    i = !1,
                    a = e + "," + t;
                  if (o) {
                    var s = [];
                    o && (s = o.split(","));
                    var u = "",
                      l = "";
                    void 0 !== s &&
                      s.length > 0 &&
                      ((u = s[0] ? s[0] : ""), (l = s[1] ? s[1] : "")),
                      ((e && e.toUpperCase() !== u.toUpperCase()) ||
                        (e &&
                          e.toUpperCase() == u.toUpperCase() &&
                          t &&
                          l &&
                          t.toUpperCase() !== l.toUpperCase())) &&
                        ((i = !0), A("user_source_cookie", a, 180));
                  } else A("user_source_cookie", a, 180);
                  for (var d = !1, f = 0; f < n.length; f++) {
                    var p = n[f],
                      h = D(p);
                    if (void 0 !== h && h) {
                      var m = {};
                      (m[p] = h),
                        A("campaign_source", JSON.stringify(m), 180),
                        (d = !0);
                      break;
                    }
                  }
                  if (
                    (!d && i && A("campaign_source", 0, 0), void 0 !== r && r)
                  ) {
                    var g = { mkwid: r };
                    A("campaign_platform", JSON.stringify(g), 180);
                  } else (d || i) && A("campaign_platform", 0, 0);
                  var v = Te();
                  if (v) {
                    var _ =
                      "fbclid" == v.campaign_source
                        ? I("_fbc")
                        : v.campaign_source_id;
                    z("campaign_source", v.campaign_source || ""),
                      z("campaign_source_id", _),
                      z("fbbrowserid", I("_fbp") || ""),
                      z(
                        "mkwid",
                        ("object" == (0, c.default)(v) && v.mkwid) || ""
                      );
                  }
                  !(function e(t) {
                    var n = I("_fbc"),
                      r = I("_fbp");
                    if (n || r) {
                      var o = Te();
                      if (o) {
                        var i =
                          "fbclid" == o.campaign_source
                            ? n
                            : o.campaign_source_id;
                        z("campaign_source", o.campaign_source || ""),
                          z("campaign_source_id", i),
                          z("fbbrowserid", r || "");
                      }
                    } else {
                      if (++t > 10) return !1;
                      setTimeout(function () {
                        e(t);
                      }, 1500);
                    }
                  })(0);
                },
                !1
              );
            } catch (e) {
              console.error("SL:Error setSimplilearnCampaignCookies failed", e);
            }
          })(),
          document.cookie.split(";").filter(function (e) {
            return e.includes("__utmz");
          }).length > 1 &&
            (document.cookie =
              "__utmz=; expires=-1; path=/;domain=.www.simplilearn.com;"),
          (function () {
            var e, t;
            if (
              null !== (e = window.COMPONENT_INITIAL_DATA) &&
              void 0 !== e &&
              null !== (t = e.companyDetails) &&
              void 0 !== t &&
              t.identifier
            ) {
              var n = I("_entp"),
                r = window.COMPONENT_INITIAL_DATA.companyDetails.identifier;
              if (n) {
                var o, i;
                if (
                  (null !==
                    (o =
                      null === (i = n.split("|^|")) || void 0 === i
                        ? void 0
                        : i[0]) && void 0 !== o
                    ? o
                    : "") !== r
                ) {
                  A("_entp", "", 0);
                  var a = window.COMPONENT_INITIAL_DATA.companyDetails.imageUrl,
                    s = [
                      r,
                      window.Config.app.ENTERPRISE_SUBDOMAIN_URL +
                        "/partners/" +
                        r,
                      a,
                    ];
                  A("_entp", (s = s.join("|^|")), 90);
                }
              } else {
                var u = window.COMPONENT_INITIAL_DATA.companyDetails.imageUrl,
                  l = [
                    r,
                    window.Config.app.ENTERPRISE_SUBDOMAIN_URL +
                      "/partners/" +
                      r,
                    u,
                  ];
                A("_entp", (l = l.join("|^|")), 90);
              }
            } else A("_entp", "", 0);
          })()),
          (String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
          });
        var le = {};
        var ce = {};
        function de(e, t, n) {
          void 0 === n && (n = document);
          var r = "_listener_" + t;
          le[r] && (n.removeEventListener(e, le[r]), delete le[r]);
        }
        function fe() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          return (0, v.default)(e, t, n);
        }
        function pe(e) {
          if (void 0 !== e) return e[0].toUpperCase() + e.slice(1);
        }
        function he() {
          return X() && void 0 !== window.Config
            ? window.Config.app
            : fe(r, "Config.app", {});
        }
        function me() {
          return X() ? window.Config.CONSTANTS : fe(r, "Config.CONSTANTS", {});
        }
        function ge(e) {
          var t = "";
          if (void 0 !== e)
            switch (e) {
              case "classroom":
                t = 1;
                break;
              case "osl":
                t = 2;
                break;
              case "lvc":
                t = 9;
            }
          return t;
        }
        function ve(e, t, n, r) {
          re();
          var o = t.sl_event_time,
            i = t.sl_site_module,
            a = ae(t.sl_product_training_type),
            s = t.sl_product_id ? t.sl_product_id : null,
            u = void 0 !== e.productTypeId ? parseInt(e.productTypeId) : null,
            l = e.isCorporateTraining;
          (s && void 0 !== s) ||
            ("undefined" != typeof window && "category" === window.PAGE_TYPE) ||
            (l || (t.sl_product_type = ""), (u = null));
          var d = void 0 !== e.personEmail ? e.personEmail : t.sl_user_email,
            f = window.cdnCountry || "US",
            p =
              void 0 !== e.leadSourceString ? e.leadSourceString : document.URL,
            h =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.country_id
                ? e.cookie_data.country_id
                : e.countryId,
            m =
              void 0 !== e.cookie_country_name
                ? e.cookie_country_name
                : e.countryName;
          void 0 === m && (m = t.sl_user_country),
            m && (m = m.replace(/\+/g, " "));
          var g =
              void 0 !== e.sl_user_message
                ? e.sl_user_message
                : "undefined" !== n.message
                ? n.message
                : "",
            v = void 0 !== e.sl_currency ? e.sl_currency : "",
            _ = void 0 !== e.leadTrainingType ? e.leadTrainingType : "Not Sure",
            y = te(),
            w =
              void 0 !== e.selected_course
                ? e.selected_course.id
                : e.sl_product_id;
          !w && t.sl_product_id && (w = String(t.sl_product_id)),
            !w && s && (w = String(s));
          var b =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.city_id
                ? e.cookie_data.city_id
                : e.cityId,
            S =
              void 0 !== e.cookie_data && void 0 !== e.cookie_data.name
                ? e.cookie_data.name
                : e.cityName,
            E = void 0 !== e.State ? e.State : "",
            T = !0,
            C = r.name || "";
          (T =
            void 0 !== m &&
            void 0 !== C &&
            m.toUpperCase() === C.toUpperCase()) &&
            (E ||
              ((b = void 0 === r.default_city_id || b ? "" : r.default_city_id),
              (S =
                void 0 === r.default_city_name || S
                  ? ""
                  : r.default_city_name)),
            (h = void 0 !== r.id ? r.id : "")),
            E ||
              ((E =
                void 0 !== r.default_region_name ? r.default_region_name : ""),
              T || (E = "")),
            S && (S = S.replace(/\+/g, " ")),
            E && (E = E.replace(/\+/g, " ")),
            void 0 === E && t.sl_user_state && (E = t.sl_user_state);
          var k,
            x = void 0 !== e.lead_uid ? e.lead_uid : B(d),
            O = I("_mkto_trk"),
            A = void 0 !== o ? "leadat" + o : "",
            P = void 0 !== o ? o : "",
            L = I("simplilearn_custom"),
            N = I("mbsy"),
            D =
              location.protocol +
              "//" +
              location.hostname +
              (location.port ? ":" + location.port : ""),
            F = navigator.userAgent,
            j = ne();
          k = oe(h, i);
          var W = "Online";
          "Tollfree" == i && (W = "Offline");
          var H = se(I("simplilearn_landing_time")),
            q = e.recordType,
            z = e.buType,
            Y = Te(),
            V = {
              sl_user_country: m,
              countryId: void 0 !== h ? h : "",
              city_id: void 0 !== b ? b : "",
              city: void 0 !== S ? S : "",
              sl_user_message: g,
              lead_training_type: _,
              lead_source_string: p,
              last_cookie_source: y,
              product_type_id: isNaN(u) ? "" : parseInt(u),
              first_cookie_source: void 0 !== L ? L : "",
              user_agent: F,
              Browser: void 0 !== F ? F : "",
              crt_lead_time: P,
              cookie: void 0 !== O ? O : "",
              first_page: I("simplilearn_first_page"),
              first_page_time: H,
              optInText: k,
              mbsy_short_code: void 0 !== N ? N : "",
              GCLID: R(),
              lead_uid: x,
              microKey: A,
              entity_id: void 0 !== w ? w : "",
              sl_user_state: E,
              prefilled_source: e.prefilled_source || "",
              prefillled_data: e.prefillled_data || 0,
              prefilled_modified: e.prefilled_modified || 0,
              Website: D,
              device_type: j.deviceType,
              device_os: j.browserOs,
              device_name: j.deviceName,
              Operating_System: j.browserOs,
              isHotLead: !0,
              lead_creation_mode: W,
              cdnCountry: f,
              Entry_Page: p,
              queryType: "B2B",
              recordType: q,
              bu_type: z,
              team: "marketing",
              lead_stage: "New",
              lead_status: "new",
              leadsource: "SL-Website",
              Created_By_Email: "marketinglead@simplilearn.com",
              trainingType: a,
              lead_team: "hot",
              UTM_Medium__c: U("utmcmd"),
              UTM_Source__c: M(),
              Latest_Lead_Source_Detail: U("utmcmd"),
              Latest_Lead_Source: U("utmcsr"),
              customerType: "B2B",
              campaign_source: Y.campaign_source || "",
              campaign_source_id: Y.campaign_source_id || "",
              mkwid: Y.mkwid || "",
              sl_call_opt_in: !0,
              fbbrowserid: I("_fbp") || "",
              referrer_email: e.refererEmail || "",
              referrer_name: e.refererName || "",
              sl_lead_user_consent:
                (null == n ? void 0 : n.sms_compliance_agreed) || void 0,
            };
          e.years_of_experience &&
            (V.years_of_experience = e.years_of_experience),
            e.noOfLearner &&
              ((V.number_of_learners = e.noOfLearner),
              (V.queryType = "B2C"),
              (V.customerType = "B2C")),
            e.companyType && (V.companyType = e.companyType),
            l && (V.sl_currency = v),
            e.yearInBusiness && (V.yearInBusiness = e.yearInBusiness),
            e.annualRevenue && (V.annualRevenue = e.annualRevenue),
            e.partnershipType && (V.partnershipType = e.partnershipType),
            e.targetSegment && (V.targetSegment = e.targetSegment),
            e.queryType && (V.queryType = e.queryType),
            e.lead_creation_time &&
              (V.lead_creation_time = e.lead_creation_time),
            e.complaintType && (V.complaintType = e.complaintType),
            e.SubCategoryofComplaint &&
              (V.SubCategoryofComplaint = e.SubCategoryofComplaint),
            e.isGrievance && (V.isGrievance = e.isGrievance),
            e.phoneAlt && (V.phoneAlt = e.phoneAlt),
            e.message && (V.message = e.message);
          var G = {};
          if (t.sl_user_last_name) {
            var $ = t.sl_user_last_name;
            t.sl_user_last_name = $.trim();
          }
          if (t.sl_user_first_name) {
            var Z = t.sl_user_first_name;
            t.sl_user_first_name = Z.trim();
          }
          t.sl_product_id ||
            (V.sl_product_id = e.sl_product_id ? e.sl_product_id : null),
            t.sl_product_name ||
              (V.sl_product_name = e.sl_product_name ? e.sl_product_name : "");
          for (
            var J = [
                "createdByEmail",
                "chatOwnerEmail",
                "alternatePhone",
                "alternateEmail",
                "hiddenTokenChat",
                "cl_assign_flag",
                "sl_utm_src",
                "years_of_experience",
              ],
              X = 0;
            X < J.length;
            X++
          )
            e[J[X]] && (V[J[X]] = e[J[X]] ? e[J[X]] : "");
          if (
            (e.leadsource &&
              (V.leadsource = e.leadsource ? e.leadsource : V.leadsource),
            e.address && (V.address = e.address ? e.address : V.address),
            t.sl_user_email &&
              "undefined" != typeof window &&
              void 0 !== window.CryptoJS)
          ) {
            var K,
              Q,
              ee,
              ie =
                null !==
                  (K =
                    null === (Q = window) ||
                    void 0 === Q ||
                    null === (ee = Q.CryptoJS) ||
                    void 0 === ee
                      ? void 0
                      : ee.SHA256(t.sl_user_email)) && void 0 !== K
                  ? K
                  : void 0;
            ie && (V.sl_user_email_hash = ie.toString());
          }
          if (
            !t.sl_user_phone &&
            "undefined" != typeof webengage &&
            void 0 !== webengage.state
          ) {
            var ue = webengage.state.getForever();
            if (void 0 !== ue) {
              var le = ue.uattr;
              void 0 !== le && "undefined" !== le.we_phone && le.we_phone
                ? (V.sl_user_phone = le.we_phone)
                : n &&
                  n.phone &&
                  "logged_in_user" == n.source &&
                  (V.sl_user_phone = n.phone);
            } else
              n &&
                n.phone &&
                "logged_in_user" == n.source &&
                (V.sl_user_phone = n.phone);
          }
          for (var ce in t)
            "object" == (0, c.default)(t[ce])
              ? (G[ce] = JSON.stringify(t[ce]))
              : (G[ce] = t[ce]);
          for (var de in V) G[de] = V[de];
          return (
            (G.event_id = "sl_lead_created"),
            (G.event_name = "Lead created"),
            sessionStorage &&
              ((G.we_attr_data = JSON.parse(
                sessionStorage.getItem("we_attr_data")
              )),
              (G.we_event_data = JSON.parse(
                sessionStorage.getItem("we_event_data")
              )),
              sessionStorage.setItem("we_attr_data", JSON.stringify([])),
              sessionStorage.setItem("we_event_data", JSON.stringify([]))),
            G
          );
        }
        var _e = function () {
            if ("boolean" == typeof T.app.isEuro) return T.app.isEuro;
            var e = new p.default().getCurrentCountry(),
              t = e && e.country_id ? parseInt(e.country_id) : 34,
              n = T.app.euroCountries,
              r = !1;
            return n && n.indexOf(t) > -1 && (r = !0), (T.app.isEuro = r), r;
          },
          ye = function (e, t) {
            return "string" != typeof e || "string" != typeof t
              ? ""
              : (null == t && (t = "\\s"),
                e.replace(new RegExp("[" + t + "]*$"), ""));
          },
          we = function (e, t) {
            return "string" != typeof e || "string" != typeof t
              ? ""
              : (null == t && (t = "\\s"),
                e.replace(new RegExp("^[" + t + "]*"), ""));
          },
          be = function (e) {
            return "string" != typeof e
              ? ""
              : e
                  .replace(/<sup[^/]*\/sup>/gi, "")
                  .replace(/(®|&reg;|&#174;|&#174|&reg)/gi, "");
          };
        function Se(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "/",
            r = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            i = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            a = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            s = [],
            u = function (e) {
              if (e > 3 && e < 21) return "th";
              switch (e % 10) {
                case 1:
                  return "st";
                case 2:
                  return "nd";
                case 3:
                  return "rd";
                default:
                  return "th";
              }
            },
            l = function (e) {
              if (e > 3 && e < 21) return "<sup>th</sup>";
              switch (e % 10) {
                case 1:
                  return "<sup>st</sup>";
                case 2:
                  return "<sup>nd</sup>";
                case 3:
                  return "<sup>rd</sup>";
                default:
                  return "<sup>th</sup>";
              }
            };
          return (
            t.forEach(function (t) {
              var n = s.length - 1;
              switch (t) {
                case "YYYY":
                  s.push(e.getFullYear());
                  break;
                case "MONTH_STRING_FULL":
                  s.push(r[e.getMonth()].substr(0, 3));
                  break;
                case "MONTH_STRING":
                  s.push(r[e.getMonth()]);
                  break;
                case "MONTH":
                  s.push((e.getMonth() + 1).toString().padStart(2, 0));
                  break;
                case "DD":
                  s.push(e.getDate());
                  break;
                case "DDWITHORDINAL":
                  s.push(e.getDate() + u(e.getDate()));
                  break;
                case "HOUR":
                  s.push(
                    ((e.getHours() + 24) % 12 || 12).toString().padStart(2, 0)
                  );
                  break;
                case "HOUR_24":
                  s.push(e.getHours());
                  break;
                case "MIN":
                case "MIN_24":
                  s.push(e.getMinutes().toString().padStart(2, 0));
                  break;
                case "SS":
                  s.push(e.getSeconds());
                  break;
                case "DAYSHORT":
                  s.push(o[e.getDay()]);
                  break;
                case "DAYFULL":
                  s.push(i[e.getDay()]);
                  break;
                case "MONTHSHORT":
                  s.push(a[e.getMonth()]);
                  break;
                case "YY":
                  s.push(e.getFullYear().toString().slice(-2));
                  break;
                case "DDWITHORDINALSUP":
                  s.push(e.getDate() + l(e.getDate()));
                  break;
                case "A":
                  s.push(e.getHours() < 12 ? "AM" : "PM");
                  break;
                default:
                  s[n] += t;
              }
            }),
            s.join(n)
          );
        }
        function Ee(e) {
          var t = e.split("-"),
            n = t[0].slice(2),
            r = parseInt(t[1], 10),
            o = parseInt(t[2], 10);
          return ""
            .concat(o)
            .concat(
              (function (e) {
                if (e >= 11 && e <= 13) return "th";
                switch (e % 10) {
                  case 1:
                    return "st";
                  case 2:
                    return "nd";
                  case 3:
                    return "rd";
                  default:
                    return "th";
                }
              })(o),
              " "
            )
            .concat(
              [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][r - 1],
              " '"
            )
            .concat(n);
        }
        function Te() {
          var e = I("campaign_source"),
            t = {};
          void 0 !== e && e && (t = JSON.parse(e));
          var n = Object.keys(t),
            r = "",
            o = "";
          n && (o = "fbclid" === (r = n[0] || "") ? I("_fbc") : t[r] || "");
          var i = I("campaign_platform"),
            a = {};
          void 0 !== i && i && (a = JSON.parse(i));
          var s = Object.keys(a),
            u = "";
          s && (u = a[s[0] || ""] || "");
          return { campaign_source: r, campaign_source_id: o, mkwid: u || "" };
        }
        var Ce = function (e) {
          console.log("Survey initial data", e);
          var t = [],
            n = {};
          for (var r in ((window.surveyConfig || []).forEach(function (e) {
            n[e.survey_id] = e;
          }),
          n))
            t.push(r);
          var o = {
            sl_email_opt_in: !0,
            sl_sms_opt_in: !0,
            sl_call_opt_in: !0,
          };
          if (t.includes(e.surveyId)) {
            for (var i in n[e.surveyId]) o[i] = n[e.surveyId][i];
            if (
              void 0 !== e.questionResponses &&
              e.questionResponses.length > 0
            )
              for (var a in e.questionResponses)
                if (
                  void 0 !== e.questionResponses[a].value &&
                  void 0 !== e.questionResponses[a].value.values &&
                  void 0 !== e.questionResponses[a].questionText &&
                  -1 ==
                    ["experience"].indexOf(e.questionResponses[a].questionText)
                )
                  for (var s in e.questionResponses[a].value.values) {
                    var u = e.questionResponses[a].value.values[s].trim();
                    0 == s &&
                      ["<1000", "1000-5000", "5001-10000", "10001+"].indexOf(
                        u
                      ) > -1 &&
                      (s = "Employees_Range__c"),
                      void 0 !== WebTracking.questionAttrMap &&
                        void 0 !== WebTracking.questionAttrMap[s] &&
                        (o[WebTracking.questionAttrMap[s]] = u);
                  }
                else if (
                  void 0 !== e.questionResponses[a].questionText &&
                  "experience" == e.questionResponses[a].questionText &&
                  void 0 !== e.questionResponses[a].value &&
                  void 0 !== e.questionResponses[a].value.values
                )
                  for (var l in e.questionResponses[a].value.values) {
                    var c = e.questionResponses[a].value.values[l].trim();
                    0 == l &&
                      [
                        "No Experience",
                        "0-1",
                        "1-3",
                        "3-5",
                        "5-8",
                        "8+",
                      ].indexOf(c) > -1 &&
                      (l = "years_of_experience"),
                      (o[WebTracking.questionAttrMap[l]] = c);
                  }
            (o.sl_user_email =
              "string" == typeof o.sl_user_email ? o.sl_user_email.trim() : ""),
              console.log("Survey data", o),
              ke(o);
          }
        };
        var ke = function (e) {
          var t = SLFunctions.getValueByPath(
              window.INITIAL_STATE,
              "locatorData",
              {}
            ),
            n = [];
          void 0 !== webengage.state &&
            void 0 !== webengage.state.getForever &&
            (n = webengage.state.getForever().uattr);
          var r = [
              "sl_lead_type",
              "sl_site_module",
              "sl_user_email",
              "sl_user_phone",
              "sl_user_first_name",
              "sl_user_last_name",
              "sl_user_company",
              "sl_user_number_employees",
              "sl_email_opt_in",
              "sl_sms_opt_in",
              "sl_call_opt_in",
              "sl_we_resource_name",
            ],
            o = {};
          for (var i in r) void 0 !== e[r[i]] && (o[r[i]] = e[r[i]]);
          void 0 !== n &&
            void 0 !== n.we_first_name &&
            n.we_first_name &&
            (o.sl_user_first_name = n.we_first_name),
            void 0 !== n &&
              void 0 !== n.we_last_name &&
              n.we_last_name &&
              (o.sl_user_last_name = n.we_last_name),
            (o.sl_user_type = e.sl_lead_type),
            (o.sl_call_opt_in = !0),
            void 0 !== e.years_of_experience &&
              e.years_of_experience &&
              webengage.user.setAttribute(
                "SL_Purdue_TotalWorkExp",
                e.years_of_experience || ""
              );
          var a = [];
          void 0 !== e.sl_lead_type && "b2b" == e.sl_lead_type
            ? (webengage.user.setAttribute(
                "we_company",
                e.sl_user_company || ""
              ),
              webengage.user.setAttribute(
                "we_first_name",
                e.sl_user_first_name || ""
              ),
              webengage.user.setAttribute(
                "we_last_name",
                e.sl_user_last_name || ""
              ),
              (a = [
                "sl_lead_type",
                "sl_event_time",
                "sl_user_email",
                "sl_user_phone",
                "sl_call_opt_in",
              ]))
            : (a = [
                "sl_lead_type",
                "sl_event_time",
                "sl_user_email",
                "sl_user_phone",
                "sl_call_opt_in",
              ]),
            WebTracking.eventReq.triggerEvent({
              event_id: "sl_lead_user_submitted_lead_form",
              event_data: o,
              common: "product",
              user_attributes: a,
            });
          var s = document.URL,
            u = {},
            l = WebTracking.eventReq.eventParam.event_data,
            c = { email: l.sl_user_email || "", phone: l.sl_user_phone || "" };
          (void 0 !== window.user_params.sl_frs_resource_type &&
            "fpt" == window.user_params.sl_frs_resource_type) ||
            void 0 === window.user_params.page_type ||
            !window.user_params.page_type ||
            (l.sl_page_type = window.user_params.page_type);
          var d = {};
          if (void 0 !== e.sl_lead_type && "b2b" == e.sl_lead_type) {
            (d = {
              buType: (function (e, t) {
                var n = [
                    "united states",
                    "us",
                    "usa",
                    "canada",
                    "ca",
                    "mexico",
                    "mx",
                  ],
                  r = [].concat(n, [
                    "bolivia",
                    "guyana",
                    "brazil",
                    "argentina",
                    "chile",
                    "paraguay",
                    "uruguay",
                    "peru",
                    "colombia",
                    "ecuador",
                    "venezuela",
                    "suriname",
                  ]);
                if (void 0 !== e && "undefined" !== t) {
                  if (
                    ((e = e.toLowerCase()),
                    void 0 !== t &&
                      ("ATP" == t ||
                        t.toLowerCase() == "Government".toLowerCase() ||
                        t.toLowerCase() == "Higher Education".toLowerCase()))
                  )
                    return void 0 === e || !e || n.indexOf(e) > -1
                      ? "US"
                      : "india" == e
                      ? "IN"
                      : "ROW";
                  if (
                    void 0 !== t &&
                    (t.toLowerCase() == "B2C".toLowerCase() ||
                      t.toLowerCase() == "B2C Groups".toLowerCase())
                  )
                    return "B2C";
                  if (void 0 !== t && "B2B" == t)
                    return void 0 === e || !e || r.indexOf(e) > -1
                      ? "US"
                      : "india" == e
                      ? "IN"
                      : "ROW";
                }
                return t;
              })(t.name, "B2B"),
              leadSourceString: s,
              recordType: "B2B",
              customerType: "B2B",
              Company: e.sl_user_company || "",
              Country: t.name || "",
              cookie_country_name: t.name.replace(/\+/g, " "),
              countryId: t.id,
              State: t.default_region_name,
              cityId: t.default_city_id,
              cityName: t.default_city_name,
              Email: e.sl_user_email || "",
              Query_type_name__c: "B2B",
            }),
              void 0 !== e.years_of_experience &&
                e.years_of_experience &&
                (d.years_of_experience = e.years_of_experience);
            var f = ve(d, l, c, t);
            (f.lead_team = e.lead_team || l.lead_team || "mql"), (u = f);
          } else {
            (d = {
              customerType: "B2C",
              agreeToContact: "",
              leadSource: M(),
              leadTrainingType: "Not Sure",
              leadSourceString: s,
              tagName: "survey lead",
              b2cQueryType: "survey_lead",
              query: "",
              auth: "1",
              GCLID: R(),
              countryId: t.id,
              countryName: t.name.replace(/\+/g, " "),
              cookie_country_name: t.name.replace(/\+/g, " "),
              cityId: t.default_city_id,
              cityName: t.default_city_name,
            }),
              void 0 !== e.years_of_experience &&
                e.years_of_experience &&
                (d.years_of_experience = e.years_of_experience);
            var p = ie(d, l, c, t);
            (p.lead_team = e.lead_team || l.lead_team || "mql"), (u = p);
          }
          new h.default()
            .careatLead(u)
            .then(function (e) {})
            .catch(function (e) {
              console.log("Error In Lead Submission", e);
            });
        };
        function xe() {
          var e = he();
          return !!e && "true" === (null == e ? void 0 : e.enableElementTiming);
        }
        function Ie(e, t) {
          if (t) {
            if ((Array.isArray(t) || (t = t.split(",")), t.length > 1)) {
              for (var n = "(or%2B", r = 0; r < t.length; r++)
                n =
                  n +
                  "%2B" +
                  e +
                  ":'" +
                  encodeURIComponent(t[r].replace(/ /g, "%20")) +
                  "'%2520";
              return n + ")";
            }
            var o;
            if (null !== (o = t) && void 0 !== o && o[0])
              return (
                e + ":'" + encodeURIComponent(t[0].replace(/ /g, "%20")) + "'"
              );
          }
        }
        function Oe(e, t) {
          if (t) {
            if ((t = t.split(",")).length >= 1) {
              for (var n = "(or%2B", r = 0; r < t.length; r++) {
                var o,
                  i = t[r];
                i.includes("-")
                  ? ((i = "[" + i.replace("-", ",") + "]"),
                    (o =
                      "%2B" +
                      e +
                      ":" +
                      encodeURIComponent(i.replace(/ /g, "%20")) +
                      "%2520"))
                  : i.includes("+") &&
                    ((i = "[" + i.replace("+", "") + ",}"),
                    (o =
                      "%2B" +
                      e +
                      ":" +
                      encodeURIComponent(i.replace(/ /g, "%20")) +
                      "%2520")),
                  n.includes(o) || (n += o);
              }
              return n + ")";
            }
            return (
              e + ":'" + encodeURIComponent(t[0].replace(/ /g, "%20")) + "'"
            );
          }
        }
        function Ae(e) {
          var t,
            n = e.category,
            r = e.itemType,
            o = e.searchText,
            i = e.offset,
            a = [
              "item_type",
              "star_ratings",
              "image_url",
              "no_of_learners",
              "next_class_date",
              "last_updated_on",
              "rating_count",
              "is_university_master",
              "title",
              "level",
              "page_url",
              "no_of_views",
              "author",
              "accreditation_text",
              "additional_details",
              "duration",
              "downloads",
            ],
            s = "",
            u = "simple",
            l = "simple_order_with_time",
            c = "%2C%22operators%22%3A%5B%22whitespace%22%5D",
            d = encodeURIComponent(
              "%22fields%22%3A%5B%22title%5E4%22%2C%22tags%5E3%22%2C%22locations%5E2%22%2C%22content%5E1%22%5D"
            );
          (o && "" !== o && "*" !== o) || ((u = "lucene"), (c = "")),
            ("business" !== o && "technology" !== o) ||
              ((l = "business_technology_results_order"),
              (d = "%22fields%22%3A%5B%22tags%5E2%22%5D"));
          var f =
              "%26q.parser%3D" +
              u +
              "%26q.options" +
              encodeURIComponent("=%7B%22defaultOperator%22%3A%22") +
              "or%22%2C" +
              d +
              c +
              "%7D",
            p =
              "&facet.category={size:30}&facet.item_type={}&size=10&sort=" +
              l +
              "+desc&";
          p = encodeURIComponent(p);
          var h = encodeURIComponent(
            "&highlight.content=%7B%22max_phrases%22%3A4%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22%3Cb%3E%22%2C%22post_tag%22%3A%22%3C%2Fb%3E%22%7D&highlight.locations=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22%3Cb%3E%22%2C%22post_tag%22%3A%22%3C%2Fb%3E%22%7D"
          );
          if (
            ((s = i > 0 ? "%26start%3D" + i : ""),
            (t = f + p + "%26return%3D" + a.join() + h),
            null === o)
          )
            return t;
          var m,
            g,
            v,
            _ = 1;
          (m = g = v = ""),
            n &&
              ((m = (m =
                "undefined" != (m = Ie("category", n)) ? m : "").replace(
                /\%26/g,
                "%2526"
              )),
              (_ += 1)),
            r &&
              ((g = "undefined" != (g = Ie("item_type", r)) ? g : ""),
              (_ += 1));
          var y = f;
          return (
            _ > 1 ? (v = "(and%2B" + m + g + ")") : 1 == _ && (v = m + g),
            (y =
              (y =
                (y += v = "" != v ? "%26fq%3D" + v.replace(/'/g, "%27") : "") +
                "%26return%3D" +
                a.join()) +
              p +
              s +
              h)
          );
        }
        function Pe(e) {
          var t,
            n = e.universityName,
            r = e.itemType,
            o = e.searchText,
            i = e.offset,
            a = e.itemKey,
            s = e.durationType,
            u =
              null != e && e.countryCode
                ? null == e
                  ? void 0
                  : e.countryCode
                : (X() &&
                    (null === (t = window) || void 0 === t
                      ? void 0
                      : t.cdnCountry)) ||
                  "US",
            l = 12;
          e.resultPerPage > 0 && (l = e.resultPerPage);
          var c,
            d = [
              "item_type",
              "star_ratings",
              "image_url",
              "no_of_learners",
              "next_class_date",
              "last_updated_on",
              "rating_count",
              "is_university_master",
              "title",
              "level",
              "page_url",
              "no_of_views",
              "author",
              "accreditation_text",
              "additional_details",
              "duration",
              "downloads",
              "new_item_type",
              "duration_text",
              "university_name",
              "tools_covered",
              "accreditation_logo",
              "popular_tags",
              "course_duration",
            ],
            f = "",
            p = "simple";
          (o && "" !== o && "*" !== o) || (p = "lucene");
          var h = "%26q.parser%3D" + p,
            m =
              "&facet.new_item_type={}&facet.university_name={}&facet.duration_text={}&size=" +
              l +
              "&sort=simpli_new_search+desc&";
          m = encodeURIComponent(m);
          var g = encodeURIComponent(
            "&highlight.content=%7B%22max_phrases%22%3A4%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22%3Cb%3E%22%2C%22post_tag%22%3A%22%3C%2Fb%3E%22%7D&highlight.locations=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22%3Cb%3E%22%2C%22post_tag%22%3A%22%3C%2Fb%3E%22%7D"
          );
          if (
            ((f = i > 0 ? "%26start%3D" + i : ""),
            (c = h + m + "%26return%3D" + d.join() + g),
            null === o)
          )
            return c;
          var v,
            _,
            y,
            w,
            b,
            S,
            E = 1;
          (v = _ = y = w = ""),
            n &&
              ((v = Ie("university_name", n))
                ? ((v =
                    null === (S = v = "undefined" != v ? v : "") || void 0 === S
                      ? void 0
                      : S.replace(/\%26/g, "%2526")),
                  (E += 1))
                : (v = "")),
            s &&
              ((_ = Ie("duration_text", s))
                ? ((_ = (_ = "undefined" != _ ? _ : "").replace(
                    /\%26/g,
                    "%2526"
                  )),
                  (E += 1))
                : (_ = "")),
            r &&
              ((y = Ie(a, r))
                ? ((y = "undefined" != y ? y : ""), (E += 1))
                : (y = "")),
            !u ||
              !r ||
              (null != x && x.includes(r)) ||
              ((b = Ie("country_codes", u))
                ? ((b = (b = "undefined" != b ? b : "").replace(
                    /\%26/g,
                    "%2526"
                  )),
                  (E += 1))
                : (b = ""));
          var T = h;
          return (
            E > 1
              ? ((w = "(and%2B" + _ + v + y),
                b ? (w = w + b + ")") : (w += ")"))
              : 1 == E && ((w = _ + v + y), b && (w += b)),
            (T =
              (T =
                (T += w = "" != w ? "%26fq%3D" + w.replace(/'/g, "%27") : "") +
                "%26return%3D" +
                d.join()) +
              m +
              f +
              g)
          );
        }
        function Le(e) {
          var t = e.category,
            n = e.duration,
            r = e.searchText,
            o = e.offset,
            i = e.sortBy,
            a = 10;
          e.resultPerPage > 0 && (a = e.resultPerPage);
          var s,
            u = [
              "title",
              "page_url",
              "image_url",
              "star_ratings",
              "no_of_learners",
              "duration",
              "elearning_id",
              "max_sal_ind",
              "max_sal_row",
              "category_id",
              "category",
              "access_days",
              "reward_enabled",
              "content_partners",
            ],
            l = "",
            c = "simple",
            d = "_score",
            f = "%2C%22operators%22%3A%5B%22whitespace%22%5D",
            p = encodeURIComponent(
              "%22fields%22%3A%5B%22title%5E5%22%2C%22skillscovered%5E4%22%2C%22tags%5E3%22%2C%22accreditor_name%5E2%22%2C%22content%5E1%22%5D"
            );
          switch (i) {
            case "Relevance":
              d = "_score";
              break;
            case "Recently-Launched":
              d = "created_date";
              break;
            case "Rating":
              d = "star_ratings";
              break;
            case "Popular-Courses":
              d = "no_of_learners";
          }
          (r && "" !== r && "*" !== r) || ((c = "lucene"), (f = ""));
          var h =
              "%26q.parser%3D" +
              c +
              "%26q.options" +
              encodeURIComponent("=%7B%22defaultOperator%22%3A%22") +
              "or%22%2C" +
              p +
              f +
              "%7D",
            m =
              "&facet.category={size:30}&facet.duration={buckets:['[0,3]','[3,6]','[6,9]','[9,}']}&size=" +
              a +
              "&sort=" +
              d +
              "+desc&";
          if (
            ((l = o > 0 ? "%26start%3D" + o : ""),
            (s = h + (m = encodeURIComponent(m)) + "%26return%3D" + u.join()),
            null === r)
          )
            return s;
          var g,
            v,
            _,
            y = 1;
          (g = v = _ = ""),
            t &&
              ((g = (g =
                "undefined" != (g = Ie("category", t)) ? g : "").replace(
                /\%26/g,
                "%2526"
              )),
              (y += 1)),
            n &&
              ((v = "undefined" != (v = Oe("duration", n)) ? v : ""), (y += 1));
          var w = h;
          return (
            y > 1 ? (_ = "(and%2B" + g + v + ")") : 1 == y && (_ = g + v),
            (w =
              (w =
                (w += _ = "" != _ ? "%26fq%3D" + _.replace(/'/g, "%27") : "") +
                "%26return%3D" +
                u.join()) +
              m +
              l)
          );
        }
        function Re(e) {
          var t,
            n = e.category,
            r = e.duration,
            o = e.searchText,
            i = e.offset,
            a = e.sortBy,
            s = [
              "title",
              "page_url",
              "image_url",
              "star_ratings",
              "no_of_learners",
              "duration",
              "elearning_id",
              "max_sal_ind",
              "max_sal_row",
              "category_id",
              "category",
              "access_days",
              "reward_enabled",
              "content_partners",
            ],
            u = "",
            l = "simple",
            c = "_score",
            d = "%2C%22operators%22%3A%5B%22whitespace%22%5D",
            f = encodeURIComponent(
              "%22fields%22%3A%5B%22title%5E5%22%2C%22skillscovered%5E4%22%2C%22tags%5E3%22%2C%22accreditor_name%5E2%22%2C%22content%5E1%22%5D"
            );
          switch (a) {
            case "Relevance":
              c = "_score";
              break;
            case "Recently-Launched":
              c = "created_date";
              break;
            case "Rating":
              c = "star_ratings";
              break;
            case "Popular-Courses":
              c = "no_of_learners";
          }
          (o && "" !== o && "*" !== o) || ((l = "lucene"), (d = ""));
          var p =
              "%26q.parser%3D" +
              l +
              "%26q.options" +
              encodeURIComponent("=%7B%22defaultOperator%22%3A%22") +
              "or%22%2C" +
              f +
              d +
              "%7D",
            h =
              "&facet.category={size:30}&facet.duration={buckets:['[0,3]','[3,6]','[6,9]','[9,}']}&size=10&sort=" +
              c +
              "+desc&";
          if (
            ((u = i > 0 ? "%26start%3D" + i : ""),
            (t = p + (h = encodeURIComponent(h)) + "%26return%3D" + s.join()),
            null === o)
          )
            return t;
          var m,
            g,
            v,
            _ = 1;
          (m = g = v = ""),
            n &&
              ((m = (m =
                "undefined" != (m = Ie("category", n)) ? m : "").replace(
                /\%26/g,
                "%2526"
              )),
              (_ += 1)),
            r &&
              ((g = "undefined" != (g = Oe("duration", r)) ? g : ""), (_ += 1));
          var y = p;
          return (
            _ > 1 ? (v = "(and%2B" + m + g + ")") : 1 == _ && (v = m + g),
            (y =
              (y =
                (y += v = "" != v ? "%26fq%3D" + v.replace(/'/g, "%27") : "") +
                "%26return%3D" +
                s.join()) +
              h +
              u)
          );
        }
        function Ne(e) {
          var t = e.substr(2, e.length - 3).split("{")[1],
            n = {},
            r = t.split(";").filter(function (e, t) {
              return t % 2 != 0;
            }),
            o = t.split(";").filter(function (e, t) {
              return t % 2 == 0;
            });
          return (
            o.pop(),
            r.map(function (e, t) {
              var r = e.split(":")[1],
                i = o[t].split(":")[1];
              n[i] = r;
            }),
            n
          );
        }
        function De(e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u,
            l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            c = he(),
            d =
              null !==
                (t = null == c ? void 0 : c.SPLITIT_ENABLED_COUNTRY_IDS) &&
              void 0 !== t
                ? t
                : [],
            f =
              null !==
                (n = null == c ? void 0 : c.SPLITIT_ENABLED_COUNTRY_CODES) &&
              void 0 !== n
                ? n
                : [],
            p =
              null !==
                (r = null == c ? void 0 : c.SPLITIT_US_ENTITY_COUNTRY_IDS) &&
              void 0 !== r
                ? r
                : [],
            h =
              null !==
                (o = null == c ? void 0 : c.SPLITIT_US_ENTITY_COUNTRY_CODES) &&
              void 0 !== o
                ? o
                : [],
            m =
              null !== (i = null == c ? void 0 : c.IN_COUNTRY_ID) &&
              void 0 !== i
                ? i
                : 6,
            g =
              null !== (a = null == c ? void 0 : c.US_COUNTRY_ID) &&
              void 0 !== a
                ? a
                : 34,
            v =
              null !== (s = null == c ? void 0 : c.IN_COUNTRY_CODE) &&
              void 0 !== s
                ? s
                : "IN",
            _ =
              null !== (u = null == c ? void 0 : c.US_COUNTRY_CODE) &&
              void 0 !== u
                ? u
                : "US";
          if (!(e && d.length > 0 && f.length > 0)) return !1;
          e = "code" == l ? e : Number(e);
          var y =
              f.indexOf("ALL_EXCEPT_INDIA") > -1 &&
              d.indexOf("ALL_EXCEPT_INDIA") > -1,
            w =
              f.indexOf("ALL_EXCEPT_US_ENTITY") > -1 &&
              d.indexOf("ALL_EXCEPT_US_ENTITY") > -1;
          if (y) {
            if ("code" == l) {
              var b = e == v,
                S = e == _;
              return !b && !S;
            }
            var E = e == m,
              T = e == g;
            return !E && !T;
          }
          if (w) {
            if ("code" == l) {
              var C = e == v,
                k = e == _,
                x = !C && !k,
                I = h.indexOf(e) > -1;
              return x && !I;
            }
            var O = e == m,
              A = e == g,
              P = !O && !A,
              L = p.indexOf(e) > -1;
            return P && !L;
          }
        }
        function Me() {
          var e,
            t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = new Error("debug enabled"),
            o = "";
          X()
            ? (o =
                null === (e = r.stack.split("\n")) || void 0 === e
                  ? void 0
                  : e[2].replace(
                      /^\s+at\s(.+?)(?:\s.*:|:)(.*?):(.*?)?$/g,
                      "$1 ($2:$3"
                    ))
            : (o =
                null === (t = r.stack.split("\n")) || void 0 === t
                  ? void 0
                  : t[2].replace(
                      /^\s+at\s_callee\$\s\(webpack-internal:\/\/\/(.+?)(?:\.*:|:)(.*?):(.*?)?$/g,
                      "$1 ($2:$3"
                    ));
          "string" == typeof n || "number" == typeof n || "function" == typeof n
            ? console.log({ stack: o, data: n })
            : console.log(S({ stack: o }, n));
        }
        function Ue() {
          var e,
            t = I("_ga");
          return null !==
            (e = null == t ? void 0 : t.replace(/(GA1\.(1|2){1}\.)/g, "")) &&
            void 0 !== e
            ? e
            : "";
        }
        function Be(e) {
          return !isNaN(parseInt(e));
        }
        function Fe() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (0, y.default)("string" == typeof e ? e : "");
        }
        var je = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = e instanceof Date;
            if (!(r || ("string" == typeof e && Array.isArray(t)))) return "";
            var o = "";
            try {
              r || (e = ((e = e.split(","))[0] || "").split("/"));
              var i = Se(r ? e : new Date(e[2], e[0] - 1, e[1]), t, "");
              if (((o = Fe(i)), n)) {
                var a = r ? e : new Date(e[2], e[0] - 1, e[1]),
                  s = function (e) {
                    if (e > 3 && e < 21) return e + "th";
                    switch (e % 10) {
                      case 1:
                        return e + "<sup>st</sup>";
                      case 2:
                        return e + "<sup>nd</sup>";
                      case 3:
                        return e + "<sup>rd</sup>";
                      default:
                        return e + "<sup>th</sup>";
                    }
                  },
                  u = s(a.getDate()),
                  l = a.toLocaleString("default", { month: "short" });
                o = Fe("".concat(u, " ").concat(l));
              }
            } catch (e) {
              console.error(e);
            } finally {
              return o;
            }
          },
          We = function (e) {
            return Array.isArray(e);
          },
          He = function () {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            n = (0, w.isObject)(n) ? n : {};
            var r = [].concat(
                (0, s.default)(
                  We(null === (e = n) || void 0 === e ? void 0 : e.nextCohort)
                    ? n.nextCohort
                    : []
                ),
                (0, s.default)(
                  We(null === (t = n) || void 0 === t ? void 0 : t.otherCohorts)
                    ? n.otherCohorts
                    : []
                )
              ),
              o = function (e) {
                return e.sort(function (e, t) {
                  return (
                    new Date(t.welcome_class_starts_at) +
                    new Date(e.welcome_class_starts_at)
                  );
                });
              };
            if (r.length) {
              var i = r.filter(function (e) {
                return e.welcome_class_starts_at > new Date() / 1e3;
              });
              n.nextCohort = i.length ? o(i).splice(0, 1) : [];
            } else n.nextCohort = [];
            return n;
          },
          qe = function (e, t) {
            var n, r, o, i, a, s, u, l, c;
            (e = (0, w.isObject)(e) ? e : {}).data = He(e.data);
            var d = Array.isArray(
                null === (n = e) ||
                  void 0 === n ||
                  null === (r = n.data) ||
                  void 0 === r
                  ? void 0
                  : r.nextCohort
              )
                ? e.data.nextCohort
                : [],
              f = {},
              p = !0;
            d.length > 0 && ((p = !1), (f = d[0]));
            var h =
                (null === (o = f) || void 0 === o
                  ? void 0
                  : o.welcome_start_display) || null,
              m =
                1e3 *
                (null === (i = f) || void 0 === i
                  ? void 0
                  : i.announcement_date),
              g = h ? new Date(h).getTime() : null,
              v =
                "undefined" != typeof window
                  ? (null === (a = window) ||
                    void 0 === a ||
                    null === (s = a.locator_data) ||
                    void 0 === s
                      ? void 0
                      : s.timeZone) &&
                    new Date(
                      new Date().toLocaleString("en-US", {
                        timeZone:
                          null === (u = window) ||
                          void 0 === u ||
                          null === (l = u.locator_data) ||
                          void 0 === l
                            ? void 0
                            : l.timeZone,
                      })
                    )
                  : new Date(),
              _ = !1,
              y = null;
            return (
              h &&
              (null === (c = f) || void 0 === c
                ? void 0
                : c.welcome_class_starts_at) >
                v / 1e3 + 1
                ? ((y = je(
                    h,
                    t
                      ? [
                          "MONTHSHORT",
                          " ",
                          "DDWITHORDINALSUP",
                          ",",
                          " ",
                          "YYYY",
                        ]
                      : ["DD", " ", "MONTHSHORT", ",", " ", "YYYY"]
                  )),
                  (_ = !0))
                : (g = null),
              {
                formatedStartDate: y,
                cohortDetailsNotPresent: p,
                cohortStartsAt: g,
                isShowTimer: _,
                wStartDate: h,
                announcementDate: m,
              }
            );
          },
          ze = function (e, t) {
            var n,
              r,
              o =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = e && e.price ? e.price : 0,
              a = e && e.discountedPrice ? e.discountedPrice : i,
              s = 0,
              u = "month",
              l = he(),
              c =
                null !== (n = null == l ? void 0 : l.IN_COUNTRY_ID) &&
                void 0 !== n
                  ? n
                  : 6,
              d =
                null !== (r = null == l ? void 0 : l.US_COUNTRY_ID) &&
                void 0 !== r
                  ? r
                  : 34;
            t == d
              ? (s = a / 10)
              : t == c
              ? ((s = 0.0447725791 * a), (s = Math.round(100 * s) / 100))
              : ((s = a / 10), (u = "mo"));
            var f = {
              price: s,
              currencySymbol: (null == e ? void 0 : e.currencySymbol) || "",
              countryCode: null == e ? void 0 : e.countryCode,
              standardPrice: a,
            };
            return (
              o &&
                (f = {
                  price: s,
                  currencySymbol: (null == e ? void 0 : e.currencySymbol) || "",
                  countryCode: null == e ? void 0 : e.countryCode,
                  standardPrice: a,
                  msg: u,
                }),
              f
            );
          },
          Ye = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e ? "Cohort Starts on" : "Admission closes on";
          },
          Ve = function (e, t) {
            var n = t - e,
              r = Math.trunc(n / 1296e6),
              o = [];
            if (r) {
              for (var i = 1; i < r + 1; i++) o.push(e + 1296e6 * i);
              o.push(t);
            } else o.push(t);
            return (o = o.sort());
          },
          Ge = function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              l =
                window &&
                (null === (r = window) || void 0 === r
                  ? void 0
                  : r.cdnTimeZone),
              c =
                window &&
                (null === (o = window) || void 0 === o
                  ? void 0
                  : o.viewerCountry),
              d =
                window &&
                (null === (i = window) || void 0 === i ? void 0 : i.cdnCountry),
              f =
                window &&
                (null === (a = window) ||
                void 0 === a ||
                null === (s = a.COMPONENT_INITIAL_DATA) ||
                void 0 === s
                  ? void 0
                  : s.isCourseTemplateEnabledForClassroom),
              p = f ? u : n;
            if (d == c) {
              var h = t.split(" - "),
                m = "";
              h.forEach(function (t, n) {
                var r = new Date(e + " " + t),
                  o =
                    Math.floor(
                      new Date(
                        r.toLocaleString("en-US", { timeZone: l })
                      ).getTime()
                    ) -
                    Math.floor(
                      new Date(
                        r.toLocaleString("en-US", { timeZone: p })
                      ).getTime()
                    ),
                  i = new Date(r.getTime() + o),
                  a =
                    (i.toLocaleTimeString([], { hour12: !1 }),
                    i.getHours().toString().padStart(2, "0")),
                  s = i.getMinutes().toString().padStart(2, "0");
                m += 0 == n ? a + ":" + s + " - " : a + ":" + s;
              });
              var g,
                v = "";
              if (l)
                (v =
                  null === (g = new Date()) || void 0 === g
                    ? void 0
                    : g.toLocaleTimeString("en-US", {
                        timeZone: l,
                        timeZoneName: "long",
                        hour12: !1,
                        hour: "2-digit",
                        minute: "2-digit",
                      })) &&
                  (v = v.match(new RegExp("[A-Z](?!.*[(])", "g")).join(""));
              return m + " " + v;
            }
          },
          $e = function (e, t, n, r, o, i, a) {
            var s =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : "",
              u = r ? s : n;
            if (a == i) {
              var l = t.split(" - "),
                c = "";
              l.forEach(function (t, n) {
                var r = new Date(e + " " + t),
                  i =
                    Math.floor(
                      new Date(
                        r.toLocaleString("en-US", { timeZone: o })
                      ).getTime()
                    ) -
                    Math.floor(
                      new Date(
                        r.toLocaleString("en-US", { timeZone: u })
                      ).getTime()
                    ),
                  a = new Date(r.getTime() + i),
                  s = a.getHours().toString().padStart(2, "0"),
                  l = a.getMinutes().toString().padStart(2, "0");
                c += 0 == n ? s + ":" + l + " - " : s + ":" + l;
              });
              var d,
                f = "";
              if (o)
                (f =
                  null === (d = new Date()) || void 0 === d
                    ? void 0
                    : d.toLocaleTimeString("en-US", {
                        timeZone: o,
                        timeZoneName: "long",
                        hour12: !1,
                        hour: "2-digit",
                        minute: "2-digit",
                      })) &&
                  (f = f.match(new RegExp("[A-Z](?!.*[(])", "g")).join(""));
              return { timing: c, timeZoneLabel: f };
            }
          },
          Ze = function (e) {
            var t = qe({ data: e }, !1) || {},
              n = (t = (0, w.isObject)(t) ? t : {}),
              r = n.cohortDetailsNotPresent,
              o = (n.isShowTimer, n.cohortStartsAt),
              i = n.announcementDate,
              a = "",
              s = "";
            if (!r && o) {
              var u,
                l,
                c,
                d,
                f =
                  "undefined" != typeof window
                    ? (null === (u = window) ||
                      void 0 === u ||
                      null === (l = u.locator_data) ||
                      void 0 === l
                        ? void 0
                        : l.timeZone) &&
                      new Date(
                        new Date().toLocaleString("en-US", {
                          timeZone:
                            null === (c = window) ||
                            void 0 === c ||
                            null === (d = c.locator_data) ||
                            void 0 === d
                              ? void 0
                              : d.timeZone,
                        })
                      ).getTime()
                    : new Date().getTime(),
                p = Ve(i, o),
                h = p.findIndex(function (e) {
                  return e > f;
                });
              if ((o = h > -1 ? p[h] : p.length ? p[0] : null)) {
                var m = new Date(o).getTime();
                if (m > f + 1) {
                  var g, v;
                  a = je(new Date(m), ["YYYY", "-", "MONTH", "-", "DD"]);
                  var _ = Array.isArray(null == e ? void 0 : e.nextCohort)
                      ? null == e
                        ? void 0
                        : e.nextCohort
                      : [],
                    y = {};
                  _.length > 0 && (y = _[0]),
                    (s = ""
                      .concat(
                        null === (g = y) || void 0 === g ? void 0 : g.from_time,
                        " - "
                      )
                      .concat(
                        null === (v = y) || void 0 === v ? void 0 : v.to_time
                      ));
                }
              }
            } else r = !0;
            return { startDate: a, time: s };
          },
          Je = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              l,
              c,
              d,
              f,
              p,
              h,
              m,
              g =
                (null === (t = T) ||
                void 0 === t ||
                null === (n = t.CONSTANTS) ||
                void 0 === n
                  ? void 0
                  : n.SCHEDULE_CALL_TIME_SLOT) || "",
              v =
                (null === (r = window) || void 0 === r
                  ? void 0
                  : r.viewerCountry) || !1,
              _ =
                (null === (o = window) || void 0 === o
                  ? void 0
                  : o.cdnCountry) || !1;
            _ &&
              v &&
              _ == v &&
              "US" != _ &&
              (g =
                (null === (h = T) ||
                void 0 === h ||
                null === (m = h.CONSTANTS) ||
                void 0 === m
                  ? void 0
                  : m.SCHEDULE_CALL_TIME_SLOT_OTHER_COUNTRY) || g);
            var y = g.split("-"),
              w = "",
              b =
                (null === (i = window) || void 0 === i
                  ? void 0
                  : i.cdnTimeZone) || "",
              S =
                (null === (a = T) ||
                void 0 === a ||
                null === (s = a.CONSTANTS) ||
                void 0 === s
                  ? void 0
                  : s.SCHEDULE_CALL_TIME_ZONE) || "";
            b != S
              ? y.forEach(function (t, n) {
                  var r = t.trim(),
                    o = e + " " + r,
                    i = new Date(o);
                  if (isNaN(i.getTime())) console.error("Invalid Date:", o);
                  else {
                    var a =
                        Math.floor(
                          new Date(
                            i.toLocaleString("en-US", { timeZone: b })
                          ).getTime()
                        ) -
                        Math.floor(
                          new Date(
                            i.toLocaleString("en-US", { timeZone: S })
                          ).getTime()
                        ),
                      s = new Date(i.getTime() + a),
                      u = s.getHours().toString().padStart(2, "0"),
                      l = s.getMinutes().toString().padStart(2, "0");
                    w += 0 == n ? u + ":" + l + " - " : u + ":" + l;
                  }
                })
              : (w = g);
            var E =
                (null ===
                  (c = w =
                    (null === (l = w) || void 0 === l
                      ? void 0
                      : l.split("-")) || []) || void 0 === c
                  ? void 0
                  : c[0]) || "",
              C = (null === (d = w) || void 0 === d ? void 0 : d[1]) || "",
              k = [],
              x =
                null == E || null === (f = E.split(":")) || void 0 === f
                  ? void 0
                  : f.map(Number),
              I = (0, u.default)(x, 2),
              O = I[0],
              A = I[1],
              P =
                null == C || null === (p = C.split(":")) || void 0 === p
                  ? void 0
                  : p.map(Number),
              L = (0, u.default)(P, 2),
              R = L[0],
              N = L[1];
            function D(e, t) {
              return 60 * e + t;
            }
            for (var M, U, B, F = D(O, A), j = D(R, N); F <= j; ) {
              var W,
                H,
                q,
                z,
                Y =
                  ((M = F),
                  (U = void 0),
                  (B = void 0),
                  (U = Math.floor(M / 60)),
                  (B = M % 60),
                  ""
                    .concat(String(U).padStart(2, "0"), ":")
                    .concat(String(B).padStart(2, "0"))),
                V = new Date(
                  e.toLocaleString("en-US", {
                    timeZone:
                      null === (W = window) || void 0 === W
                        ? void 0
                        : W.cdnTimeZone,
                  })
                ),
                G = new Date(
                  new Date().toLocaleString("en-US", {
                    timeZone:
                      null === (H = window) || void 0 === H
                        ? void 0
                        : H.cdnTimeZone,
                  })
                );
              ((null === (q = V) || void 0 === q
                ? void 0
                : q.setHours(0, 0, 0, 0)) !=
                (null === (z = G) || void 0 === z
                  ? void 0
                  : z.setHours(0, 0, 0, 0)) ||
                et(Y)) &&
                k.push(Y),
                (F += 30);
            }
            return { times: k, timeZoneLabel: tt(b) };
          },
          Xe = function () {
            var e,
              t,
              n,
              r,
              o,
              i,
              a,
              s,
              l,
              c =
                (null === (e = window) || void 0 === e
                  ? void 0
                  : e.cdnTimeZone) || "",
              d =
                (null === (t = T) ||
                void 0 === t ||
                null === (n = t.CONSTANTS) ||
                void 0 === n
                  ? void 0
                  : n.SCHEDULE_CALL_TIME_ZONE) || "",
              f =
                (null === (r = T) ||
                void 0 === r ||
                null === (o = r.CONSTANTS) ||
                void 0 === o
                  ? void 0
                  : o.SCHEDULE_CALL_TIME_SLOT) || "",
              p = !0,
              h =
                (null === (i = window) || void 0 === i
                  ? void 0
                  : i.viewerCountry) || !1,
              m =
                (null === (a = window) || void 0 === a
                  ? void 0
                  : a.cdnCountry) || !1;
            m &&
              h &&
              m == h &&
              "US" != m &&
              ((p = !1),
              (f =
                (null === (s = T) ||
                void 0 === s ||
                null === (l = s.CONSTANTS) ||
                void 0 === l
                  ? void 0
                  : l.SCHEDULE_CALL_TIME_SLOT_OTHER_COUNTRY) || f));
            var g = f.split("-").map(function (e) {
              return e.trim();
            });
            if (2 === g.length) {
              var v = (0, u.default)(g, 2),
                _ = v[0],
                y = v[1];
              if (!p) return [_, y];
              var w = {
                timeZone: d,
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
              };
              try {
                var b = new Date(
                    new Date().toLocaleString("en-US", { timeZone: c })
                  ),
                  E = b.toISOString().split("T")[0];
                b.setDate(b.getDate() + 1);
                var C = b.toISOString().split("T")[0],
                  k = [
                    new Date("".concat(E, "T").concat(_, ":00+05:30")),
                    new Date("".concat(C, "T").concat(y, ":00+05:30")),
                  ],
                  x = S(S({}, w), {}, { timeZone: c });
                return [
                  k[0].toLocaleString("en-US", x),
                  k[1].toLocaleString("en-US", x),
                ];
              } catch (e) {
                return void console.error("Error converting time zones:", e);
              }
            } else
              console.error(
                'Invalid time slot format. Expected "HH:MM - HH:MM".'
              );
          },
          Ke = function (e) {
            var t,
              n,
              r,
              o,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = !0;
            function s() {
              var e,
                t,
                n,
                r,
                o,
                i,
                s,
                l,
                c,
                d =
                  (null === (e = T) ||
                  void 0 === e ||
                  null === (t = e.CONSTANTS) ||
                  void 0 === t
                    ? void 0
                    : t.SCHEDULE_CALL_TIME_ZONE) || "",
                f =
                  (null === (n = T) ||
                  void 0 === n ||
                  null === (r = n.CONSTANTS) ||
                  void 0 === r
                    ? void 0
                    : r.SCHEDULE_CALL_TIME_SLOT) || "",
                p =
                  (null === (o = window) || void 0 === o
                    ? void 0
                    : o.viewerCountry) || !1,
                h =
                  (null === (i = window) || void 0 === i
                    ? void 0
                    : i.cdnCountry) || !1;
              h &&
                p &&
                h == p &&
                "US" != h &&
                ((a = !1),
                (f =
                  (null === (l = T) ||
                  void 0 === l ||
                  null === (c = l.CONSTANTS) ||
                  void 0 === c
                    ? void 0
                    : c.SCHEDULE_CALL_TIME_SLOT_OTHER_COUNTRY) || f));
              var m = f.split("-").map(function (e) {
                return e.trim();
              });
              if (2 === m.length) {
                var g = (0, u.default)(m, 2),
                  v = g[0],
                  _ = g[1];
                if (!a) return [v, _];
                var y =
                    (null === (s = window) || void 0 === s
                      ? void 0
                      : s.cdnTimeZone) || "",
                  w = {
                    timeZone: d,
                    hour12: !1,
                    hour: "2-digit",
                    minute: "2-digit",
                  };
                try {
                  var b = new Date(
                      new Date().toLocaleString("en-US", { timeZone: y })
                    ),
                    E = b.toISOString().split("T")[0];
                  b.setDate(b.getDate() + 1);
                  var C = b.toISOString().split("T")[0],
                    k = [
                      new Date("".concat(E, "T").concat(v, ":00+05:30")),
                      new Date("".concat(C, "T").concat(_, ":00+05:30")),
                    ],
                    x = S(S({}, w), {}, { timeZone: y });
                  return [
                    k[0].toLocaleString("en-US", x),
                    k[1].toLocaleString("en-US", x),
                  ];
                } catch (e) {
                  return void console.error("Error converting time zones:", e);
                }
              } else
                console.error(
                  'Invalid time slot format. Expected "HH:MM - HH:MM".'
                );
            }
            var l = s(),
              c = (0, u.default)(l, 2),
              d = c[0],
              f = c[1],
              p =
                (null === (t = window) || void 0 === t
                  ? void 0
                  : t.cdnTimeZone) || "",
              h =
                null === (n = d.split(":")) || void 0 === n
                  ? void 0
                  : n.map(Number),
              m = (0, u.default)(h, 2),
              g = m[0],
              v = m[1];
            if (i) {
              var _,
                y =
                  null === (_ = i.split(":")) || void 0 === _
                    ? void 0
                    : _.map(Number);
              (g = y[0]), (v = y[1]);
            }
            var w = 30,
              b = [],
              E =
                null == d || null === (r = d.split(":")) || void 0 === r
                  ? void 0
                  : r.map(Number),
              C = (0, u.default)(E, 2),
              k = C[0],
              x = C[1],
              I = k;
            g > k && (k = g);
            var O =
                null == f || null === (o = f.split(":")) || void 0 === o
                  ? void 0
                  : o.map(Number),
              A = (0, u.default)(O, 2),
              P = A[0],
              L = A[1];
            function R(e, t) {
              return 60 * e + t;
            }
            function N(e) {
              var t = Math.floor(e / 60),
                n = e % 60;
              return ""
                .concat(String(t).padStart(2, "0"), ":")
                .concat(String(n).padStart(2, "0"));
            }
            var D = R(k, x),
              M = !1;
            g >= I &&
              ((v > 15 && v < 30) || (v >= 30 && v <= 45)) &&
              ((D += 30), (M = !0)),
              v > 45 && g >= I && (D += 60),
              v >= 45 && g < I && M && (D -= 30);
            var U = R(P, L);
            if (a)
              for (; D <= U; ) {
                var B = N(D);
                b.push(B), (D += w);
              }
            else {
              var F = 0;
              do {
                var j = N(D);
                b.push(j), (D += w), F++;
              } while (D <= U && F < 20);
            }
            return { times: b, timeZoneLabel: tt(p) };
          },
          Qe = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.split(":").map(Number),
              r = (0, u.default)(n, 2),
              o = r[0],
              i = r[1];
            return t && (i += 15), 60 * o + i;
          },
          et = function (e) {
            var t,
              n = new Date().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1,
                timeZone:
                  null === (t = window) || void 0 === t
                    ? void 0
                    : t.cdnTimeZone,
              }),
              r = Qe(n, !0),
              o = Qe(e);
            return r < o;
          },
          tt = function (e) {
            try {
              if (e) {
                var t,
                  n =
                    null === (t = new Date()) || void 0 === t
                      ? void 0
                      : t.toLocaleTimeString("en-US", {
                          timeZone: e,
                          timeZoneName: "long",
                          hour12: !1,
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                if (n)
                  return n.match(new RegExp("[A-Z](?!.*[(])", "g")).join("");
              }
              return !1;
            } catch (e) {
              console.log("Error: ", e);
            }
          },
          nt = function (e) {
            var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
            return 2 === t.length ? t.pop().split(";").shift() : null;
          },
          rt = function (e, t) {
            var n,
              r = nt(e),
              o = [],
              i =
                null !== (n = null == t ? void 0 : t.id) && void 0 !== n
                  ? n
                  : "";
            if (r) {
              try {
                o = JSON.parse(r);
              } catch (e) {
                o = [];
              }
              var a = o.findIndex(function (e) {
                return e.id === i;
              });
              -1 !== a ? (o[a] = S(S({}, o[a]), t)) : o.push(t);
            } else o.push(t);
            !(function (e, t) {
              var n,
                r,
                o,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 30,
                a = new Date(),
                s =
                  null !==
                    (n =
                      null === (r = window) ||
                      void 0 === r ||
                      null === (o = r.location) ||
                      void 0 === o
                        ? void 0
                        : o.hostname) && void 0 !== n
                    ? n
                    : "";
              a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
              var u = "expires=".concat(a.toUTCString()),
                l = "domain=.simplilearn.com;SameSite=Lax";
              s && (l = "domain=" + s + ";SameSite=Lax"),
                (document.cookie = ""
                  .concat(e, "=")
                  .concat(t, "; ")
                  .concat(u, "; path=/; ")
                  .concat(l));
            })(e, JSON.stringify(o));
          },
          ot = function (e, t) {
            var n = nt(t);
            if (!n) return null;
            try {
              var r = JSON.parse(n).find(function (t) {
                return t.id === e;
              });
              return r || null;
            } catch (e) {
              return null;
            }
          };
        t.default =
          ((a = {
            clone: function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            getLogger: function () {
              return r && r.customLogger ? r.customLogger : console;
            },
            removeHtmlTag: function (e) {
              return "string" != typeof e
                ? ""
                : e.replace(/<[^>]*\>/g, "").replace(/<\/[^>]*\>/g, "");
            },
            atob: (function (e) {
              function t(t) {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function (e) {
              return "function" == typeof atob
                ? atob(e)
                : void 0 !== o && o
                ? o.from(e, "base64").toString()
                : void 0;
            }),
            removeOnlyPTag: function (e) {
              return "string" != typeof e
                ? ""
                : e
                    .replace(/<[\/]{0,1}(p)[^><]*>/gi, "")
                    .replace(/<ul>/gi, " ")
                    .replace(/<li>/gi, "<br/> ");
            },
            initScroll: function (t, n) {
              var r = ue();
              return r.isSafari || r.isIosSafari
                ? new e(function (e) {
                    e();
                  })
                : ((t = isNaN(t) ? 500 : parseInt(t)),
                  new e(function (e) {
                    H(t, n).then(function () {
                      e();
                    });
                  }));
            },
            getValueByPathFilter: function (e, t, n) {
              try {
                var r = null;
                (n && "object" === (0, c.default)(n)) || (n = {});
                var o = n,
                  i = o.type,
                  a = o.defaultValue,
                  s = o.isStrict;
                if (((r = fe(e, t, a, s)), void 0 === i)) return r;
                if ((0, c.default)(r) === i) return r;
                if ("array" === i && Array.isArray(r)) return r;
                if (void 0 === a)
                  switch (i) {
                    case "string":
                      r = "";
                      break;
                    case "number":
                      r = 0;
                      break;
                    case "object":
                      r = {};
                      break;
                    case "array":
                      r = [];
                      break;
                    default:
                      r = null;
                  }
                else r = a;
              } catch (e) {
                if (s) throw e;
                r = null;
              }
              return r;
            },
            onScrollReach: H,
            btoa: function (e) {
              return "function" == typeof btoa
                ? btoa(e)
                : void 0 !== o && o
                ? o.from(e).toString("base64")
                : void 0;
            },
            isEuro: _e,
            isEuroAmp: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 34,
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = (t.app && t.app.euroCountries) || [],
                r = n && n.indexOf(parseInt(e)) > -1;
              return r;
            },
            rtrim: ye,
            ltrim: we,
            removeSupTag: be,
            trim: function (e, t) {
              return ye(we(e, t), t);
            },
            getParameterByName: D,
            getConfig: he,
            getConstants: me,
            onEvent: function (e, t, n, r) {
              var o = "_listener_" + n;
              (le[o] = r), e.addEventListener(t, le[o]);
            },
            getValueByPath: fe,
            isEmpty: j,
            removeEscapeListener: function (e) {
              de("keydown", e);
            },
            onEscape: function (e, t) {
              var n = "_listener_" + e;
              (le[n] = function (e) {
                27 === e.keyCode && t(e);
              }),
                document.addEventListener("keydown", le[n]);
            },
            remvoeEventByName: de,
            browser: ue,
            isClient: X,
            onlyUnique: function (e, t, n) {
              return n.indexOf(e) === t;
            },
            getCookieByName: I,
            getActualPrice: function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                n = !1;
              if (
                (t = String(t)) &&
                0 == /^\s*$/.test(t) &&
                parseInt(t) > 0 &&
                null !== (e = t) &&
                void 0 !== e &&
                e.includes(".")
              ) {
                for (var r = t.split("."), o = r[1], i = 0; i < o.length; i++)
                  "0" != o[i] && (n = !0);
                0 == n && (t = r[0]);
              }
              return t;
            },
            getEmiPriceFormat: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o = "";
              return (
                0 == /^\s*$/.test(e) &&
                  0 == /^\s*$/.test(t) &&
                  0 == /^\s*$/.test(n) &&
                  parseInt(t) > 0 &&
                  ((o = "".concat(e).concat(t)),
                  0 == r && (o += "INR" == n || "Rs." == n ? "/month" : "/mo")),
                o
              );
            },
            getCertificateImages: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = [],
                  n = "",
                  r = 0;
                r < e.length;
                r++
              ) {
                var o;
                (n =
                  null !== (o = e[r].image_url) && void 0 !== o
                    ? o
                    : e[r].certificate) && t.push(n);
              }
              return t;
            },
            fetchUTMSource: M,
            getGCLID: R,
            getLiveChatCode: function () {
              if ("undefined" != typeof window) {
                window._taq = {
                  id: "a6ac3e6e-c86b-4536-aedd-105a3df85b16",
                  events: [],
                  handlers: [],
                };
                var e = document.createElement("script");
                (e.type = "text/javascript"),
                  (e.async = !0),
                  (e.id = "__ta"),
                  (e.src = "//cdn-jp.gsecondscreen.com/static/tac.min.js");
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t),
                  (e.onload = function () {
                    var e =
                        document.getElementsByClassName("gamooga_chat_span"),
                      t = document.getElementsByClassName(
                        "gamooga_chat_loading"
                      ),
                      n = document.getElementsByClassName("ive_chat_right")[0];
                    0 != e.length &&
                      ((t[0].className = t[0].className + " hidden_class"),
                      (e[0].className = e[0].className.replace(
                        "hidden_class",
                        " "
                      )),
                      (n.style.cursor = "pointer"));
                  });
              }
            },
            openLiveChat: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if ((e.preventDefault(), console.log("open chat clicked!"), !n)) {
                var r = new _.default();
                r.sendEvent("sticky_footer_chat_clicked", {
                  link_text: "Live Chat",
                });
              }
              "undefined" != typeof _ss_track &&
                void 0 !== _ss_track.api &&
                (F(), _ss_track.api.live_chat_click(), t && t(n));
            },
            setUserParams: function (e) {
              j(e) ||
                ((window.user_params = j(e) ? {} : window.user_params),
                (window.user_params = W(window.user_params, e)));
            },
            setUserDetails: function () {
              var e,
                t = {};
              "undefined" != typeof window && (t = window.Config);
              var n = new p.default().getCurrentCountry(),
                r = n && n.country_id ? parseInt(n.country_id) : 34,
                o = t.app.euroCountries,
                i = n && n.countryCode ? n.countryCode : "US",
                a = !1;
              o.indexOf(r) > -1 && (a = !0),
                (e = (function () {
                  var e = "";
                  if ("undefined" != typeof window)
                    switch (window.PAGE_TYPE) {
                      case "resources":
                        e = "career-edge_index";
                        break;
                      case "segment":
                        e = "career-edge_content-list";
                        break;
                      case "frs-content":
                        e = "career-edge_details";
                        break;
                      case "home":
                        e = "index_index";
                        break;
                      case "course":
                        e = "course_index";
                        break;
                      case "master":
                        e = "bundle_index";
                        break;
                      case "frs-free-practice":
                        e = "free-practice-test_index";
                    }
                  return e;
                })());
              var s = "",
                u = "";
              return (
                window.PAGE_TYPE &&
                  ("home" == window.PAGE_TYPE
                    ? (s = "Home Page")
                    : "search" == window.PAGE_TYPE &&
                      ((s = "Search Page"), (u = "search"))),
                {
                  isEuro: a,
                  displayReferAndEarnForm: "IN" == i,
                  countryCode: i,
                  ipCountryIdValue: String(r),
                  ssoCookieName: t.app.SSO_COOKIE_NAME,
                  gdprCookieName: t.app.GDPR_COOKIE_NAME,
                  training_type_classroom: "" + t.app.training_type_classroom,
                  training_type_lvc: "" + t.app.training_type_lvc,
                  training_type_online: "" + t.app.training_type_online,
                  pageCategory: e,
                  loggedIn: !1,
                  isB2b: "0",
                  user_id: "undefined",
                  email: "undefined",
                  overAllPageActionForGa: s,
                  overAllPageLabelForGa: u,
                  overAllPageValueForGa: "",
                  googleTagManagerCode: SLFunctions.getValueByPath(
                    t.app.GOOGLE_TAG_MANAGER_CODES[t.cookieDomain.substring(1)],
                    "main",
                    ""
                  ),
                  genericCoursePageStringForGa:
                    window.PAGE_TYPE && "course" == window.PAGE_TYPE
                      ? "Generic Course Page"
                      : "",
                  classRoomDataIsArrayForGa: "",
                  classRoomPageActionForGa: "",
                  classRoomPageLabelForGa: "",
                  classRoomPageValueForGa: "",
                  onlinePageActionForGa: "",
                  onlinePageLabelForGa: "",
                  onlinePageValueForGa: "",
                  defaultPlaceholderImage: t.app.defaultPlaceholderImage,
                  ftUtmBlocked: t.app.ftUtmBlocked,
                }
              );
            },
            setLocatorDetails: function () {
              var e = {};
              "undefined" != typeof window && (e = window.Config);
              var t = SLFunctions.getValueByPath(
                  window.INITIAL_STATE,
                  "locatorData",
                  {}
                ),
                n = t && t.name ? t.name : e.app.DEFAULT_COUNTRY_NAME;
              return {
                country_name: (n = void 0 !== n ? n.replace("+", " ") : ""),
                callingCode:
                  t && t.phnCode ? t.phnCode : e.app.DEFAULT_CALLING_CODE,
              };
            },
            setLocatorData: function (e) {
              j(e) || (window.locator_data = j(e) ? {} : e);
            },
            mergeObjects: W,
            isUserLoggedIn: q,
            checkExpiredSSOCookie: function () {
              var e = he().SSO_COOKIE_NAME;
              if (!j(e)) {
                var t = I(e);
                if (void 0 !== t) {
                  var n = (0, d.default)(t);
                  n.exp &&
                    parseInt(n.exp) <= Math.floor(Date.now() / 1e3) &&
                    A(e, "", 0);
                }
              }
            },
            checkB2BCartCount: function () {
              if (
                !j(he().B2B_CART_COUNT_COOKIE_NAME) &&
                "undefined" != typeof window
              ) {
                var e = I(he().B2B_CART_COUNT_COOKIE_NAME);
                void 0 !== e &&
                  void 0 !== window.user_params &&
                  (window.user_params.cartCountCookieb2b = e);
              }
            },
            getSSOCookie: function () {
              if (!j(he().SSO_COOKIE_NAME)) {
                var e = I(he().SSO_COOKIE_NAME);
                if (void 0 !== e) return (0, d.default)(e);
              }
            },
            removeEmptyHtmlTags: function e(t, n) {
              return (
                (n = n.replace(t, "").trim()), !0 === t.test(n) ? e(t, n) : n
              );
            },
            initSlGlobalData: function () {
              z("last_source", M()),
                z(
                  "course_id",
                  "object" == (0, c.default)(window.user_params) &&
                    window.user_params.sl_product_id &&
                    void 0 !== window.user_params.sl_product_type &&
                    "course" == window.user_params.sl_product_type
                    ? String(window.user_params.sl_product_id)
                    : ""
                ),
                z(
                  "category_id",
                  "object" == (0, c.default)(window.user_params) &&
                    window.user_params.sl_product_category_id
                    ? String(window.user_params.sl_product_category_id)
                    : ""
                );
            },
            getFinalPriceWithTax: V,
            addCouponCodesToAACCookie: function (e) {
              try {
                var t = new Date();
                t.setTime(t.getTime() + 1296e6);
                var n = "expires=" + t.toGMTString(),
                  r = I("aac");
                if (null != e && "" != e)
                  if (null != r && "" != r) {
                    for (
                      var o, i = e.split(","), a = r.split(","), s = 0;
                      s < i.length;
                      s++
                    )
                      -1 === a.indexOf(i[s]) && a.push(i[s]);
                    (o = a.join(",")),
                      (document.cookie =
                        "aac=" + o + "; path=/; " + n + ";SameSite=Lax");
                  } else
                    document.cookie =
                      "aac=" + e + "; path=/; " + n + ";SameSite=Lax";
              } catch (e) {
                console.log("Error in auto Applying coupon");
              }
            },
            getPrefilledInfo: function (e, t) {
              var n = Object.keys(e),
                r = {
                  prefillled_data: 1,
                  prefilled_source: null,
                  prefilled_modified: 0,
                };
              if (void 0 === t || !t || j(t))
                (r.prefillled_data = 0), (r.prefilled_source = "other");
              else
                for (var o in ((r.prefilled_source = t.source || "other"), n)) {
                  var i = n[o];
                  (e[i] || "") != (t[i] || "") && (r.prefilled_modified = 1);
                }
              return r;
            },
            getLoogedInUserInfo: function () {
              var e = { loggedIn: !1, user_id: "", email: "", name: "" };
              if (!j(window.user_params.ssoCookieName)) {
                var t = I(window.user_params.ssoCookieName);
                if (void 0 !== t) {
                  var n = (0, d.default)(t);
                  e = {
                    loggedIn: !0,
                    user_id: n.data && n.data.id,
                    email: n.data && n.data.email,
                    name: n.data && n.data.name,
                  };
                }
              }
              return e;
            },
            setCookie: A,
            setCookieForLowIntent: P,
            setCookieForConnector: L,
            getHashByKey: G,
            closeMobileCallBackForm: function (e) {
              e.preventDefault();
            },
            toogleMobileFooter: function (e) {
              var t = document.getElementsByClassName("footer-links")[0];
              t.classList.contains("hidden-mobile")
                ? t.classList.remove("hidden-mobile")
                : t.classList.add("hidden-mobile");
            },
            GetUTMParams: U,
            getFirstPageTime: function () {
              var e = I("simplilearn_landing_time");
              return void 0 === e || "" == e ? "" : e;
            },
            getFirstPage: function () {
              var e = I("simplilearn_first_page");
              return void 0 === e || "" == e ? "" : e;
            },
            generateLeadId: B,
            getFooterCurrentDate: function () {
              var e = new Date(),
                t = "" + (e.getMonth() + 1),
                n = "" + e.getDate(),
                r = e.getFullYear();
              return (
                t.length < 2 && (t = "0" + t),
                n.length < 2 && (n = "0" + n),
                "smpl_" + [r, t, n].join("-")
              );
            },
            lazyLoad: $,
            lazyLoadPicture: Z,
            toogleNavigation: function (e, t) {
              t = void 0 === t ? "mobile-active-class" : t;
              var n = document.getElementById("frsHomePageLeftMenu");
              n.classList.contains(t)
                ? (n.classList.remove(t),
                  document.body.classList.remove("body-fix"))
                : (n.classList.add(t), document.body.classList.add("body-fix"));
            },
            isMobile: function () {
              return "undefined" != typeof window && window.screen.width <= 767;
            },
            isTablet: function () {
              return (
                "undefined" != typeof window &&
                window.screen.width > 767 &&
                window.screen.width < 992
              );
            },
            isTabletLandscape: function () {
              return "undefined" != typeof navigator &&
                "userAgent" in navigator &&
                navigator.userAgent.search("Safari") >= 0 &&
                navigator.userAgent.search("Chrome") < 0
                ? 90 === Math.abs(window.orientation)
                : "undefined" != typeof window &&
                    window.screen.width > 991 &&
                    window.screen.width < 1140;
            },
            isDesktop: function () {
              return "undefined" != typeof window && window.screen.width > 1141;
            },
            getNextPageUrl: function (e, t, n) {
              var r = "";
              if ("undefined" != typeof window && void 0 !== t) {
                var o = window.Config.app.appFrontendUrl;
                if ("segment" == e) {
                  var i = "";
                  t.type && "undefined" !== C[t.type] && (i = C[t.type] + "/"),
                    (r = o + "/resources/" + t.segment + "/" + i + "page/" + n);
                }
              }
              return r;
            },
            getDateFormatShort: function (e) {
              if (void 0 !== e) {
                var t = new Date(
                  e.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
                );
                return (
                  k[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
                );
              }
            },
            getResourceLabelByType: function (e, t) {
              var n = "";
              if (e)
                switch (e) {
                  case "ebook":
                    n =
                      void 0 !== t && "Whitepaper" == t
                        ? "Whitepaper"
                        : "Ebook";
                    break;
                  case "webinar":
                    n =
                      void 0 !== t && "Firechat" == t ? "Firechat" : "Webinar";
                    break;
                  case "webcast":
                    n =
                      void 0 !== t && "Firechat" == t
                        ? "On-Demand Firechat"
                        : "On-Demand Webinar";
                    break;
                  default:
                    n = void 0 !== t && t ? t.capitalize() : e.capitalize();
                }
              return n;
            },
            lazyLoadBannerImage: function e(t, n) {
              if ("undefined" != typeof document) {
                void 0 === t && (t = "onload");
                var r = t,
                  o = void 0 !== n ? n : "lazy-banner_img",
                  i = "." + o,
                  a = [].slice.call(document.querySelectorAll(i));
                if (
                  ("onload" == r &&
                    a.forEach(function (e) {
                      e.dataset.src &&
                        ((e.src = e.dataset.src),
                        e.classList.remove(o),
                        e.classList.add("blend-mode"),
                        e.removeAttribute("data-src"));
                    }),
                  "ondemand" == r)
                )
                  if ("IntersectionObserver" in window) {
                    var s = new IntersectionObserver(function (e, t) {
                      e.forEach(function (e) {
                        if (e.isIntersecting) {
                          var t = e.target;
                          if (!t.dataset.src) return;
                          (t.src = t.dataset.src),
                            t.classList.remove(o),
                            t.classList.add("blend-mode"),
                            t.removeAttribute("data-src"),
                            s.unobserve(t);
                        }
                      });
                    });
                    a.forEach(function (e) {
                      s.observe(e);
                    });
                  } else e((t = "onload"), n);
              }
            },
            getHashBySegmentName: function (e) {
              var t = "";
              return e && (t = e.replace(/\s+/g, "-").toLowerCase()), t;
            },
            prepareB2CLeadParameters: ie,
            initiateCallbackFormGA: function (e, t) {
              "enterpriseQuery" == t
                ? WebTracking.eventReq.triggerEvent({
                    event_id: "sl_lead_user_initiated_lead_form",
                    event_data: {
                      sl_lead_type: "b2b",
                      sl_site_module: "B2b Query box",
                    },
                    common: "product",
                    user_attributes: ["sl_lead_type"],
                  })
                : WebTracking.eventReq.triggerEvent({
                    event_id: "sl_lead_user_initiated_lead_form",
                    event_data: {
                      sl_lead_type: "b2c",
                      sl_site_module: "Request a call",
                      sl_leadsource: "SL-Website",
                      sl_first_page: I("simplilearn_first_page"),
                    },
                    common: "product",
                    user_attributes: ["sl_lead_type"],
                  });
            },
            createCountryDown: function (e) {
              var t = [];
              for (var n in e)
                if (e.hasOwnProperty(n)) {
                  var r = e[n].code,
                    o = e[n].phnCode;
                  t[r] = o;
                }
              return t;
            },
            downloadEbook: function (e) {
              if (e) {
                var t = e.split("?")[0];
                t = t.split("/")[t.split("/").length - 1];
                var n = document.createElement("a");
                (n.href = e),
                  (n.download = t),
                  (n.target = "_blank"),
                  n.dispatchEvent(new MouseEvent("click"));
              }
            },
            toogleEbookPopUp: function (e) {
              var t,
                n = document.getElementsByClassName("ebook-modal")[0],
                r = document.getElementsByClassName("resource-pop-up")[0];
              if (
                (document
                  .getElementsByClassName("query_success")[0]
                  .classList.add("hide"),
                r.classList.remove("hide"),
                n.classList.contains("hide"))
              ) {
                n.classList.remove("hide");
                WebTracking.setUserParams("sl_site_module", "ebook_download"),
                  WebTracking.setUserParams(
                    "sl_lead_button_text",
                    "download ebook"
                  ),
                  WebTracking.setUserParams("sl_product_type", "course"),
                  "Enterprise" ==
                  (t = WebTracking.eventReq.getDataFromUserParams([
                    "sl_product_id",
                    "sl_product_name",
                    "sl_product_category_id",
                    "sl_product_category",
                    "sl_frs_segment_id",
                    "sl_frs_segment_name",
                    "sl_page_type",
                  ])).sl_frs_segment_name
                    ? WebTracking.setUserParams("sl_lead_type", "b2b")
                    : WebTracking.setUserParams("sl_lead_type", "b2c");
                var o = WebTracking.eventReq.getDataFromUserParams([
                  "sl_product_id",
                  "sl_product_type",
                  "sl_product_name",
                  "sl_product_category_id",
                  "sl_product_category",
                  "sl_frs_segment_id",
                  "sl_frs_segment_name",
                  "sl_lead_type",
                  "sl_site_module",
                  "sl_product_image",
                  "sl_product_type",
                  "sl_product_training_type",
                  "sl_page_type",
                  "sl_lead_button_text",
                ]);
                WebTracking.eventReq.triggerEvent({
                  event_id: "sl_frs_lead_module_initiated",
                  event_data: o,
                });
              } else
                n.classList.add("hide"),
                  ((t = WebTracking.eventReq.getDataFromUserParams([
                    "sl_lead_type",
                    "sl_frs_segment_id",
                    "sl_frs_segment_name",
                    "sl_user_type",
                    "sl_page_type",
                    "sl_product_training_type",
                    "sl_product_image",
                    "sl_product_type",
                    "sl_site_module",
                    "sl_product_id",
                    "sl_product_name",
                    "sl_product_category_id",
                    "sl_product_category",
                    "sl_page_type",
                    "sl_user_type",
                  ])).sl_site_module = webengage.state.getForever().uattr
                    .sl_site_module
                    ? webengage.state.getForever().uattr.sl_site_module
                    : t.sl_site_module),
                  void 0 !== E.sl_override_site_module &&
                    E.sl_override_site_module &&
                    (t.sl_site_module = E.sl_override_site_module),
                  WebTracking.eventReq.triggerEvent({
                    event_id: "sl_frs_lead_form_closed",
                    event_data: t,
                  });
            },
            closePOpUp: function () {
              var e = WebTracking.eventReq.getDataFromUserParams([
                "sl_lead_type",
                "sl_frs_segment_id",
                "sl_frs_segment_name",
                "sl_user_type",
                "sl_page_type",
                "sl_product_training_type",
                "sl_product_image",
                "sl_product_type",
                "sl_site_module",
                "sl_product_id",
                "sl_product_name",
                "sl_product_category_id",
                "sl_product_category",
                "sl_page_type",
                "sl_user_type",
              ]);
              (e.sl_site_module = webengage.state.getForever().uattr
                .sl_site_module
                ? webengage.state.getForever().uattr.sl_site_module
                : e.sl_site_module),
                void 0 !== E.sl_override_site_module &&
                  E.sl_override_site_module &&
                  (e.sl_site_module = E.sl_override_site_module),
                WebTracking.eventReq.triggerEvent({
                  event_id: "sl_frs_lead_form_closed",
                  event_data: e,
                });
            },
            capitalize: pe,
            getCoords: function (e) {
              var t = e.getBoundingClientRect(),
                n = document.body,
                r = document.documentElement,
                o = window.pageYOffset || r.scrollTop || n.scrollTop,
                i = window.pageXOffset || r.scrollLeft || n.scrollLeft,
                a = r.clientTop || n.clientTop || 0,
                s = r.clientLeft || n.clientLeft || 0,
                u = t.top + o - a,
                l = t.left + i - s;
              return { top: Math.round(u), left: Math.round(l) };
            },
            getUserParams: re,
            viewMoreContent: function (e, t) {
              if (e) {
                var n = document.getElementsByClassName(e)[0];
                if ("undefined" != n) {
                  var r = document
                    .getElementsByClassName("author-detail-info")[0]
                    .getAttribute("data-full-content");
                  n &&
                    r &&
                    void 0 !== n.parentNode &&
                    ((n.parentNode.style.display = "inline-block"),
                    (document.getElementsByClassName(
                      "about-author-info"
                    )[0].innerHTML = r),
                    document
                      .getElementsByClassName(t)[0]
                      .classList.add("hide"));
                }
              }
            },
            updateSlGlobalData: function (e) {
              if (void 0 !== e && e) {
                ["name", "email", "phone", "phoneCode"].forEach(function (t) {
                  void 0 !== e[t] && e[t] && z(t, e[t]);
                });
              }
            },
            removeElementSelector: function (e, t) {
              if (e && t) {
                var n = document.getElementsByClassName(e)[0];
                n && n.classList.contains(t) && n.classList.remove(t);
              }
            },
            getDateFormatFull: function (e) {
              var t = new Date(
                e.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
              );
              return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
            },
            getTrainingIdByType: ge,
            onPageLoad: function (e) {
              if (X())
                if (void 0 !== window.pageLoaded || window.pageLoaded) e();
                else {
                  var t = ue(),
                    n = ne(),
                    r = S({}, t).isSafari,
                    o = S({}, n),
                    i = o.browserOs,
                    a = o.deviceType,
                    s = void 0 !== a && "Mobile" == a,
                    u = void 0 !== i && "ios" == i.toLowerCase(),
                    l = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                  if (
                    ((r || u || l) && document.body.classList.add("safari"),
                    void 0 === window.pageLoaded && (s || r || u))
                  )
                    try {
                      if (r || u) (window.pageLoaded = !0), e();
                      else
                        var c = window.setInterval(function () {
                          "complete" === document.readyState &&
                            ((window.pageLoaded = !0), clearInterval(c), e());
                        }, 300);
                    } catch (e) {
                      console.info("Sl Error :: onPageLoad  | " + e);
                    }
                  else
                    window.addEventListener("load", function () {
                      (window.pageLoaded = !0), e();
                    });
                }
            },
            getDeviceInfo: ne,
            mobileLazyLoadingImage: function () {
              if (X()) {
                $("ondemand");
              }
            },
            getWebinarDateByTZ: function (e, t, n) {
              var r = "";
              try {
                if (void 0 !== e) {
                  (void 0 !== t && t) || (t = "00:00:00"),
                    (void 0 !== n && n) || (n = "");
                  var o =
                      e
                        .replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
                        .replace(/-/g, "/") +
                      " " +
                      t +
                      " " +
                      n,
                    i = new Date(o);
                  return (r =
                    k[i.getMonth()] +
                    " " +
                    i.getDate() +
                    "," +
                    i.getFullYear());
                }
              } catch (e) {
                console.error("Webinar Date Format Error");
              }
              return r;
            },
            prepareB2BLeadParameters: ve,
            convertMS: function (e) {
              var t, n, r, o;
              return (
                (o = Math.floor(e / 1e3)),
                (r = Math.floor(o / 60)),
                (o %= 60),
                (n = Math.floor(r / 60)),
                (r %= 60),
                (t = Math.floor(n / 24)),
                (n %= 24),
                {
                  day: t.toString().padStart(2, "0"),
                  hour: n.toString().padStart(2, "0"),
                  minute: r.toString().padStart(2, "0"),
                  seconds: o.toString().padStart(2, "0"),
                }
              );
            },
            formatDate: Se,
            getTimezoneOffset: function (e, t) {
              (t = new Date(t || Date.now())).setMilliseconds(0);
              var n = (t.getTimezoneOffset() / 60) * -1,
                r = t.toLocaleString("en-US", { timeZone: e }),
                o = n + (new Date(r).getTime() - t.getTime()) / 1e3 / 60 / 60,
                i = String(o < 0 ? parseInt(-1 * o) : parseInt(o)),
                a = String(
                  o < 0
                    ? (60 * parseFloat(-1 * o)) % 60
                    : (60 * parseFloat(o)) % 60
                );
              return (
                (o < 0 ? "-" : "+") +
                (2 == i.length ? i : "0" + i) +
                (2 == a.length ? a : "0" + a)
              );
            },
            isNewUser: ee,
            onBackMobilePopup: function (e, t) {
              var n = "listener-" + e;
              (ce[n] = function (n) {
                var r = n.oldURL.split("#")[1];
                void 0 !== r && r == e && t(event);
              }),
                window.addEventListener("hashchange", ce[n]);
            },
            getCampaignDetails: Te,
            getCustomDataForCourse: function (e) {
              var t = {};
              try {
                var n = [
                  "sl_sub_product_category",
                  "sl_sub_product_category_id",
                  "sl_sub_product_id",
                  "sl_sub_product_image",
                  "sl_sub_product_name",
                  "sl_sub_product_training_type",
                  "sl_sub_product_type",
                ];
                if (void 0 !== e && e && Object.keys(e).length > 0)
                  for (var r = 0; r < n.length; r++)
                    e[n[r]] && (t[n[r]] = e[n[r]] ? e[n[r]] : "");
              } catch (e) {
                (t = {}),
                  console.error("SL:Error getCustomDataForCourse failed", e);
              }
              return t;
            },
            getYTEmbedURLfromVideoURL: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                n =
                  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,
                r = e.match(n),
                o = !(!r || 11 != r[1].length) && r[1];
              return "https://www.youtube.com/embed/" + o + t;
            },
            hideHelpAndSupport: function () {
              var e = parseInt(window.user_params.lgid) || 0;
              return 2 == e || 2605 == e;
            },
            prepareSpecialAnnouncementSchemaData: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : "";
              try {
                return !e || "" == e || !t || t.length <= 0
                  ? []
                  : (t || []).map(function (t) {
                      var i = Se(
                          new Date(t.startDate),
                          ["MONTHSHORT", "DDWITHORDINAL"],
                          " "
                        ),
                        a = "";
                      if (r) {
                        var s = t.total_days
                          ? 1 == t.total_days
                            ? "".concat(t.total_days, "-day ")
                            : "".concat(t.total_days, "-days ")
                          : "";
                        a = ""
                          .concat(s, "classroom training starting on ")
                          .concat(i, " is available online now!");
                      } else a = "Instructor-led training starting on ".concat(i, " is available online now!");
                      return {
                        name: be(e),
                        text: a,
                        datePosted: "".concat(t.datePosted, "T00:00"),
                        expires: "".concat(t.startDate, "T23:59"),
                        spatialCoverage: {
                          type: n ? "City" : "Country",
                          name: n
                            ? '"'.concat(r ? t.name || "" : o, '"')
                            : "[" +
                              (t.countries || []).map(function (e) {
                                return '"'.concat(e, '"');
                              }) +
                              "]",
                        },
                      };
                    });
              } catch (e) {
                return (
                  console.log(
                    "SL:Error prepareSpecialAnnouncementSchemaData",
                    e
                  ),
                  []
                );
              }
            },
            convertTime12to24: function (e) {
              var t = e.split(" "),
                n = (0, u.default)(t, 2),
                r = n[0],
                o = n[1],
                i = r.split(":"),
                a = (0, u.default)(i, 2),
                s = a[0],
                l = a[1];
              return (
                "12" === s && (s = "00"),
                "PM" === o && (s = parseInt(s, 10) + 12),
                "".concat(s, ":").concat(l)
              );
            },
            convertTime24to12: function (e) {
              return (
                (e = e
                  .toString()
                  .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [e])
                  .length > 1 &&
                  (((e = e.slice(1))[5] = +e[0] < 12 ? " AM" : " PM"),
                  (e[0] = +e[0] % 12 || 12),
                  e.splice(3, 1)),
                e.join("")
              );
            },
            shouldShowElementTiming: xe,
            formatLearnerCount: function (e) {
              var t = 0;
              return (
                e > 999 &&
                  (t =
                    e % 1e3 == 0
                      ? e / 1e3
                      : Number(Math.ceil((e / 1e3) * 2) / 2)),
                t
              );
            },
            constructSearchQueryFromParams: Ae,
            constructNewSearchQueryFromParams: Pe,
            constructSkillUpNewSearchQueryFromParams: Le,
            parseAwsTimeStamp: Ne,
            getDateFormatWithTimeZone: K,
            getUaEventObject: function () {
              var e = {};
              if ("undefined" != typeof window) {
                var t = !!he().printGaInConsole;
                e = new f.default(t);
              }
              return e;
            },
            checkIsPaid: function () {
              var e = this.GetUTMParams("utmcsr"),
                t = this.GetUTMParams("utmcmd"),
                n = this.GetUTMParams("utmccn");
              return (
                !e ||
                !t ||
                (("facebook" == e || "cpc" == t) &&
                  !n.includes("SLBrandMotivator") &&
                  ("facebook" === e || "cpc" === t))
              );
            },
            formatHRTimeToMilli: function (e) {
              return e[0] + "s " + e[1] / 1e6 + "ms";
            },
            isEnterpriseDomain: function () {
              var e, t, n;
              return (
                !(!X() || "undefined" == typeof window) &&
                (null === (e = window) ||
                void 0 === e ||
                null === (t = e.INITIAL_STATE) ||
                void 0 === t ||
                null === (n = t.paramsData) ||
                void 0 === n
                  ? void 0
                  : n.isEnterpriseDomain)
              );
            },
            subDomainUrl: function () {
              var e, t, n;
              return X() && "undefined" != typeof window
                ? null === (e = window) ||
                  void 0 === e ||
                  null === (t = e.INITIAL_STATE) ||
                  void 0 === t ||
                  null === (n = t.paramsData) ||
                  void 0 === n
                  ? void 0
                  : n.validDomainUrl
                : "";
            },
            getEnterpriseIdentifier: function () {
              var e, t, n, r, o, i;
              return X() &&
                "undefined" != typeof window &&
                null !== (e = window) &&
                void 0 !== e &&
                null !== (t = e.COMPONENT_INITIAL_DATA) &&
                void 0 !== t &&
                null !== (n = t.companyDetails) &&
                void 0 !== n &&
                n.identifier
                ? null === (r = window) ||
                  void 0 === r ||
                  null === (o = r.COMPONENT_INITIAL_DATA) ||
                  void 0 === o ||
                  null === (i = o.companyDetails) ||
                  void 0 === i
                  ? void 0
                  : i.identifier
                : "sl";
            },
            checkIfSplititEnabled: De,
            constructSkillUpSearchQueryFromParams: Re,
            debugLogger: Me,
            getSkillupContentPartner: function () {
              var e, t, n, r, o, i;
              return (
                !(
                  !X() ||
                  "undefined" == typeof window ||
                  null === (e = window) ||
                  void 0 === e ||
                  null === (t = e.COMPONENT_INITIAL_DATA) ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n ||
                  !n.contentPartners
                ) &&
                (null === (r = window) ||
                void 0 === r ||
                null === (o = r.COMPONENT_INITIAL_DATA) ||
                void 0 === o ||
                null === (i = o.data) ||
                void 0 === i
                  ? void 0
                  : i.contentPartners)
              );
            },
            getGA4EventObject: function () {
              var e = {};
              if ("undefined" != typeof window) {
                var t = !!he().printGaInConsole;
                e = new _.default(t);
              }
              return e;
            },
            getVideoProgressData: function (e) {
              var t,
                n,
                r,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                a =
                  null !==
                    (t =
                      null === (n = (r = window).jwplayer) || void 0 === n
                        ? void 0
                        : n.call(r, e)) && void 0 !== t
                    ? t
                    : null;
              if (a) {
                var s = a.getPosition(),
                  u = a.getDuration();
                if (0 == u && "ready" == o) return a.play(), null;
                if ("play" == o || "progress" == o) {
                  var l,
                    c,
                    d = u > 0 ? (s / u) * 100 : u;
                  d =
                    null != i &&
                    i.hasVideoPercent &&
                    null != i &&
                    i.video_percent
                      ? i.video_percent
                      : parseInt(d, 10);
                  var f,
                    p,
                    h,
                    m,
                    g =
                      null !==
                        (l =
                          null === (c = a.getConfig()) || void 0 === c
                            ? void 0
                            : c.file) && void 0 !== l
                        ? l
                        : "";
                  if (null != i && i.isPlaylist)
                    g =
                      null !==
                        (f =
                          null === (p = a.getPlaylistItem()) ||
                          void 0 === p ||
                          null === (h = p.sources) ||
                          void 0 === h ||
                          null === (m = h[0]) ||
                          void 0 === m
                            ? void 0
                            : m.file) && void 0 !== f
                        ? f
                        : "";
                  return {
                    video_current_time: Number(Number(s).toFixed(2)),
                    video_duration: Number(Number(u).toFixed(2)),
                    video_percent: d,
                    video_provider: "jwplayer",
                    visible: !!a.getViewable(),
                    video_url: g,
                  };
                }
                return null;
              }
              return (
                console.log("No instance of JWPlayer found with player id", e),
                null
              );
            },
          }),
          (0, l.default)(
            (0, l.default)(
              (0, l.default)(
                (0, l.default)(
                  (0, l.default)(
                    (0, l.default)(
                      (0, l.default)(
                        (0, l.default)(
                          (0, l.default)(
                            (0, l.default)(a, "capitalize", pe),
                            "searchPageFilterData",
                            function (e, t, n) {
                              var r = [
                                  "cohort_master",
                                  "bundle",
                                  "university_master",
                                  "course",
                                ],
                                o = "";
                              if ("learningoptions" === t)
                                o = e
                                  .split(",")
                                  .filter(function (e) {
                                    return r.includes(e);
                                  })
                                  .join(",");
                              else if ("filtertype" === t) {
                                var i = e.split(","),
                                  a = n.split(","),
                                  s = [],
                                  u = (s =
                                    i.length >= a.length
                                      ? i.filter(function (e) {
                                          return !a.includes(e);
                                        })
                                      : a.filter(function (e) {
                                          return !i.includes(e);
                                        }))[s.length - 1];
                                o = r.includes(u)
                                  ? "learning_options_filter"
                                  : "resources_filter";
                              } else
                                "resources" === t &&
                                  (o = e
                                    .split(",")
                                    .filter(function (e) {
                                      return !r.includes(e);
                                    })
                                    .join(","));
                              return o;
                            }
                          ),
                          "splitedPrice",
                          Y
                        ),
                        "getGAClientId",
                        Ue
                      ),
                      "isDomainURL",
                      function () {
                        var e, t, n;
                        return (
                          !(!X() || "undefined" == typeof window) &&
                          (null === (e = window) ||
                          void 0 === e ||
                          null === (t = e.INITIAL_STATE) ||
                          void 0 === t ||
                          null === (n = t.paramsData) ||
                          void 0 === n
                            ? void 0
                            : n.isUniversityDomain)
                        );
                      }
                    ),
                    "removeURLParameter",
                    function (e, t) {
                      var n = e.split("?");
                      if (n.length >= 2) {
                        for (
                          var r = encodeURIComponent(t) + "=",
                            o = n[1].split(/[&;]/g),
                            i = o.length;
                          i-- > 0;

                        )
                          -1 !== o[i].lastIndexOf(r, 0) && o.splice(i, 1);
                        return n[0] + (o.length > 0 ? "?" + o.join("&") : "");
                      }
                      return e;
                    }
                  ),
                  "kFormatter",
                  function (e) {
                    return Math.abs(e) > 999
                      ? Math.sign(e) * (Math.abs(e) / 1e3).toFixed(1) + "k"
                      : Math.sign(e) * Math.abs(e);
                  }
                ),
                "getLocaleStringData",
                function (e) {
                  var t,
                    n,
                    r,
                    o = "en-US";
                  return (
                    "undefined" != typeof window &&
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.cdnCountry) ===
                        (null === (n = T) ||
                        void 0 === n ||
                        null === (r = n.CONSTANTS) ||
                        void 0 === r
                          ? void 0
                          : r.IN_COUNTRY_CODE) &&
                      (o = "en-IN"),
                    e.toLocaleString(o)
                  );
                }
              ),
              "getBackDate",
              function (e) {
                var t = new Date(),
                  n = new Date(t.getTime());
                return (
                  n.setDate(t.getDate() - e), n.toISOString().split("T")[0]
                );
              }
            ),
            "getNameInitials",
            function (e) {
              var t = "NA";
              if (e) {
                var n = e.split(" ");
                void 0 !== n[0] && void 0 !== n[1]
                  ? (t = n[0].substr(0, 1) + n[1].substr(0, 1))
                  : n[0] && (t = n[0].substr(0, 2));
              }
              return t.toUpperCase();
            }
          ),
          (0, l.default)(
            (0, l.default)(
              (0, l.default)(
                (0, l.default)(
                  (0, l.default)(
                    (0, l.default)(
                      (0, l.default)(
                        (0, l.default)(
                          (0, l.default)(
                            (0, l.default)(a, "isNotNaN", Be),
                            "generateRandomNumber",
                            function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 6,
                                t = "".concat(Math.random()),
                                n = 2;
                              return t.substring(2, n + e);
                            }
                          ),
                          "getHtmlParseString",
                          Fe
                        ),
                        "getCohortFormattedTime",
                        je
                      ),
                      "getNextCohortData",
                      He
                    ),
                    "referAndEarnSiteModule",
                    function () {
                      var e,
                        t,
                        n = SLFunctions.getCookieByName("shareCode") || "",
                        r = "";
                      if ((n = n ? atob(n) : ""))
                        try {
                          r = JSON.parse(n);
                        } catch (e) {
                          console.error(e);
                        }
                      var o = !!(
                        (0, w.isObject)(r) &&
                        null !== (e = r) &&
                        void 0 !== e &&
                        e.name &&
                        null !== (t = r) &&
                        void 0 !== t &&
                        t.email
                      );
                      if (o) {
                        var i =
                          SLFunctions.getCookieByName("campaign_source") || "";
                        (i = i ? JSON.parse(i) : ""),
                          (0, w.isObject)(i) && i && (o = !1);
                      }
                      return o;
                    }
                  ),
                  "getHoursToMonths",
                  function (e) {
                    var t = new Date(),
                      n = new Date(t.getTime() + 60 * e * 60 * 1e3);
                    return (
                      12 * (n.getFullYear() - t.getFullYear()) +
                      (n.getMonth() - t.getMonth())
                    );
                  }
                ),
                "isIpadProTablet",
                function () {
                  return (
                    "undefined" != typeof window &&
                    window.screen.width > 991 &&
                    window.screen.width < 1140
                  );
                }
              ),
              "getSlPageTypeData",
              function () {
                var e,
                  t,
                  n = {
                    resources: "frs homepage",
                    segment: "frs category page",
                    trainer: "instructor",
                    guest: "blog",
                    "higher-education": "he page",
                    "corporate-training": "corp train page",
                    "frs-article": "frs article",
                    citysitemap: "City Sitemap",
                  }[
                    null === (e = window) || void 0 === e ? void 0 : e.PAGE_TYPE
                  ];
                return (
                  "frs-video" ==
                    (null === (t = window) || void 0 === t
                      ? void 0
                      : t.PAGE_TYPE) && (n = window.user_params.page_type),
                  n ? { sl_page_type: n } : {}
                );
              }
            ),
            "getFormatedStartDate",
            qe
          ),
          (0, l.default)(
            (0, l.default)(
              (0, l.default)(
                (0, l.default)(
                  (0, l.default)(
                    (0, l.default)(
                      (0, l.default)(
                        (0, l.default)(
                          (0, l.default)(
                            (0, l.default)(
                              a,
                              "getSelFormatedStartDate",
                              function (e, t) {
                                var n, r, o, i, a, s, u;
                                e = (0, w.isObject)(e) ? e : {};
                                var l = {},
                                  c = !0;
                                Object.keys(e).length > 0 &&
                                  ((c = !1), (l = e));
                                var d =
                                    (null === (n = l) || void 0 === n
                                      ? void 0
                                      : n.welcome_start_display) || null,
                                  f =
                                    1e3 *
                                    (null === (r = l) || void 0 === r
                                      ? void 0
                                      : r.announcement_date),
                                  p = d ? new Date(d).getTime() : null,
                                  h =
                                    "undefined" != typeof window
                                      ? (null === (o = window) ||
                                        void 0 === o ||
                                        null === (i = o.locator_data) ||
                                        void 0 === i
                                          ? void 0
                                          : i.timeZone) &&
                                        new Date(
                                          new Date().toLocaleString("en-US", {
                                            timeZone:
                                              null === (a = window) ||
                                              void 0 === a ||
                                              null === (s = a.locator_data) ||
                                              void 0 === s
                                                ? void 0
                                                : s.timeZone,
                                          })
                                        )
                                      : new Date(),
                                  m = !1,
                                  g = null;
                                return (
                                  d &&
                                  (null === (u = l) || void 0 === u
                                    ? void 0
                                    : u.welcome_class_starts_at) >
                                    h / 1e3 + 1
                                    ? ((g = je(
                                        d,
                                        t
                                          ? [
                                              "MONTHSHORT",
                                              " ",
                                              "DDWITHORDINALSUP",
                                              ",",
                                              " ",
                                              "YYYY",
                                            ]
                                          : [
                                              "DD",
                                              " ",
                                              "MONTHSHORT",
                                              ",",
                                              " ",
                                              "YYYY",
                                            ]
                                      )),
                                      (m = !0))
                                    : (p = null),
                                  {
                                    formatedStartDate: g,
                                    cohortDetailsNotPresent: c,
                                    cohortStartsAt: p,
                                    isShowTimer: m,
                                    wStartDate: d,
                                    announcementDate: f,
                                  }
                                );
                              }
                            ),
                            "getCohortHeaderText",
                            Ye
                          ),
                          "subtractDays",
                          function (e, t) {
                            var n = new Date(e);
                            return n.setDate(n.getDate() - t);
                          }
                        ),
                        "getCohortAnncouncementDetails",
                        function (e) {
                          var t = new Date(e),
                            n = t && t.getTime() <= new Date().getTime();
                          return { isShowTimer: n, cohortHeaderText: Ye(n) };
                        }
                      ),
                      "calculateCohortCycle",
                      Ve
                    ),
                    "differenceBetween2Days",
                    function (e, t) {
                      var n =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        r = Math.abs(t - e),
                        o = r / 864e5;
                      return n ? Math.ceil(o) : o;
                    }
                  ),
                  "setUpStatcWebinarCookie",
                  function () {
                    var e = "",
                      t = I("_ga"),
                      n = Date.parse(new Date()) / 1e3;
                    if (!t) {
                      var r =
                        Math.random().toFixed(10).replace("0.", "") + "." + n;
                      (t = r), A("_ga", r);
                    }
                    (e =
                      t +
                      ".utmcsr=webinarpromo|utmccn=(not set)|utmcmd=FRS_inpage_reg"),
                      n && (e += "|sltime=" + n),
                      L("__staticWebinar", e, 180);
                  }
                ),
                "isArray",
                We
              ),
              "isDateTodayOrInFuture",
              function (e) {
                var t = new Date();
                return t.setHours(0, 0, 0, 0), new Date(e) >= t;
              }
            ),
            "getKeyFeaturesByTraingType",
            function (e, t, n, r) {
              var o,
                i,
                a,
                s,
                u,
                l,
                c = [],
                d = ge("classroom"),
                f = ge("osl"),
                p = ge("lvc");
              r &&
                (d &&
                null != e &&
                e.length &&
                null !== (o = r[d]) &&
                void 0 !== o &&
                o.length
                  ? (c = r[d])
                  : p &&
                    null != t &&
                    null !== (i = t.lvcData) &&
                    void 0 !== i &&
                    null !== (a = i.batches) &&
                    void 0 !== a &&
                    a.length &&
                    (null === (s = r[p]) || void 0 === s ? void 0 : s.length) >
                      0
                  ? (c = r[p])
                  : f &&
                    null != n &&
                    null !== (u = n.oslData) &&
                    void 0 !== u &&
                    u.length &&
                    null !== (l = r[f]) &&
                    void 0 !== l &&
                    l.length
                  ? (c = r[f])
                  : r[0] && (c = r[0]));
              return c;
            }
          ),
          (0, l.default)(
            (0, l.default)(
              (0, l.default)(
                (0, l.default)(
                  (0, l.default)(
                    (0, l.default)(
                      (0, l.default)(
                        (0, l.default)(
                          (0, l.default)(
                            (0, l.default)(a, "getCookieNameByRegex", O),
                            "getTheSpecificTimeZone",
                            Ge
                          ),
                          "getTheSpecificTimeZoneServerSide",
                          $e
                        ),
                        "formatDateBasedFormat",
                        Ee
                      ),
                      "getDateTimeSlots",
                      Je
                    ),
                    "getCohortTimeDate",
                    Ze
                  ),
                  "convertTimeZoneDynamic",
                  Xe
                ),
                "getDateTimeSlotsNew",
                Ke
              ),
              "updatedDisplayPricing",
              ze
            ),
            "addToArrayCookie",
            rt
          ),
          (0, l.default)(a, "getDataFromCookieById", ot));
        X() &&
          ((window.SLFunctions = {
            isEuro: _e,
            getConfig: he,
            isClient: X,
            getConstants: me,
            getCookieByName: I,
            getValueByPath: fe,
            isEmpty: j,
            browser: ue,
            setCookie: A,
            setCookieForLowIntent: P,
            setCookieForConnector: L,
            getParameterByName: D,
            getHashByKey: G,
            shouldShowElementTiming: xe,
            constructSearchQueryFromParams: Ae,
            constructNewSearchQueryFromParams: Pe,
            constructSkillUpNewSearchQueryFromParams: Le,
            parseAwsTimeStamp: Ne,
            getDateFormatWithTimeZone: K,
            checkIfSplititEnabled: De,
            constructSkillUpSearchQueryFromParams: Re,
            debugLogger: Me,
            capitalize: pe,
            splitedPrice: Y,
            getFinalPriceWithTax: V,
            isNotNaN: Be,
            getCookieNameByRegex: O,
            getTheSpecificTimeZone: Ge,
            getTheSpecificTimeZoneServerSide: $e,
            formatDateBasedFormat: Ee,
            getDateTimeSlots: Je,
            getCohortTimeDate: Ze,
            convertTimeZoneDynamic: Xe,
            getDateTimeSlotsNew: Ke,
            updatedDisplayPricing: ze,
            getDataFromCookieById: ot,
            addToArrayCookie: rt,
          }),
          (window.setUser = function (e, t) {
            console.log("setUser was called", e),
              "undefined" != typeof webengage &&
                void 0 !== webengage.user &&
                void 0 !== e &&
                "" != e &&
                webengage.user.login(e),
              "undefined" != typeof webengage &&
                void 0 !== webengage.screen &&
                void 0 !== t &&
                1 == t &&
                webengage.screen("userInfo", { lead: 1 });
          }),
          (window.fetchUTMSource = M),
          (window.getCookieByName = I));
      }).call(this, n(14), n(32), n(1115).Buffer);
    },
    845: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
            n[r] = arguments[r];
          return e.apply(t, n);
        };
      };
    },
    846: function (e, t, n) {
      "use strict";
      var r = n(481);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
          var a = [];
          r.forEach(t, function (e, t) {
            null != e &&
              (r.isArray(e) ? (t += "[]") : (e = [e]),
              r.forEach(e, function (e) {
                r.isDate(e)
                  ? (e = e.toISOString())
                  : r.isObject(e) && (e = JSON.stringify(e)),
                  a.push(o(t) + "=" + o(e));
              }));
          }),
            (i = a.join("&"));
        }
        if (i) {
          var s = e.indexOf("#");
          -1 !== s && (e = e.slice(0, s)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    847: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    848: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(481),
          o = n(1121),
          i = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(e, t) {
          !r.isUndefined(e) &&
            r.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var s,
          u = {
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                (void 0 !== t &&
                  "[object process]" === Object.prototype.toString.call(t))) &&
                (s = n(849)),
              s),
            transformRequest: [
              function (e, t) {
                return (
                  o(t, "Accept"),
                  o(t, "Content-Type"),
                  r.isFormData(e) ||
                  r.isArrayBuffer(e) ||
                  r.isBuffer(e) ||
                  r.isStream(e) ||
                  r.isFile(e) ||
                  r.isBlob(e)
                    ? e
                    : r.isArrayBufferView(e)
                    ? e.buffer
                    : r.isURLSearchParams(e)
                    ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                      e.toString())
                    : r.isObject(e)
                    ? (a(t, "application/json;charset=utf-8"),
                      JSON.stringify(e))
                    : e
                );
              },
            ],
            transformResponse: [
              function (e) {
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(e);
                  } catch (e) {}
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
          };
        (u.headers = {
          common: { Accept: "application/json, text/plain, */*" },
        }),
          r.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {};
          }),
          r.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = r.merge(i);
          }),
          (e.exports = u);
      }).call(this, n(52));
    },
    849: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(481),
          o = n(1122),
          i = n(846),
          a = n(1124),
          s = n(1127),
          u = n(1128),
          l = n(850);
        e.exports = function (e) {
          return new t(function (t, c) {
            var d = e.data,
              f = e.headers;
            r.isFormData(d) && delete f["Content-Type"];
            var p = new XMLHttpRequest();
            if (e.auth) {
              var h = e.auth.username || "",
                m = e.auth.password || "";
              f.Authorization = "Basic " + btoa(h + ":" + m);
            }
            var g = a(e.baseURL, e.url);
            if (
              (p.open(
                e.method.toUpperCase(),
                i(g, e.params, e.paramsSerializer),
                !0
              ),
              (p.timeout = e.timeout),
              (p.onreadystatechange = function () {
                if (
                  p &&
                  4 === p.readyState &&
                  (0 !== p.status ||
                    (p.responseURL && 0 === p.responseURL.indexOf("file:")))
                ) {
                  var n =
                      "getAllResponseHeaders" in p
                        ? s(p.getAllResponseHeaders())
                        : null,
                    r = {
                      data:
                        e.responseType && "text" !== e.responseType
                          ? p.response
                          : p.responseText,
                      status: p.status,
                      statusText: p.statusText,
                      headers: n,
                      config: e,
                      request: p,
                    };
                  o(t, c, r), (p = null);
                }
              }),
              (p.onabort = function () {
                p &&
                  (c(l("Request aborted", e, "ECONNABORTED", p)), (p = null));
              }),
              (p.onerror = function () {
                c(l("Network Error", e, null, p)), (p = null);
              }),
              (p.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  c(l(t, e, "ECONNABORTED", p)),
                  (p = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var v = n(1129),
                _ =
                  (e.withCredentials || u(g)) && e.xsrfCookieName
                    ? v.read(e.xsrfCookieName)
                    : void 0;
              _ && (f[e.xsrfHeaderName] = _);
            }
            if (
              ("setRequestHeader" in p &&
                r.forEach(f, function (e, t) {
                  void 0 === d && "content-type" === t.toLowerCase()
                    ? delete f[t]
                    : p.setRequestHeader(t, e);
                }),
              r.isUndefined(e.withCredentials) ||
                (p.withCredentials = !!e.withCredentials),
              e.responseType)
            )
              try {
                p.responseType = e.responseType;
              } catch (t) {
                if ("json" !== e.responseType) throw t;
              }
            "function" == typeof e.onDownloadProgress &&
              p.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                p.upload &&
                p.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  p && (p.abort(), c(e), (p = null));
                }),
              void 0 === d && (d = null),
              p.send(d);
          });
        };
      }).call(this, n(14));
    },
    850: function (e, t, n) {
      "use strict";
      var r = n(1123);
      e.exports = function (e, t, n, o, i) {
        var a = new Error(e);
        return r(a, t, n, o, i);
      };
    },
    851: function (e, t, n) {
      "use strict";
      var r = n(481);
      e.exports = function (e, t) {
        t = t || {};
        var n = {},
          o = ["url", "method", "params", "data"],
          i = ["headers", "auth", "proxy"],
          a = [
            "baseURL",
            "url",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "maxContentLength",
            "validateStatus",
            "maxRedirects",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
          ];
        r.forEach(o, function (e) {
          void 0 !== t[e] && (n[e] = t[e]);
        }),
          r.forEach(i, function (o) {
            r.isObject(t[o])
              ? (n[o] = r.deepMerge(e[o], t[o]))
              : void 0 !== t[o]
              ? (n[o] = t[o])
              : r.isObject(e[o])
              ? (n[o] = r.deepMerge(e[o]))
              : void 0 !== e[o] && (n[o] = e[o]);
          }),
          r.forEach(a, function (r) {
            void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
          });
        var s = o.concat(i).concat(a),
          u = Object.keys(t).filter(function (e) {
            return -1 === s.indexOf(e);
          });
        return (
          r.forEach(u, function (r) {
            void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
          }),
          n
        );
      };
    },
    852: function (e, t, n) {
      "use strict";
      function r(e) {
        this.message = e;
      }
      (r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (r.prototype.__CANCEL__ = !0),
        (e.exports = r);
    },
    853: function (e, t, n) {
      var r = n(316),
        o = n(854),
        i = ["checked", "value"],
        a = ["input", "select", "textarea"],
        s = { reset: !0, submit: !0 };
      function u(e) {
        return r.possibleStandardNames[e];
      }
      e.exports = function (e, t) {
        var n,
          l,
          c,
          d,
          f,
          p = {},
          h = (e = e || {}).type && s[e.type];
        for (n in e)
          if (((c = e[n]), r.isCustomAttribute(n))) p[n] = c;
          else if ((d = u((l = n.toLowerCase()))))
            switch (
              ((f = r.getPropertyInfo(d)),
              -1 === i.indexOf(d) ||
                -1 === a.indexOf(t) ||
                h ||
                (d = u("default" + l)),
              (p[d] = c),
              f && f.type)
            ) {
              case r.BOOLEAN:
                p[d] = !0;
                break;
              case r.OVERLOADED_BOOLEAN:
                "" === c && (p[d] = !0);
            }
          else o.PRESERVE_CUSTOM_ATTRIBUTES && (p[n] = c);
        return o.setStyleProp(e.style, p), p;
      };
    },
    854: function (e, t, n) {
      var r = n(0),
        o = n(317).default;
      var i = { reactCompat: !0 };
      var a = r.version.split(".")[0] >= 16,
        s = new Set([
          "tr",
          "tbody",
          "thead",
          "tfoot",
          "colgroup",
          "table",
          "head",
          "html",
          "frameset",
        ]);
      e.exports = {
        PRESERVE_CUSTOM_ATTRIBUTES: a,
        invertObject: function (e, t) {
          if (!e || "object" != typeof e)
            throw new TypeError("First argument must be an object");
          var n,
            r,
            o = "function" == typeof t,
            i = {},
            a = {};
          for (n in e)
            (r = e[n]),
              o && (i = t(n, r)) && 2 === i.length
                ? (a[i[0]] = i[1])
                : "string" == typeof r && (a[r] = n);
          return a;
        },
        isCustomComponent: function (e, t) {
          if (-1 === e.indexOf("-")) return t && "string" == typeof t.is;
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
        },
        setStyleProp: function (e, t) {
          if (null != e)
            try {
              t.style = o(e, i);
            } catch (e) {
              t.style = {};
            }
        },
        canTextBeChildOfNode: function (e) {
          return !s.has(e.name);
        },
        elementsWithNoTextChildren: s,
      };
    },
  },
]);
