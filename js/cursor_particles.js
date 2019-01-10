! function() {
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
}()
