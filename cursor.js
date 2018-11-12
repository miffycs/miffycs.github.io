function play(a) {
    var b, c;
    m3u8 = urls[a], b = document.getElementById("video"), Hls.isSupported() ? (c = new Hls, c.loadSource(m3u8), c.attachMedia(b), c.on(Hls.Events.MANIFEST_PARSED, function () {
        b.play()
    })) : b.canPlayType("application/vnd.apple.mpegurl") && (b.src = m3u8, b.addEventListener("loadedmetadata", function () {
        b.play()
    }))
}

var rthost = window.location.host;

!function (a) {
    var b = /iPhone/i, c = /iPod/i, d = /iPad/i, e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i,
        g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        i = /Windows Phone/i, j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, k = /BlackBerry/i, l = /BB10/i, m = /Opera Mini/i,
        n = /(CriOS|Chrome)(?=.*\bMobile\b)/i, o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, p = /UCWEB/i, q = /spider/i,
        r = /bot/i, s = /Windows; U;/i, t = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        u = function (a, b) {
            return a.test(b)
        }, v = function (a) {
            var v = a || navigator.userAgent, w = v.split("[FBAN");
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
        }, w = function () {
            var a = new v;
            return a.Class = v, a
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = v : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = w() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = w()) : a.isMobile = w()
}

(this), isMobile.any || !function () {
    function a(a, b, c) {
        return a.getAttribute(b) || c
    }

    function b(a) {
        return document.getElementsByTagName(a)
    }

    function c() {
        var c = b("script"), d = c.length, e = c[d - 1];
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
        p.forEach(function (e, m) {
            for (e.x += e.xa, e.y += e.ya, e.xa *= e.x > f || e.x < 0 ? -1 : 1, e.ya *= e.y > g || e.y < 0 ? -1 : 1, l.fillRect(e.x - .5, e.y - .5, 1, 1), b = m + 1; b < h.length; b++) a = h[b], null !== a.x && null !== a.y && (d = e.x - a.x, i = e.y - a.y, k = d * d + i * i, k < a.max && (a === o && k >= a.max / 2 && (e.x -= .03 * d, e.y -= .03 * i), c = (a.max - k) / a.max, l.beginPath(), l.lineWidth = c / 2, l.strokeStyle = "rgba(" + j.c + "," + (c + .2) + ")", l.moveTo(e.x, e.y), l.lineTo(a.x, a.y), l.stroke()))
        }), m(e)
    }

    var f, g, h, p, q, r, s, t, u, i = document.createElement("canvas"), j = c(), k = "c_n" + j.l,
        l = i.getContext("2d"),
        m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 45)
        }, n = Math.random, o = {x: null, y: null, max: 2e4};
    for (i.id = k, i.style.cssText = "position:fixed;top:0;left:0;z-index:" + j.z + ";opacity:" + j.o, b("body")[0].appendChild(i), d(), window.onresize = d, window.onmousemove = function (a) {
        a = a || window.event, o.x = a.clientX, o.y = a.clientY
    }, window.onmouseout = function () {
        o.x = null, o.y = null
    }, p = [], q = 0; j.n > q; q++) r = n() * f, s = n() * g, t = 2 * n() - 1, u = 2 * n() - 1, p.push({
        x: r,
        y: s,
        xa: t,
        ya: u,
        max: 6e3
    });
    h = p.concat([o]), setTimeout(function () {
        e()
    }, 100)
}

