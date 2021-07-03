"use strict";
/**
 * The SpeedLimit action limits each particle's maximum or minimum speed to the
 * specified speed.
 *
 * <p>This action has aa priority of -5, so that it executes after all accelerations
 * have occured.</p>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class SpeedLimit extends Action_1.default {
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
    constructor(speed = Number.MAX_VALUE, isMinimum = false) {
        super();
        this.priority = -5;
        this._limit = speed;
        this._limitSq = speed * speed;
        this._isMinimum = isMinimum;
    }
    /**
     * The speed limit
     */
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
        this._limitSq = value * value;
    }
    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    get isMinimum() {
        return this._isMinimum;
    }
    set isMinimum(value) {
        this._isMinimum = value;
    }
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
    update(emitter, particle, time) {
        const speedSq = particle.velX * particle.velX + particle.velY * particle.velY;
        if ((this._isMinimum && speedSq < this._limitSq) ||
            (!this._isMinimum && speedSq > this._limitSq)) {
            const scale = this._limit / Math.sqrt(speedSq);
            particle.velX *= scale;
            particle.velY *= scale;
        }
    }
}
exports.default = SpeedLimit;
//# sourceMappingURL=SpeedLimit.js.map