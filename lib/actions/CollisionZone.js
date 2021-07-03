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
import ParticleEvents from "../events/ParticleEvents";
import Action from "./Action";
var CollisionZone = /** @class */ (function (_super) {
    __extends(CollisionZone, _super);
    /**
     * The constructor creates a CollisionZone action for use by  an emitter.
     * To add a CollisionZone to all particles managed by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param zone The zone that the particles should collide with.
     * @param bounce The coefficient of restitution when the particles collide.
     * A value of 1 gives a pure elastic collision, with no energy loss. A
     * value between 0 and 1 causes the particles to loose enegy in the
     * collision. A value greater than 1 causes the particle to gain energy
     * in the collision.
     */
    function CollisionZone(zone, bounce) {
        if (bounce === void 0) { bounce = 1; }
        var _this = _super.call(this) || this;
        _this.priority = -30;
        _this._bounce = bounce;
        _this._zone = zone;
        return _this;
    }
    Object.defineProperty(CollisionZone.prototype, "zone", {
        /**
         * The zone that the particles should collide with.
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
    Object.defineProperty(CollisionZone.prototype, "bounce", {
        /**
         * The coefficient of restitution when the particles collide. A value of
         * 1 gives a pure elastic collision, with no energy loss. A value
         * between 0 and 1 causes the particles to loose enegy in the collision.
         * A value greater than 1 causes the particles to gain energy in the collision.
         */
        get: function () {
            return this._bounce;
        },
        set: function (value) {
            this._bounce = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks for collisions between the particle and the zone.
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
    CollisionZone.prototype.update = function (emitter, particle, time) {
        var collide = this._zone.collideParticle(particle, this._bounce);
        if (collide && emitter.hasEventListener(ParticleEvents.ZONE_COLLISION)) {
            var options = {
                detail: {
                    particle: particle,
                    action: this,
                },
            };
            emitter.dispatchEvent(new CustomEvent(ParticleEvents.ZONE_COLLISION, options));
        }
    };
    return CollisionZone;
}(Action));
export default CollisionZone;
//# sourceMappingURL=CollisionZone.js.map