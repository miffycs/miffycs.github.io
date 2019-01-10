! function(a) {
    var b = /iPhone/i,
        c = /iPod/i,
        d = /iPad/i,
        e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        f = /Android/i,
        g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        i = /Windows Phone/i,
        j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        k = /BlackBerry/i,
        l = /BB10/i,
        m = /Opera Mini/i,
        n = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        p = /UCWEB/i,
        q = /spider/i,
        r = /bot/i,
        s = /Windows; U;/i,
        t = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        u = function(a, b) {
            return a.test(b)
        },
        v = function(a) {
            var v = a || navigator.userAgent,
                w = v.split("[FBAN");
            return "undefined" != typeof w[1] && (v = w[0]), w = v.split("Twitter"), "undefined" != typeof w[1] && (v = w[0]), this.apple = {
                phone: u(b, v),
                ipod: u(c, v),
                tablet: !u(b, v) && u(d, v),
                device: u(b, v) || u(c, v) || u(d, v)
            }, this.amazon = {
                phone: u(g, v),
                tablet: !u(g, v) && u(h, v),
                device: u(g, v) || u(h, v)
            }, this.android = {
                phone: u(g, v) || u(e, v),
                tablet: !u(g, v) && !u(e, v) && (u(h, v) || u(f, v)),
                device: u(g, v) || u(h, v) || u(e, v) || u(f, v)
            }, this.windows = {
                phone: u(i, v),
                tablet: u(j, v),
                device: u(i, v) || u(j, v)
            }, this.other = {
                blackberry: u(k, v),
                blackberry10: u(l, v),
                opera: u(m, v),
                firefox: u(o, v),
                chrome: u(n, v),
                ucweb: u(p, v),
                device: u(k, v) || u(l, v) || u(m, v) || u(o, v) || u(n, v) || u(p, v)
            }, this.spiders = {
                spider: u(q, v),
                bot: u(r, v),
                u: u(s, v),
                device: u(q, v) || u(r, v) || u(s, v)
            }, this.seven_inch = u(t, v), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, this.spider = this.spiders.device, "undefined" == typeof window ? this : void 0
        },
        w = function() {
            var a = new v;
            return a.Class = v, a
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = v : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = w() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = w()) : a.isMobile = w()
}(this),

