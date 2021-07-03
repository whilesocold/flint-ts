"use strict";
/**
 * The TweenPosition action adjusts the particle's position between two
 * locations as it ages. The position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class TweenPosition extends Action_1.default {
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
    constructor(startX = 0, startY = 0, endX = 0, endY = 0) {
        super();
        this._diffX = 0;
        this._endX = 0;
        this._diffY = 0;
        this._endY = 0;
        this.startX = startX;
        this.endX = endX;
        this.startY = startY;
        this.endY = endY;
    }
    /**
     * The x position for the particle's position when its energy is 1.
     */
    get startX() {
        return this._endX + this._diffX;
    }
    set startX(value) {
        this._diffX = value - this._endX;
    }
    /**
     * The X value for the particle's position when its energy is 0.
     */
    get endX() {
        return this._endX;
    }
    set endX(value) {
        this._diffX = this._endX + this._diffX - value;
        this._endX = value;
    }
    /**
     * The y position for the particle's position when its energy is 1.
     */
    get startY() {
        return this._endY + this._diffY;
    }
    set startY(value) {
        this._diffY = value - this._endY;
    }
    /**
     * The y value for the particle's position when its energy is 0.
     */
    get endY() {
        return this._endY;
    }
    set endY(value) {
        this._diffY = this._endY + this._diffY - value;
        this._endY = value;
    }
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
    update(emitter, particle, time) {
        particle.x = this._endX + this._diffX * particle.energy;
        particle.y = this._endY + this._diffY * particle.energy;
    }
}
exports.default = TweenPosition;
//# sourceMappingURL=TweenPosition.js.map