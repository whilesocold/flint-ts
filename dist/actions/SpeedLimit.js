"use strict";
/**
 * The SpeedLimit action limits each particle's maximum or minimum speed to the
 * specified speed.
 *
 * <p>This action has aa priority of -5, so that it executes after all accelerations
 * have occured.</p>
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
var SpeedLimit = /** @class */ (function (_super) {
    __extends(SpeedLimit, _super);
    /**
     * The constructor creates a SpeedLimit action for use by an emitter.
     * To add a SpeedLimit to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param speed The speed limit for the action in pixels per second.
     * @param isMinimum If true, particles travelling slower than the speed limit
     * are accelerated to the speed limit, otherwise particles travelling faster
     * than the speed limit are decelerated to the speed limit.
     */
    function SpeedLimit(speed, isMinimum) {
        if (speed === void 0) { speed = Number.MAX_VALUE; }
        if (isMinimum === void 0) { isMinimum = false; }
        var _this = _super.call(this) || this;
        _this.priority = -5;
        _this._limit = speed;
        _this._limitSq = speed * speed;
        _this._isMinimum = isMinimum;
        return _this;
    }
    Object.defineProperty(SpeedLimit.prototype, "limit", {
        /**
         * The speed limit
         */
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
            this._limitSq = value * value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpeedLimit.prototype, "isMinimum", {
        /**
         * Whether the speed is a minimum (true) or maximum (false) speed.
         */
        get: function () {
            return this._isMinimum;
        },
        set: function (value) {
            this._isMinimum = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks whether the particle's speed is above or below the speed limit
     * as appropriate and, if so, alters its speed to match the speed limit.
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
    SpeedLimit.prototype.update = function (emitter, particle, time) {
        var speedSq = particle.velX * particle.velX + particle.velY * particle.velY;
        if ((this._isMinimum && speedSq < this._limitSq) ||
            (!this._isMinimum && speedSq > this._limitSq)) {
            var scale = this._limit / Math.sqrt(speedSq);
            particle.velX *= scale;
            particle.velY *= scale;
        }
    };
    return SpeedLimit;
}(Action_1.default));
exports.default = SpeedLimit;
