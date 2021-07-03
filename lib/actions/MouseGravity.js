var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Action from "./Action";
var MouseGravity = /** @class */ (function (_super) {
    __extends(MouseGravity, _super);
    /**
     * The constructor creates a MouseGravity action for use by an emitter.
     * To add a MouseGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the gravity force - larger numbers produce a
     * stronger force.
     * @param renderer The display object whose coordinate system the mouse
     * position is converted to. This is usually the renderer for the particle
     * system created by the emitter.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing up
     * as distances get small. For realistic gravity effects you will want a
     * small epsilon ( ~1 ), but for stable visual effects a larger epsilon
     * (~100) is often better.
     */
    function MouseGravity(power, renderer, epsilon) {
        if (power === void 0) { power = 0; }
        if (epsilon === void 0) { epsilon = 100; }
        var _this = _super.call(this) || this;
        _this._gravityConst = 10000; // scales the power to more useable levels
        _this._power = power * _this._gravityConst;
        _this._epsilonSq = epsilon * epsilon;
        _this._renderer = renderer;
        return _this;
    }
    Object.defineProperty(MouseGravity.prototype, "power", {
        /**
         * The strength of the gravity force.
         */
        get: function () {
            return this._power / this._gravityConst;
        },
        set: function (value) {
            this._power = value * this._gravityConst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MouseGravity.prototype, "renderer", {
        /**
         * The display object whose coordinate system the mouse position is
         * converted to. This is usually the renderer for the particle system
         * created by the emitter.
         */
        get: function () {
            return this._renderer;
        },
        set: function (value) {
            this._renderer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MouseGravity.prototype, "epsilon", {
        /**
         * The minimum distance for which the gravity force is calculated.
         * Particles closer than this distance experience the gravity as it they were
         * this distance away. This stops the gravity effect blowing up as distances get
         * small.
         */
        get: function () {
            return Math.sqrt(this._epsilonSq);
        },
        set: function (value) {
            this._epsilonSq = value * value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculates the gravity force on the particle and applies it for the
     * period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     *
     * @see org.flintparticles.common.actions.Action#update()
     */
    MouseGravity.prototype.update = function (emitter, particle, time) {
        var x = this._renderer.x - particle.x;
        var y = this._renderer.y - particle.y;
        var dSq = x * x + y * y;
        if (dSq === 0) {
            return;
        }
        var d = Math.sqrt(dSq);
        if (dSq < this._epsilonSq)
            dSq = this._epsilonSq;
        var factor = (this._power * time) / (dSq * d);
        particle.velX += x * factor;
        particle.velY += y * factor;
    };
    return MouseGravity;
}(Action));
export default MouseGravity;
//# sourceMappingURL=MouseGravity.js.map