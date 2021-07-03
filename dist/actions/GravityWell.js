"use strict";
/**
 * The GravityWell action applies a force on the particle to draw it towards
 * a single point. The force applied is inversely proportional to the square
 * of the distance from the particle to the point, in accordance with Newton's
 * law of gravity.
 *
 * <p>This simulates the effect of gravity over large distances (as between
 * planets, for example). To simulate the effect of gravity at the surface
 * of the eacrth, use an Acceleration action with the direction of force
 * downwards.</p>
 *
 * @see Acceleration
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __importDefault(require("./Action"));
var GravityWell = /** @class */ (function (_super) {
    __extends(GravityWell, _super);
    /**
     * The constructor creates a GravityWell action for use by an emitter.
     * To add a GravityWell to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the gravity force - larger numbers produce a
     * stronger force.
     * @param x The x coordinate of the point towards which the force draws
     * the particles.
     * @param y The y coordinate of the point towards which the force draws
     * the particles.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    function GravityWell(power, x, y, epsilon) {
        if (power === void 0) { power = 0; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (epsilon === void 0) { epsilon = 100; }
        var _this = _super.call(this) || this;
        _this._gravityConst = 10000; // just scales the power to a more reasonable number
        _this._power = power * _this._gravityConst;
        _this._x = x;
        _this._y = y;
        _this._epsilonSq = epsilon * epsilon;
        return _this;
    }
    Object.defineProperty(GravityWell.prototype, "power", {
        /**
         * The strength of the gravity force - larger numbers produce a
         * stronger force.
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
    Object.defineProperty(GravityWell.prototype, "x", {
        /**
         * The x coordinate of the point towards which the force draws
         * the particles.
         */
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GravityWell.prototype, "y", {
        /**
         * The y coordinate of the point towards which the force draws
         * the particles.
         */
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GravityWell.prototype, "epsilon", {
        /**
         * The minimum distance for which the gravity force is calculated.
         * Particles closer than this distance experience the gravity as if
         * they were this distance away. This stops the gravity effect blowing
         * up as distances get small.  For realistic gravity effects you will want
         * a small epsilon ( ~1 ), but for stable visual effects a larger
         * epsilon (~100) is often better.
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
     * Calculates the gravity force on the particle and applies it for
     * the period of time indicated.
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
    GravityWell.prototype.update = function (emitter, particle, time) {
        if (particle.mass === 0) {
            return;
        }
        var x = this._x - particle.x;
        var y = this._y - particle.y;
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
    return GravityWell;
}(Action_1.default));
exports.default = GravityWell;
