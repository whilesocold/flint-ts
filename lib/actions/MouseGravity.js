"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class MouseGravity extends Action_1.default {
    /**
     * The constructor creates a MouseGravity action for use by an emitter.
     * To add a MouseGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the gravity force - larger numbers produce a
     * stronger force.
     * @param renderer The display object whose coordinate system the mouse
     * position is converted to. This is usually the renderer for the particle
     * system created by the emitter.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing up
     * as distances get small. For realistic gravity effects you will want a
     * small epsilon ( ~1 ), but for stable visual effects a larger epsilon
     * (~100) is often better.
     */
    constructor(power = 0, renderer, epsilon = 100) {
        super();
        this._gravityConst = 10000; // scales the power to more useable levels
        this._power = power * this._gravityConst;
        this._epsilonSq = epsilon * epsilon;
        this._renderer = renderer;
    }
    /**
     * The strength of the gravity force.
     */
    get power() {
        return this._power / this._gravityConst;
    }
    set power(value) {
        this._power = value * this._gravityConst;
    }
    /**
     * The display object whose coordinate system the mouse position is
     * converted to. This is usually the renderer for the particle system
     * created by the emitter.
     */
    get renderer() {
        return this._renderer;
    }
    set renderer(value) {
        this._renderer = value;
    }
    /**
     * The minimum distance for which the gravity force is calculated.
     * Particles closer than this distance experience the gravity as it they were
     * this distance away. This stops the gravity effect blowing up as distances get
     * small.
     */
    get epsilon() {
        return Math.sqrt(this._epsilonSq);
    }
    set epsilon(value) {
        this._epsilonSq = value * value;
    }
    /**
     * Calculates the gravity force on the particle and applies it for the
     * period of time indicated.
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
        const x = this._renderer.x - particle.x;
        const y = this._renderer.y - particle.y;
        let dSq = x * x + y * y;
        if (dSq === 0) {
            return;
        }
        const d = Math.sqrt(dSq);
        if (dSq < this._epsilonSq)
            dSq = this._epsilonSq;
        const factor = (this._power * time) / (dSq * d);
        particle.velX += x * factor;
        particle.velY += y * factor;
    }
}
exports.default = MouseGravity;
//# sourceMappingURL=MouseGravity.js.map