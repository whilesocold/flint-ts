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
var TurnTowardsPoint = /** @class */ (function (_super) {
    __extends(TurnTowardsPoint, _super);
    /**
     * The constructor creates a TurnTowardsPoint action for use by an emitter.
     * To add a TurnTowardsPoint to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the turn action. Higher values produce a sharper turn.
     * @param x The x coordinate of the point towards which the particle turns.
     * @param y The y coordinate of the point towards which the particle turns.
     */
    function TurnTowardsPoint(x, y, power) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (power === void 0) { power = 0; }
        var _this = _super.call(this) || this;
        _this._power = power;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(TurnTowardsPoint.prototype, "power", {
        /**
         * The strength of the turn action. Higher values produce a sharper turn.
         */
        get: function () {
            return this._power;
        },
        set: function (value) {
            this._power = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurnTowardsPoint.prototype, "x", {
        /**
         * The x coordinate of the point that the particle turns towards.
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
    Object.defineProperty(TurnTowardsPoint.prototype, "y", {
        /**
         * The y coordinate of the point that the particle turns towards.
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
    /**
     * Calculates the direction to the focus point and turns the particle towards
     * this direction.
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
    TurnTowardsPoint.prototype.update = function (emitter, particle, time) {
        var velLength = Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        var dx = particle.velX / velLength;
        var dy = particle.velY / velLength;
        var acc = this.power * time;
        var targetX = this._x - particle.x;
        var targetY = this._y - particle.y;
        var len = Math.sqrt(targetX * targetX + targetY * targetY);
        if (len === 0) {
            return;
        }
        targetX /= len;
        targetY /= len;
        var dot = targetX * dx + targetY * dy;
        var perpX = targetX - dx * dot;
        var perpY = targetY - dy * dot;
        var factor = acc / Math.sqrt(perpX * perpX + perpY * perpY);
        particle.velX += perpX * factor;
        particle.velY += perpY * factor;
        factor =
            velLength /
                Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        particle.velX *= factor;
        particle.velY *= factor;
    };
    return TurnTowardsPoint;
}(Action));
export default TurnTowardsPoint;
//# sourceMappingURL=TurnTowardsPoint.js.map