(), function (a) {
    function b(a) {
        (a.attr("title") || "string" != typeof a.attr("original-title")) && a.attr("original-title", a.attr("title") || "").removeAttr("title")
    }

    function c(c, d) {
        this.$element = a(c), this.options = d, this.enabled = !0, b(this.$element)
    }

    c.prototype = {
        show: function () {
            var c, d, e, f, g, h, b = this.getTitle();
            if (b && this.enabled) {
                switch (c = this.tip(), c.find(".tipsy-inner")[this.options.html ? "html" : "text"](b), c[0].className = "tipsy", c.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).appendTo(document.body), d = a.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }), e = c[0].offsetWidth, f = c[0].offsetHeight, g = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity, g.charAt(0)) {
                    case"n":
                        h = {top: d.top + d.height + this.options.offset, left: d.left + d.width / 2 - e / 2};
                        break;
                    case"s":
                        h = {top: d.top - f - this.options.offset, left: d.left + d.width / 2 - e / 2};
                        break;
                    case"e":
                        h = {top: d.top + d.height / 2 - f / 2, left: d.left - e - this.options.offset};
                        break;
                    case"w":
                        h = {top: d.top + d.height / 2 - f / 2, left: d.left + d.width + this.options.offset}
                }
                2 == g.length && ("w" == g.charAt(1) ? h.left = d.left + d.width / 2 - 15 : (console.log(d, e), h.left = d.left + d.width - e)), c.css(h).addClass("tipsy-" + g), this.options.fade ? c.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({opacity: this.options.opacity}) : c.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        }, hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                a(this).remove()
            }) : this.tip().remove()
        }, getTitle: function () {
            var a, c = this.$element, d = this.options;
            return b(c), d = this.options, "string" == typeof d.title ? a = c.attr("title" == d.title ? "original-title" : d.title) : "function" == typeof d.title && (a = d.title.call(c[0])), a = ("" + a).replace(/(^\s*|\s*$)/, ""), a || d.fallback
        }, tip: function () {
            return this.$tip || (this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')), this.$tip
        }, validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, enable: function () {
            this.enabled = !0
        }, disable: function () {
            this.enabled = !1
        }, toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    }, a.fn.tipsy = function (b) {
        function d(d) {
            var e = a.data(d, "tipsy");
            return e || (e = new c(d, a.fn.tipsy.elementOptions(d, b)), a.data(d, "tipsy", e)), e
        }

        function e() {
            var a = d(this);
            a.hoverState = "in", 0 == b.delayIn ? a.show() : setTimeout(function () {
                "in" == a.hoverState && a.show()
            }, b.delayIn)
        }

        function f() {
            var a = d(this);
            a.hoverState = "out", 0 == b.delayOut ? a.hide() : setTimeout(function () {
                "out" == a.hoverState && a.hide()
            }, b.delayOut)
        }

        if (b === !0) return this.data("tipsy");
        if ("string" == typeof b) return this.data("tipsy")[b]();
        if (b = a.extend({}, a.fn.tipsy.defaults, b), b.live || this.each(function () {
            d(this)
        }), "manual" != b.trigger) {
            var g = b.live ? "live" : "bind", h = "hover" == b.trigger ? "mouseenter" : "focus",
                i = "hover" == b.trigger ? "mouseleave" : "blur";
            this[g](h, e)[g](i, f)
        }
        return this
    }, a.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .72,
        title: "title",
        trigger: "hover"
    }, a.fn.tipsy.elementOptions = function (b, c) {
        return a.metadata ? a.extend({}, c, a(b).metadata()) : c
    }, a.fn.tipsy.autoNS = function () {
        return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
    }, a.fn.tipsy.autoWE = function () {
        return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
    }
}

