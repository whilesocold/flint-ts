"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class DeathZone extends Action_1.default {
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
    constructor(zone, zoneIsSafe = false) {
        super();
        this._zone = null;
        this._invertZone = false;
        this.priority = -20;
        this.zone = zone;
        this.zoneIsSafe = zoneIsSafe;
    }
    /**
     * The zone.
     */
    get zone() {
        return this._zone;
    }
    set zone(value) {
        this._zone = value;
    }
    /**
     * If true, the zone is treated as the safe area and particles ouside the
     * zone are killed. If false, particles inside the zone are killed.
     */
    get zoneIsSafe() {
        return this._invertZone;
    }
    set zoneIsSafe(value) {
        this._invertZone = value;
    }
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
    update(emitter, particle, time) {
        const inside = this._zone.contains(particle.x, particle.y);
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
    }
}
exports.default = DeathZone;
//# sourceMappingURL=DeathZone.js.map