"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParticleEvents_1 = __importDefault(require("../events/ParticleEvents"));
const Action_1 = __importDefault(require("./Action"));
class CollisionZone extends Action_1.default {
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
    constructor(zone, bounce = 1) {
        super();
        this.priority = -30;
        this._bounce = bounce;
        this._zone = zone;
    }
    /**
     * The zone that the particles should collide with.
     */
    get zone() {
        return this._zone;
    }
    set zone(value) {
        this._zone = value;
    }
    /**
     * The coefficient of restitution when the particles collide. A value of
     * 1 gives a pure elastic collision, with no energy loss. A value
     * between 0 and 1 causes the particles to loose enegy in the collision.
     * A value greater than 1 causes the particles to gain energy in the collision.
     */
    get bounce() {
        return this._bounce;
    }
    set bounce(value) {
        this._bounce = value;
    }
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
    update(emitter, particle, time) {
        const collide = this._zone.collideParticle(particle, this._bounce);
        if (collide && emitter.hasEventListener(ParticleEvents_1.default.ZONE_COLLISION)) {
            const options = {
                detail: {
                    particle: particle,
                    action: this,
                },
            };
            emitter.dispatchEvent(new CustomEvent(ParticleEvents_1.default.ZONE_COLLISION, options));
        }
    }
}
exports.default = CollisionZone;
//# sourceMappingURL=CollisionZone.js.map