!function (a, b) {
    var e = function (a, b) {
        function c() {
        }

        var d;
        return c.prototype.make = function (b) {
            return d = "undefined" != typeof b ? parseInt(b) : 0, this[a.options.type](), this
        }, c.prototype.after = function (b) {
            return setTimeout(function () {
                b()
            }, a.options.animationDuration + 20)
        }, c.prototype.slider = function () {
            var c = a[a.size] * (a.current - 1), e = b.Clones.shift - a.paddings;
            b.Run.isStart() ? (e = a.options.centered ? Math.abs(e) : 0, b.Arrows.disable("prev")) : b.Run.isEnd() ? (e = a.options.centered ? Math.abs(e) : Math.abs(2 * e), b.Arrows.disable("next")) : (e = Math.abs(e), b.Arrows.enable()), a.track.css({
                transition: b.Transition.get("all"),
                transform: b.Translate.set(a.axis, c - e - d)
            })
        }, c.prototype.carousel = function () {
            var c, e = a[a.size] * a.current;
            c = a.options.centered ? b.Clones.shift - a.paddings : b.Clones.shift, b.Run.isOffset("<") && (e = 0, b.Run.flag = !1, this.after(function () {
                a.track.css({
                    transition: b.Transition.clear("all"),
                    transform: b.Translate.set(a.axis, a[a.size] * a.length + c)
                })
            })), b.Run.isOffset(">") && (e = a[a.size] * a.length + a[a.size], b.Run.flag = !1, this.after(function () {
                a.track.css({transition: b.Transition.clear("all"), transform: b.Translate.set(a.axis, a[a.size] + c)})
            })), a.track.css({transition: b.Transition.get("all"), transform: b.Translate.set(a.axis, e + c - d)})
        }, c.prototype.slideshow = function () {
            a.slides.css("transition", b.Transition.get("opacity")).eq(a.current - 1).css("opacity", 1).siblings().css("opacity", 0)
        }, new c
    }, f = function (a, b) {
        function c() {
        }

        return c.prototype.instance = function () {
            return {
                current: function () {
                    return a.current
                }, go: function (a, c) {
                    b.Run.pause(), b.Run.make(a, c), b.Run.play()
                }, jump: function (a, c) {
                    b.Transition.jumping = !0, b.Animation.after(function () {
                        b.Transition.jumping = !1
                    }), b.Run.make(a, c)
                }, move: function (a) {
                    b.Transition.jumping = !0, b.Animation.make(a), b.Transition.jumping = !1
                }, start: function (c) {
                    b.Run.running = !0, a.options.autoplay = parseInt(c), b.Run.play()
                }, play: function () {
                    return b.Run.play()
                }, pause: function () {
                    return b.Run.pause()
                }, destroy: function () {
                    b.Run.pause(), b.Clones.remove(), b.Helper.removeStyles([a.track, a.slides]), b.Bullets.remove(), a.slider.removeData("glide_api"), b.Events.unbind(), b.Touch.unbind(), b.Arrows.unbind(), b.Bullets.unbind(), delete a.slider, delete a.track, delete a.slides, delete a.width, delete a.length
                }, refresh: function () {
                    b.Run.pause(), a.collect(), a.setup(), b.Clones.remove().init(), b.Bullets.remove().init(), b.Build.init(), b.Run.make("=" + parseInt(a.options.startAt), b.Run.play())
                }
            }
        }, new c
    }, g = function (b, c) {
        function d() {
            this.build(), this.bind()
        }

        return d.prototype.build = function () {
            this.wrapper = b.slider.find("." + b.options.classes.arrows), this.items = this.wrapper.children()
        }, d.prototype.disable = function (a) {
            var d = b.options.classes;
            this.items.filter("." + d["arrow" + c.Helper.capitalise(a)]).unbind("click.glide touchstart.glide").addClass(d.disabled).siblings().bind("click.glide touchstart.glide", this.click).bind("mouseenter.glide", this.hover).bind("mouseleave.glide", this.hover).removeClass(d.disabled)
        }, d.prototype.enable = function () {
            this.bind(), this.items.removeClass(b.options.classes.disabled)
        }, d.prototype.click = function (b) {
            b.preventDefault(), c.Events.disabled || (c.Run.pause(), c.Run.make(a(this).data("glide-dir")), c.Animation.after(function () {
                c.Run.play()
            }))
        }, d.prototype.hover = function (a) {
            if (!c.Events.disabled) switch (a.type) {
                case"mouseleave":
                    c.Run.play();
                    break;
                case"mouseenter":
                    c.Run.pause()
            }
        }, d.prototype.bind = function () {
            this.items.on("click.glide touchstart.glide", this.click).on("mouseenter.glide", this.hover).on("mouseleave.glide", this.hover)
        }, d.prototype.unbind = function () {
            this.items.off("click.glide touchstart.glide").off("mouseenter.glide").off("mouseleave.glide")
        }, new d
    }, h = function (a, b) {
        function c() {
            this.init()
        }

        return c.prototype.init = function () {
            this[a.options.type](), this.active(), b.Height.set()
        }, c.prototype.isType = function (b) {
            return a.options.type === b
        }, c.prototype.isMode = function (b) {
            return a.options.mode === b
        }, c.prototype.slider = function () {
            b.Transition.jumping = !0, a.slides[a.size](a[a.size]), a.track.css(a.size, a[a.size] * a.length), this.isMode("vertical") && b.Height.set(!0), b.Animation.make(), b.Transition.jumping = !1
        }, c.prototype.carousel = function () {
            b.Transition.jumping = !0, b.Clones.shift = a[a.size] * b.Clones.items.length / 2 - a[a.size], a.slides[a.size](a[a.size]), a.track.css(a.size, a[a.size] * a.length + b.Clones.getGrowth()), this.isMode("vertical") && b.Height.set(!0), b.Animation.make(), b.Clones.append(), b.Transition.jumping = !1
        }, c.prototype.slideshow = function () {
            b.Transition.jumping = !0, b.Animation.make(), b.Transition.jumping = !1
        }, c.prototype.active = function () {
            a.slides.eq(a.current - 1).addClass(a.options.classes.active).siblings().removeClass(a.options.classes.active)
        }, new c
    }, i = function (b, c) {
        function d() {
            this.init(), this.bind()
        }

        return d.prototype.init = function () {
            return this.build(), this.active(), this
        }, d.prototype.build = function () {
            this.wrapper = b.slider.children("." + b.options.classes.bullets);
            for (var c = 1; c <= b.length; c++) a("<button>", {
                "class": b.options.classes.bullet,
                "data-glide-dir": "=" + c
            }).appendTo(this.wrapper);
            this.items = this.wrapper.children()
        }, d.prototype.active = function () {
            this.items.eq(b.current - 1).addClass("active").siblings().removeClass("active")
        }, d.prototype.remove = function () {
            return this.items.remove(), this
        }, d.prototype.click = function (b) {
            b.preventDefault(), c.Events.disabled || (c.Run.pause(), c.Run.make(a(this).data("glide-dir")), c.Animation.after(function () {
                c.Run.play()
            }))
        }, d.prototype.hover = function (a) {
            if (!c.Events.disabled) switch (a.type) {
                case"mouseleave":
                    c.Run.play();
                    break;
                case"mouseenter":
                    c.Run.pause()
            }
        }, d.prototype.bind = function () {
            this.wrapper.on("click.glide touchstart.glide", "button", this.click).on("mouseenter.glide", "button", this.hover).on("mouseleave.glide", "button", this.hover)
        }, d.prototype.unbind = function () {
            this.wrapper.off("click.glide touchstart.glide", "button").off("mouseenter.glide", "button").off("mouseleave.glide", "button")
        }, new d
    }, j = function (a) {
        function c() {
            this.items = [], this.shift = 0, this.init()
        }

        var d, e = [0, 1];
        return c.prototype.init = function () {
            return this.map(), this.collect(), this
        }, c.prototype.map = function () {
            var a;
            for (d = [], a = 0; a < e.length; a++) d.push(-1 - a, a)
        }, c.prototype.collect = function () {
            var b, c;
            for (c = 0; c < d.length; c++) b = a.slides.eq(d[c]).clone().addClass(a.options.classes.clone), this.items.push(b)
        }, c.prototype.append = function () {
            var b, c;
            for (b = 0; b < this.items.length; b++) c = this.items[b][a.size](a[a.size]), d[b] >= 0 ? c.appendTo(a.track) : c.prependTo(a.track)
        }, c.prototype.remove = function () {
            var a;
            for (a = 0; a < this.items.length; a++) this.items[a].remove();
            return this
        }, c.prototype.getGrowth = function () {
            return a.width * this.items.length
        }, new c
    }, k = function (a, b) {
        function c() {
            for (var c in b) this[c] = new b[c](a, this)
        }

        return new c
    }, l = function (c, d) {
        function e() {
            this.disabled = !1, this.keyboard(), this.hoverpause(), this.resize(), this.bindTriggers()
        }

        var f = a("[data-glide-trigger]");
        return e.prototype.keyboard = function () {
            c.options.keyboard && a(b).on("keyup.glide", function (a) {
                39 === a.keyCode && d.Run.make(">"), 37 === a.keyCode && d.Run.make("<")
            })
        }, e.prototype.hoverpause = function () {
            c.options.hoverpause && c.track.on("mouseover.glide", function () {
                d.Run.pause(), d.Events.trigger("mouseOver")
            }).on("mouseout.glide", function () {
                d.Run.play(), d.Events.trigger("mouseOut")
            })
        }, e.prototype.resize = function () {
            a(b).on("resize.glide." + c.uuid, d.Helper.throttle(function () {
                d.Transition.jumping = !0, c.setup(), d.Build.init(), d.Run.make("=" + c.current, !1), d.Run.play(), d.Transition.jumping = !1
            }, c.options.throttle))
        }, e.prototype.bindTriggers = function () {
            f.length && f.off("click.glide touchstart.glide").on("click.glide touchstart.glide", this.handleTrigger)
        }, e.prototype.handleTrigger = function (b) {
            var c, d, e;
            if (b.preventDefault(), c = a(this).data("glide-trigger").split(" "), !this.disabled) for (d in c) e = a(c[d]).data("glide_api"), e.pause(), e.go(a(this).data("glide-dir"), this.activeTrigger), e.play()
        }, e.prototype.disable = function () {
            return this.disabled = !0, this
        }, e.prototype.enable = function () {
            return this.disabled = !1, this
        }, e.prototype.detachClicks = function () {
            return c.track.find("a").each(function (b, c) {
                a(c).attr("data-href", a(c).attr("href")).removeAttr("href")
            }), this
        }, e.prototype.attachClicks = function () {
            return c.track.find("a").each(function (b, c) {
                a(c).attr("href", a(c).attr("data-href"))
            }), this
        }, e.prototype.preventClicks = function (a) {
            return "mousemove" === a.type && c.track.one("click", "a", function (a) {
                a.preventDefault()
            }), this
        }, e.prototype.call = function (a) {
            return "undefined" !== a && "function" == typeof a && a(this.getParams()), this
        }, e.prototype.trigger = function (a) {
            return c.slider.trigger(a + ".glide", [this.getParams()]), this
        }, e.prototype.getParams = function () {
            return {
                index: c.current,
                length: c.slides.length,
                current: c.slides.eq(c.current - 1),
                slider: c.slider,
                swipe: {distance: d.Touch.distance || 0}
            }
        }, e.prototype.unbind = function () {
            c.track.off("keyup.glide").off("mouseover.glide").off("mouseout.glide"), f.off("click.glide touchstart.glide"), a(b).off("keyup.glide").off("resize.glide." + c._uid)
        }, new e
    }, m = function (a, b) {
        function c() {
            a.options.autoheight && a.wrapper.css({transition: b.Transition.get("height")})
        }

        return c.prototype.get = function () {
            var b = "y" === a.axis ? 2 * a.paddings : 0;
            return a.slides.eq(a.current - 1).height() + b
        }, c.prototype.set = function (b) {
            return a.options.autoheight || b ? a.wrapper.height(this.get()) : !1
        }, new c
    }, n = function (a) {
        function c() {
        }

        return c.prototype.byAxis = function (b, c) {
            return "y" === a.axis ? c : b
        }, c.prototype.capitalise = function (a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }, c.prototype.now = Date.now || function () {
            return (new Date).getTime()
        }, c.prototype.throttle = function (a, b, c) {
            var d, e, f, j, g = this, h = null, i = 0;
            return c || (c = {}), j = function () {
                i = c.leading === !1 ? 0 : g.now(), h = null, f = a.apply(d, e), h || (d = e = null)
            }, function () {
                var l, k = g.now();
                return i || c.leading !== !1 || (i = k), l = b - (k - i), d = this, e = arguments, 0 >= l || l > b ? (h && (clearTimeout(h), h = null), i = k, f = a.apply(d, e), h || (d = e = null)) : h || c.trailing === !1 || (h = setTimeout(j, l)), f
            }
        }, c.prototype.removeStyles = function (a) {
            for (var b = 0; b < a.length; b++) a[b].removeAttr("style")
        }, new c
    }, o = function (a, b) {
        function c() {
            this.running = !1, this.flag = !1, this.play()
        }

        return c.prototype.play = function () {
            var b = this;
            return (a.options.autoplay || this.running) && "undefined" == typeof this.interval && (this.interval = setInterval(function () {
                b.pause(), b.make(">"), b.play()
            }, this.getInterval())), this.interval
        }, c.prototype.getInterval = function () {
            return parseInt(a.slides.eq(a.current - 1).data("glide-autoplay")) || a.options.autoplay
        }, c.prototype.pause = function () {
            return (a.options.autoplay || this.running) && this.interval >= 0 && (this.interval = clearInterval(this.interval)), this.interval
        }, c.prototype.isStart = function () {
            return 1 === a.current
        }, c.prototype.isEnd = function () {
            return a.current === a.length
        }, c.prototype.isOffset = function (a) {
            return this.flag && this.direction === a
        }, c.prototype.make = function (c, d) {
            var e = this;
            switch (this.direction = c.substr(0, 1), this.steps = c.substr(1) ? c.substr(1) : 0, a.options.hoverpause || this.pause(), d !== !1 && b.Events.disable().call(a.options.beforeTransition).trigger("beforeTransition"), this.direction) {
                case">":
                    this.isEnd() ? (a.current = 1, this.flag = !0) : a.current = ">" === this.steps ? a.length : a.current + 1;
                    break;
                case"<":
                    this.isStart() ? (a.current = a.length, this.flag = !0) : a.current = "<" === this.steps ? 1 : a.current - 1;
                    break;
                case"=":
                    a.current = parseInt(this.steps)
            }
            b.Height.set(), b.Bullets.active(), b.Animation.make().after(function () {
                b.Build.active(), d !== !1 && b.Events.enable().call(d).call(a.options.afterTransition).trigger("afterTransition"), a.options.hoverpause || e.play()
            }), b.Events.call(a.options.duringTransition).trigger("duringTransition")
        }, new c
    }, p = function (b, c) {
        function d() {
            this.dragging = !1, b.options.touchDistance && b.track.on({"touchstart.glide": a.proxy(this.start, this)}), b.options.dragDistance && b.track.on({"mousedown.glide": a.proxy(this.start, this)})
        }

        var e;
        return d.prototype.unbind = function () {
            b.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")
        }, d.prototype.start = function (d) {
            c.Events.disabled || this.dragging || (e = "mousedown" === d.type ? d.originalEvent : d.originalEvent.touches[0] || d.originalEvent.changedTouches[0], c.Transition.jumping = !0, this.touchStartX = parseInt(e.pageX), this.touchStartY = parseInt(e.pageY), this.touchSin = null, this.dragging = !0, b.track.on({
                "touchmove.glide mousemove.glide": c.Helper.throttle(a.proxy(this.move, this), b.options.throttle),
                "touchend.glide touchcancel.glide mouseup.glide mouseleave.glide": a.proxy(this.end, this)
            }), c.Events.detachClicks().call(b.options.swipeStart).trigger("swipeStart"), c.Run.pause())
        }, d.prototype.move = function (a) {
            if (!c.Events.disabled && this.dragging) {
                e = "mousemove" === a.type ? a.originalEvent : a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                var d = parseInt(e.pageX) - this.touchStartX, f = parseInt(e.pageY) - this.touchStartY,
                    g = Math.abs(d << 2), h = Math.abs(f << 2), i = Math.sqrt(g + h),
                    j = Math.sqrt(c.Helper.byAxis(h, g));
                if (this.touchSin = Math.asin(j / i), this.distance = c.Helper.byAxis(e.pageX - this.touchStartX, e.pageY - this.touchStartY), 180 * this.touchSin / Math.PI < 45 && c.Animation.make(c.Helper.byAxis(d, f)), c.Events.preventClicks(a).call(b.options.swipeMove).trigger("swipeMove"), c.Build.isMode("vertical")) {
                    if (c.Run.isStart() && f > 0) return;
                    if (c.Run.isEnd() && 0 > f) return
                }
                if (!(180 * this.touchSin / Math.PI < 45)) return;
                a.stopPropagation(), a.preventDefault(), b.track.addClass(b.options.classes.dragging)
            }
        }, d.prototype.end = function (a) {
            var d, f, g;
            !c.Events.disabled && this.dragging && (e = "mouseup" === a.type || "mouseleave" === a.type ? a.originalEvent : a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], f = c.Helper.byAxis(e.pageX - this.touchStartX, e.pageY - this.touchStartY), g = 180 * this.touchSin / Math.PI, c.Transition.jumping = !1, c.Build.isType("slider") && (c.Run.isStart() && f > 0 && (f = 0), c.Run.isEnd() && 0 > f && (f = 0)), d = "mouseup" === a.type || "mouseleave" === a.type ? b.options.dragDistance : b.options.touchDistance, f > d && 45 > g ? c.Run.make("<") : -d > f && 45 > g ? c.Run.make(">") : c.Animation.make(), c.Animation.after(function () {
                c.Events.enable(), c.Run.play()
            }), this.dragging = !1, c.Events.attachClicks().disable().call(b.options.swipeEnd).trigger("swipeEnd"), b.track.removeClass(b.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide"))
        }, new d
    }, q = function (a) {
        function c() {
            this.jumping = !1
        }

        return c.prototype.get = function (b) {
            return this.jumping ? this.clear("all") : b + " " + a.options.animationDuration + "ms " + a.options.animationTimingFunc
        }, c.prototype.clear = function (b) {
            return b + " 0ms " + a.options.animationTimingFunc
        }, new c
    }, r = function () {
        function c() {
        }

        var d = {x: 0, y: 0, z: 0};
        return c.prototype.set = function (a, b) {
            return d[a] = parseInt(b), "translate3d(" + -1 * d.x + "px, " + -1 * d.y + "px, " + -1 * d.z + "px)"
        }, new c
    }, s = function (b, c) {
        var s, d = {
            autoplay: 4e3,
            type: "carousel",
            mode: "horizontal",
            startAt: 1,
            hoverpause: !0,
            keyboard: !0,
            touchDistance: 80,
            dragDistance: 120,
            animationDuration: 400,
            animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
            throttle: 16,
            autoheight: !1,
            paddings: 0,
            centered: !0,
            classes: {
                base: "glide",
                wrapper: "glide__wrapper",
                track: "glide__track",
                slide: "glide__slide",
                arrows: "glide__arrows",
                arrow: "glide__arrow",
                arrowNext: "next",
                arrowPrev: "prev",
                bullets: "glide__bullets",
                bullet: "glide__bullet",
                clone: "clone",
                active: "active",
                dragging: "dragging",
                disabled: "disabled"
            },
            beforeInit: function () {
            },
            afterInit: function () {
            },
            beforeTransition: function () {
            },
            duringTransition: function () {
            },
            afterTransition: function () {
            },
            swipeStart: function () {
            },
            swipeEnd: function () {
            },
            swipeMove: function () {
            }
        };
        return this.options = a.extend({}, d, c), this.uuid = Math.floor(1e3 * Math.random()), this.current = parseInt(this.options.startAt), this.element = b, this.collect(), this.setup(), this.options.beforeInit({
            index: this.current,
            length: this.slides.length,
            current: this.slides.eq(this.current - 1),
            slider: this.slider
        }), s = new k(this, {
            Helper: n,
            Translate: r,
            Transition: q,
            Run: o,
            Animation: e,
            Clones: j,
            Arrows: g,
            Bullets: i,
            Height: m,
            Build: h,
            Events: l,
            Touch: p,
            Api: f
        }), s.Events.call(this.options.afterInit), s.Api.instance()
    };
    s.prototype.collect = function () {
        var a = this.options, b = a.classes;
        this.slider = this.element.addClass(b.base + "--" + a.type).addClass(b.base + "--" + a.mode), this.track = this.slider.find("." + b.track), this.wrapper = this.slider.find("." + b.wrapper), this.slides = this.track.find("." + b.slide).not("." + b.clone)
    }, s.prototype.setup = function () {
        var a = {horizontal: ["width", "x"], vertical: ["height", "y"]};
        this.size = a[this.options.mode][0], this.axis = a[this.options.mode][1], this.length = this.slides.length, this.paddings = this.getPaddings(), this[this.size] = this.getSize()
    }, s.prototype.getPaddings = function () {
        var b, c, a = this.options.paddings;
        return "string" == typeof a ? (b = parseInt(a, 10), c = a.indexOf("%") >= 0, c ? parseInt(this.slider[this.size]() * (b / 100)) : b) : a
    }, s.prototype.getSize = function () {
        return this.slider[this.size]() - 2 * this.paddings
    }, a.fn.glide = function (b) {
        return this.each(function () {
            a.data(this, "glide_api") || a.data(this, "glide_api", new s(a(this), b))
        })
    }
}


(), function (a, b, c) {
    a.$win = a.$(b), a.$doc = a.$(c), a.events || (a.events = {}), a.events.resizeend = {
        defaults: {delay: 250},
        setup: function () {
            var b, e, f, g, h, c = arguments, d = {delay: a.$.event.special.resizeend.defaults.delay};
            return a.utils.is.fn(c[0]) ? b = c[0] : a.utils.is.number(c[0]) ? d.delay = c[0] : a.utils.is.object(c[0]) && (d = a.$.extend({}, d, c[0])), e = a.utils.uid("resizeend"), f = a.$.extend({delay: a.$.event.special.resizeend.defaults.delay}, d), g = f, h = function (b) {
                g && clearTimeout(g), g = setTimeout(function () {
                    return g = null, b.type = "resizeend.chicago.dom", a.$(b.target).trigger("resizeend", b)
                }, f.delay)
            }, a.$(this).data("chicago.event.resizeend.uid", e), a.$(this).on("resize", a.utils.debounce(h, 100)).data(e, h)
        },
        teardown: function () {
            var b = a.$(this).data("chicago.event.resizeend.uid");
            return a.$(this).off("resize", a.$(this).data(b)), a.$(this).removeData(b), a.$(this).removeData("chicago.event.resizeend.uid")
        }
    }, function () {
        a.$.event.special.resizeend = a.events.resizeend, a.$.fn.resizeend = function (b, c) {
            return this.each(function () {
                a.$(this).on("resizeend", b, c)
            })
        }
    }()
}