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
var DeathZone = /** @class */ (function (_super) {
    __extends(DeathZone, _super);
    /**
     * The constructor creates a DeathZone action for use by an emitter.
     * To add a DeathZone to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     * @see org.flintparticles.twoD.zones
     *
     * @param zone The zone to use. Any item from the
     * org.flintparticles.twoD.zones package can be used.
     * @param zoneIsSafe If true, the zone is treated as the safe area
     * and particles outside the zone are killed. If false, particles
     * inside the zone are killed.
     */
    function DeathZone(zone, zoneIsSafe) {
        if (zoneIsSafe === void 0) { zoneIsSafe = false; }
        var _this = _super.call(this) || this;
        _this._zone = null;
        _this._invertZone = false;
        _this.priority = -20;
        _this.zone = zone;
        _this.zoneIsSafe = zoneIsSafe;
        return _this;
    }
    Object.defineProperty(DeathZone.prototype, "zone", {
        /**
         * The zone.
         */
        get: function () {
            return this._zone;
        },
        set: function (value) {
            this._zone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeathZone.prototype, "zoneIsSafe", {
        /**
         * If true, the zone is treated as the safe area and particles ouside the
         * zone are killed. If false, particles inside the zone are killed.
         */
        get: function () {
            return this._invertZone;
        },
        set: function (value) {
            this._invertZone = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks whether the particle is inside the zone and kills it if it is
     * in the DeathZone region.
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
    DeathZone.prototype.update = function (emitter, particle, time) {
        var inside = this._zone.contains(particle.x, particle.y);
        if (this._invertZone) {
            if (!inside) {
                particle.isDead = true;
            }
        }
        else {
            if (inside) {
                particle.isDead = true;
            }
        }
    };
    return DeathZone;
}(Action));
export default DeathZone;
//# sourceMappingURL=DeathZone.js.map