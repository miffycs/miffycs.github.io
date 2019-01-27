var App = /** @class */ (function() {
    function App() {
        var _this = this;
        this.select = function(e) {
            return document.querySelector(e);
        };
        this.selectAll = function(e) {
            return document.querySelectorAll(e);
        };
        this.mainTl = new TimelineMax();
        this.follower = this.select('.follower');
        this.liquidFollower = this.select('.liquidFollower');
        this.track = this.select('.track');
        this.dragger = this.select('.dragger');
        this.particle = this.select('.particle');
        this.pContainer = this.select('.pContainer');
        this.boxFill = this.select('.boxFill');
        this.particlePool = [];
        this.particleCount = 0;
        this.numParticles = 60;
        this.maxDrag = 642;
        this.boxFillMaxPosY = 130;
        // this.heartChat = this.select('.heartChat');
        this.boxFill = this.select('.boxFill');
        var followerVX = 0,
            liquidFollowerY = 0;
        TweenMax.set('.gymBottle', {
            transformOrigin: '50% 100%'
        });
        TweenMax.set(this.boxFill, {
            transformOrigin: '40% 0%'
        });
        this.myDragger = Draggable.create(this.dragger, {
            type: 'x, y',
            bounds: {
                minX: 0,
                maxX: this.maxDrag,
                minY: 0,
                maxY: 0
            },
            onDrag: this.onDrag,
            onThrowUpdate: this.onDrag,
            throwProps: true,
            callbackScope: this,
            overshootTolerance: 0,
            throwResistance: 8000,
            allowContextMenu: true
        });
        TweenMax.to(this.follower, 1, {
            x: '+=0',
            repeat: -1,
            modifiers: {
                x: function(x, target) {
                    followerVX += (_this.dragger._gsTransform.x - _this.follower._gsTransform.x) * 0.08;
                    followerVX *= 0.79;
                    return _this.follower._gsTransform.x + followerVX;
                }
            }
        });
        TweenMax.to(this.liquidFollower, 1, {
            x: '+=0',
            repeat: -1,
            modifiers: {
                x: function(x, target) {
                    liquidFollowerY += (_this.dragger._gsTransform.x - _this.liquidFollower._gsTransform.x) * 0.98;
                    liquidFollowerY *= 0.97;
                    return _this.follower._gsTransform.x + liquidFollowerY;
                }
            }
        });
        TweenMax.to(this.boxFill, 1, {
            rotation: '+=0',
            repeat: -1,
            ease: Linear.easeNone,
            modifiers: {
                rotation: function(rotation, target) {
                    return (rotation + liquidFollowerY * 0.35);
                }
            }
        });
        this.onDrag();
        TweenMax.set('.tick', {
            transformOrigin: '30% 100%',
            scale: 0
        });
    }
    App.prototype.onDrag = function() {
        var progress = this.dragger._gsTransform.x / this.maxDrag;
        TweenMax.to('.gymBottle', 0.1, {
            x: this.dragger._gsTransform.x
        });
        var percent = progress * 100;
        var percentY = progress * this.boxFillMaxPosY;
        TweenMax.to('.track', 0.1, {
            drawSVG: "0% " + percent + "%"
        });
        TweenMax.to(this.boxFill, 0.1, {
            y: percentY
        });
        TweenMax.to('.track', 0.3, {
            stroke: '#3FA9F5'
        });
        TweenMax.to('.waterDrop', 1, {
            scale: (2 * progress) + 1,
            transformOrigin: '50% 50%',
            fill: '#FFF',
            ease: Elastic.easeOut.config(1, 0.36)
        });
        TweenMax.to('.tick', 0.3, {
            scale: 0
        });
        if (progress === 1) {
            TweenMax.to('.waterDrop', 0.3, {
                scale: 8,
                fill: '#78D5D7'
            });
            TweenMax.to('.tick', 1, {
                scale: 1,
                rotation: 0,
                ease: Elastic.easeOut.config(0.6, 0.6)
            });
            TweenMax.to('.track', 0.3, {
                stroke: '#78D5D7'
            });
        }
    };
    App.prototype.randomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return App;
}());
TweenMax.set('svg', {
    visibility: 'visible'
});
var app = new App();
