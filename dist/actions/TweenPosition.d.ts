/**
 * The TweenPosition action adjusts the particle's position between two
 * locations as it ages. The position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import Action from "./Action";
export default class TweenPosition extends Action {
    private _diffX;
    private _endX;
    private _diffY;
    private _endY;
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
    constructor(startX?: number, startY?: number, endX?: number, endY?: number);
    /**
     * The x position for the particle's position when its energy is 1.
     */
    get startX(): number;
    set startX(value: number);
    /**
     * The X value for the particle's position when its energy is 0.
     */
    get endX(): number;
    set endX(value: number);
    /**
     * The y position for the particle's position when its energy is 1.
     */
    get startY(): number;
    set startY(value: number);
    /**
     * The y value for the particle's position when its energy is 0.
     */
    get endY(): number;
    set endY(value: number);
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
    update(emitter: Emitter, particle: Particle, time: number): void;
}
