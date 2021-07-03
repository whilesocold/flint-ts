"use strict";
/**
 * The TweenPosition action adjusts the particle's position between two
 * locations as it ages. The position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
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
var TweenPosition = /** @class */ (function (_super) {
    __extends(TweenPosition, _super);
    /**
     * The constructor creates a TweenPosition action for use by an emitter.
     * To add a TweenPosition to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param startX The x value for the particle's position when its energy is 1.
     * @param startY The y value for the particle's position when its energy is 1.
     * @param endX The x value of the particle's position when its energy is 0.
     * @param endY The y value of the particle's position when its energy is 0.
     */
    function TweenPosition(startX, startY, endX, endY) {
        if (startX === void 0) { startX = 0; }
        if (startY === void 0) { startY = 0; }
        if (endX === void 0) { endX = 0; }
        if (endY === void 0) { endY = 0; }
        var _this = _super.call(this) || this;
        _this._diffX = 0;
        _this._endX = 0;
        _this._diffY = 0;
        _this._endY = 0;
        _this.startX = startX;
        _this.endX = endX;
        _this.startY = startY;
        _this.endY = endY;
        return _this;
    }
    Object.defineProperty(TweenPosition.prototype, "startX", {
        /**
         * The x position for the particle's position when its energy is 1.
         */
        get: function () {
            return this._endX + this._diffX;
        },
        set: function (value) {
            this._diffX = value - this._endX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TweenPosition.prototype, "endX", {
        /**
         * The X value for the particle's position when its energy is 0.
         */
        get: function () {
            return this._endX;
        },
        set: function (value) {
            this._diffX = this._endX + this._diffX - value;
            this._endX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TweenPosition.prototype, "startY", {
        /**
         * The y position for the particle's position when its energy is 1.
         */
        get: function () {
            return this._endY + this._diffY;
        },
        set: function (value) {
            this._diffY = value - this._endY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TweenPosition.prototype, "endY", {
        /**
         * The y value for the particle's position when its energy is 0.
         */
        get: function () {
            return this._endY;
        },
        set: function (value) {
            this._diffY = this._endY + this._diffY - value;
            this._endY = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculates the current position of the particle based on it's energy.
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
    TweenPosition.prototype.update = function (emitter, particle, time) {
        particle.x = this._endX + this._diffX * particle.energy;
        particle.y = this._endY + this._diffY * particle.energy;
    };
    return TweenPosition;
}(Action_1.default));
exports.default = TweenPosition;