isMobile.any || ! function() {
        function a(a, b, c) {
            return a.getAttribute(b) || c
        }

        function b(a) {
            return document.getElementsByTagName(a)
        }

        function c() {
            var c = b("script"),
                d = c.length,
                e = c[d - 1];
            return {
                l: d,
                z: a(e, "zIndex", -1),
                o: a(e, "opacity", 1),
                c: a(e, "color", "69,182,247"),
                n: a(e, "count", 99)
            }
        }

        function d() {
            f = i.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, g = i.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        function e() {
            l.clearRect(0, 0, f, g);
            var a, b, c, d, i, k;
            p.forEach(function(e, m) {
                for (e.x += e.xa, e.y += e.ya, e.xa *= e.x > f || e.x < 0 ? -1 : 1, e.ya *= e.y > g || e.y < 0 ? -1 : 1, l.fillRect(e.x - .5, e.y - .5, 1, 1), b = m + 1; b < h.length; b++) a = h[b], null !== a.x && null !== a.y && (d = e.x - a.x, i = e.y - a.y, k = d * d + i * i, k < a.max && (a === o && k >= a.max / 2 && (e.x -= .03 * d, e.y -= .03 * i), c = (a.max - k) / a.max, l.beginPath(), l.lineWidth = c / 2, l.strokeStyle = "rgba(" + j.c + "," + (c + .2) + ")", l.moveTo(e.x, e.y), l.lineTo(a.x, a.y), l.stroke()))
            }), m(e)
        }
        var f, g, h, p, q, r, s, t, u, i = document.createElement("canvas"),
            j = c(),
            k = "c_n" + j.l,
            l = i.getContext("2d"),
            m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 45)
            },
            n = Math.random,
            o = {
                x: null,
                y: null,
                max: 2e4
            };
        for (i.id = k, i.style.cssText = "position:fixed;top:0;left:0;z-index:" + j.z + ";opacity:" + j.o, b("body")[0].appendChild(i), d(), window.onresize = d, window.onmousemove = function(a) {
                a = a || window.event, o.x = a.clientX, o.y = a.clientY
            }, window.onmouseout = function() {
                o.x = null, o.y = null
            }, p = [], q = 0; j.n > q; q++) r = n() * f, s = n() * g, t = 2 * n() - 1, u = 2 * n() - 1, p.push({
            x: r,
            y: s,
            xa: t,
            ya: u,
            max: 6e3
        });
        h = p.concat([o]), setTimeout(function() {
            e()
        }, 100)
    }(),

    function(a) {
        a.fn.qrcode = function(b) {
            function d(a) {
                this.mode = c, this.data = a
            }

            function e(a, b) {
                this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function f(a, b) {
                var c, d;
                if (void 0 == a.length) throw Error(a.length + "/" + b);
                for (c = 0; c < a.length && 0 == a[c];) c++;
                for (this.num = Array(a.length - c + b), d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
            }

            function g(a, b) {
                this.totalCount = a, this.dataCount = b
            }

            function h() {
                this.buffer = [], this.length = 0
            }
            var c, i, j, k;
            for (d.prototype = {
                    getLength: function() {
                        return this.data.length
                    },
                    write: function(a) {
                        for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b), 8)
                    }
                }, e.prototype = {
                    addData: function(a) {
                        this.dataList.push(new d(a)), this.dataCache = null
                    },
                    isDark: function(a, b) {
                        if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw Error(a + "," + b);
                        return this.modules[a][b]
                    },
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        var a, b, c, d, e;
                        if (1 > this.typeNumber) {
                            for (a = 1, a = 1; 40 > a; a++) {
                                for (b = g.getRSBlocks(a, this.errorCorrectLevel), c = new h, d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
                                for (e = 0; e < this.dataList.length; e++) b = this.dataList[e], c.put(b.mode, 4), c.put(b.getLength(), i.getLengthInBits(b.mode, a)), b.write(c);
                                if (c.getLengthInBits() <= 8 * d) break
                            }
                            this.typeNumber = a
                        }
                        this.makeImpl(!1, this.getBestMaskPattern())
                    },
                    makeImpl: function(a, b) {
                        var c, d;
                        for (this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount), c = 0; c < this.moduleCount; c++)
                            for (this.modules[c] = Array(this.moduleCount), d = 0; d < this.moduleCount; d++) this.modules[c][d] = null;
                        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, b), 7 <= this.typeNumber && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, b)
                    },
                    setupPositionProbePattern: function(a, b) {
                        var c, d;
                        for (c = -1; 7 >= c; c++)
                            if (!(-1 >= a + c || this.moduleCount <= a + c))
                                for (d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
                    },
                    getBestMaskPattern: function() {
                        var a, b, c, d;
                        for (a = 0, b = 0, c = 0; 8 > c; c++) this.makeImpl(!0, c), d = i.getLostPoint(this), (0 == c || a > d) && (a = d, b = c);
                        return b
                    },
                    createMovieClip: function(a, b, c) {
                        var d, e;
                        for (a = a.createEmptyMovieClip(b, c), this.make(), b = 0; b < this.modules.length; b++)
                            for (c = 1 * b, d = 0; d < this.modules[b].length; d++) e = 1 * d, this.modules[b][d] && (a.beginFill(0, 100), a.moveTo(e, c), a.lineTo(e + 1, c), a.lineTo(e + 1, c + 1), a.lineTo(e, c + 1), a.endFill());
                        return a
                    },
                    setupTimingPattern: function() {
                        for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                        for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
                    },
                    setupPositionAdjustPattern: function() {
                        var a, b, c, d, e, f, g;
                        for (a = i.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                            for (c = 0; c < a.length; c++)
                                if (d = a[b], e = a[c], null == this.modules[d][e])
                                    for (f = -2; 2 >= f; f++)
                                        for (g = -2; 2 >= g; g++) this.modules[d + f][e + g] = -2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? !0 : !1
                    },
                    setupTypeNumber: function(a) {
                        var b, c, d;
                        for (b = i.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) d = !a && 1 == (1 & b >> c), this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d;
                        for (c = 0; 18 > c; c++) d = !a && 1 == (1 & b >> c), this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
                    },
                    setupTypeInfo: function(a, b) {
                        var c, d, e;
                        for (c = i.getBCHTypeInfo(this.errorCorrectLevel << 3 | b), d = 0; 15 > d; d++) e = !a && 1 == (1 & c >> d), 6 > d ? this.modules[d][8] = e : 8 > d ? this.modules[d + 1][8] = e : this.modules[this.moduleCount - 15 + d][8] = e;
                        for (d = 0; 15 > d; d++) e = !a && 1 == (1 & c >> d), 8 > d ? this.modules[8][this.moduleCount - d - 1] = e : 9 > d ? this.modules[8][15 - d - 1 + 1] = e : this.modules[8][15 - d - 1] = e;
                        this.modules[this.moduleCount - 8][8] = !a
                    },
                    mapData: function(a, b) {
                        var c, d, e, f, g, h, j;
                        for (c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)
                            for (6 == g && g--;;) {
                                for (h = 0; 2 > h; h++) null == this.modules[d][g - h] && (j = !1, f < a.length && (j = 1 == (1 & a[f] >>> e)), i.getMask(b, d, g - h) && (j = !j), this.modules[d][g - h] = j, e--, -1 == e && (f++, e = 7));
                                if (d += c, 0 > d || this.moduleCount <= d) {
                                    d -= c, c = -c;
                                    break
                                }
                            }
                    }
                }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(a, b, c) {
                    var d, f, j;
                    for (b = g.getRSBlocks(a, b), d = new h, f = 0; f < c.length; f++) j = c[f], d.put(j.mode, 4), d.put(j.getLength(), i.getLengthInBits(j.mode, a)), j.write(d);
                    for (f = a = 0; f < b.length; f++) a += b[f].dataCount;
                    if (d.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + d.getLengthInBits() + ">" + 8 * a + ")");
                    for (d.getLengthInBits() + 4 <= 8 * a && d.put(0, 4); 0 != d.getLengthInBits() % 8;) d.putBit(!1);
                    for (; !(d.getLengthInBits() >= 8 * a) && (d.put(e.PAD0, 8), !(d.getLengthInBits() >= 8 * a));) d.put(e.PAD1, 8);
                    return e.createBytes(d, b)
                }, e.createBytes = function(a, b) {
                    var c, d, e, g, h, j, k, l, m;
                    for (c = 0, d = 0, e = 0, g = Array(b.length), h = Array(b.length), j = 0; j < b.length; j++) {
                        for (k = b[j].dataCount, l = b[j].totalCount - k, d = Math.max(d, k), e = Math.max(e, l), g[j] = Array(k), m = 0; m < g[j].length; m++) g[j][m] = 255 & a.buffer[m + c];
                        for (c += k, m = i.getErrorCorrectPolynomial(l), k = new f(g[j], m.getLength() - 1).mod(m), h[j] = Array(m.getLength() - 1), m = 0; m < h[j].length; m++) l = m + k.getLength() - h[j].length, h[j][m] = l >= 0 ? k.get(l) : 0
                    }
                    for (m = j = 0; m < b.length; m++) j += b[m].totalCount;
                    for (c = Array(j), m = k = 0; d > m; m++)
                        for (j = 0; j < b.length; j++) m < g[j].length && (c[k++] = g[j][m]);
                    for (m = 0; e > m; m++)
                        for (j = 0; j < b.length; j++) m < h[j].length && (c[k++] = h[j][m]);
                    return c
                }, c = 4, i = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(a) {
                        for (var b = a << 10; 0 <= i.getBCHDigit(b) - i.getBCHDigit(i.G15);) b ^= i.G15 << i.getBCHDigit(b) - i.getBCHDigit(i.G15);
                        return (a << 10 | b) ^ i.G15_MASK
                    },
                    getBCHTypeNumber: function(a) {
                        for (var b = a << 12; 0 <= i.getBCHDigit(b) - i.getBCHDigit(i.G18);) b ^= i.G18 << i.getBCHDigit(b) - i.getBCHDigit(i.G18);
                        return a << 12 | b
                    },
                    getBCHDigit: function(a) {
                        for (var b = 0; 0 != a;) b++, a >>>= 1;
                        return b
                    },
                    getPatternPosition: function(a) {
                        return i.PATTERN_POSITION_TABLE[a - 1]
                    },
                    getMask: function(a, b, c) {
                        switch (a) {
                            case 0:
                                return 0 == (b + c) % 2;
                            case 1:
                                return 0 == b % 2;
                            case 2:
                                return 0 == c % 3;
                            case 3:
                                return 0 == (b + c) % 3;
                            case 4:
                                return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                            case 5:
                                return 0 == b * c % 2 + b * c % 3;
                            case 6:
                                return 0 == (b * c % 2 + b * c % 3) % 2;
                            case 7:
                                return 0 == (b * c % 3 + (b + c) % 2) % 2;
                            default:
                                throw Error("bad maskPattern:" + a)
                        }
                    },
                    getErrorCorrectPolynomial: function(a) {
                        for (var b = new f([1], 0), c = 0; a > c; c++) b = b.multiply(new f([1, j.gexp(c)], 0));
                        return b
                    },
                    getLengthInBits: function(a, b) {
                        if (b >= 1 && 10 > b) switch (a) {
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case c:
                                return 8;
                            case 8:
                                return 8;
                            default:
                                throw Error("mode:" + a)
                        } else if (27 > b) switch (a) {
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case c:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw Error("mode:" + a)
                        } else {
                            if (!(41 > b)) throw Error("type:" + b);
                            switch (a) {
                                case 1:
                                    return 14;
                                case 2:
                                    return 13;
                                case c:
                                    return 16;
                                case 8:
                                    return 12;
                                default:
                                    throw Error("mode:" + a)
                            }
                        }
                    },
                    getLostPoint: function(a) {
                        var b, c, d, e, f, g, h, i;
                        for (b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                            for (e = 0; b > e; e++) {
                                for (f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                                    if (!(0 > d + h || d + h >= b))
                                        for (i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || 0 == h && 0 == i || g == a.isDark(d + h, e + i) && f++;
                                f > 5 && (c += 3 + f - 5)
                            }
                        for (d = 0; b - 1 > d; d++)
                            for (e = 0; b - 1 > e; e++) f = 0, a.isDark(d, e) && f++, a.isDark(d + 1, e) && f++, a.isDark(d, e + 1) && f++, a.isDark(d + 1, e + 1) && f++, (0 == f || 4 == f) && (c += 3);
                        for (d = 0; b > d; d++)
                            for (e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                        for (e = 0; b > e; e++)
                            for (d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                        for (e = f = 0; b > e; e++)
                            for (d = 0; b > d; d++) a.isDark(d, e) && f++;
                        return a = Math.abs(100 * f / b / b - 50) / 5, c + 10 * a
                    }
                }, j = {
                    glog: function(a) {
                        if (1 > a) throw Error("glog(" + a + ")");
                        return j.LOG_TABLE[a]
                    },
                    gexp: function(a) {
                        for (; 0 > a;) a += 255;
                        for (; a >= 256;) a -= 255;
                        return j.EXP_TABLE[a]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, k = 0; 8 > k; k++) j.EXP_TABLE[k] = 1 << k;
            for (k = 8; 256 > k; k++) j.EXP_TABLE[k] = j.EXP_TABLE[k - 4] ^ j.EXP_TABLE[k - 5] ^ j.EXP_TABLE[k - 6] ^ j.EXP_TABLE[k - 8];
            for (k = 0; 255 > k; k++) j.LOG_TABLE[j.EXP_TABLE[k]] = k;
            return f.prototype = {
                get: function(a) {
                    return this.num[a]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(a) {
                    var b, c, d;
                    for (b = Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
                        for (d = 0; d < a.getLength(); d++) b[c + d] ^= j.gexp(j.glog(this.get(c)) + j.glog(a.get(d)));
                    return new f(b, 0)
                },
                mod: function(a) {
                    if (0 > this.getLength() - a.getLength()) return this;
                    for (var b = j.glog(this.get(0)) - j.glog(a.get(0)), c = Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
                    for (d = 0; d < a.getLength(); d++) c[d] ^= j.gexp(j.glog(a.get(d)) + b);
                    return new f(c, 0).mod(a)
                }
            }, g.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], g.getRSBlocks = function(a, b) {
                var d, e, f, h, i, j, k, c = g.getRsBlockTable(a, b);
                if (void 0 == c) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
                for (d = c.length / 3, e = [], f = 0; d > f; f++)
                    for (h = c[3 * f + 0], i = c[3 * f + 1], j = c[3 * f + 2], k = 0; h > k; k++) e.push(new g(i, j));
                return e
            }, g.getRsBlockTable = function(a, b) {
                switch (b) {
                    case 1:
                        return g.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                    case 0:
                        return g.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                    case 3:
                        return g.RS_BLOCK_TABLE[4 * (a - 1) + 2];
                    case 2:
                        return g.RS_BLOCK_TABLE[4 * (a - 1) + 3]
                }
            }, h.prototype = {
                get: function(a) {
                    return 1 == (1 & this.buffer[Math.floor(a / 8)] >>> 7 - a % 8)
                },
                put: function(a, b) {
                    for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(a) {
                    var b = Math.floor(this.length / 8);
                    this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
                }
            }, "string" == typeof b && (b = {
                text: b
            }), b = a.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, b), this.each(function() {
                var c, d, f, g, h, i, j, k, l;
                if ("canvas" == b.render)
                    for (c = new e(b.typeNumber, b.correctLevel), c.addData(b.text), c.make(), d = document.createElement("canvas"), d.width = b.width, d.height = b.height, f = d.getContext("2d"), g = b.width / c.getModuleCount(), h = b.height / c.getModuleCount(), i = 0; i < c.getModuleCount(); i++)
                        for (j = 0; j < c.getModuleCount(); j++) f.fillStyle = c.isDark(i, j) ? b.foreground : b.background, k = Math.ceil((j + 1) * g) - Math.floor(j * g), l = Math.ceil((i + 1) * g) - Math.floor(i * g), f.fillRect(Math.round(j * g), Math.round(i * h), k, l);
                else
                    for (c = new e(b.typeNumber, b.correctLevel), c.addData(b.text), c.make(), d = a("<table></table>").css("width", b.width + "px").css("height", b.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", b.background), f = b.width / c.getModuleCount(), g = b.height / c.getModuleCount(), h = 0; h < c.getModuleCount(); h++)
                        for (i = a("<tr></tr>").css("height", g + "px").appendTo(d), j = 0; j < c.getModuleCount(); j++) a("<td></td>").css("width", f + "px").css("background-color", c.isDark(h, j) ? b.foreground : b.background).appendTo(i);
                c = d, jQuery(c).appendTo(this)
            })
        }
    }
