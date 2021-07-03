import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import Action from "./Action";
export default class TurnTowardsPoint extends Action {
    private _x;
    private _y;
    private _power;
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
    constructor(x?: number, y?: number, power?: number);
    /**
     * The strength of the turn action. Higher values produce a sharper turn.
     */
    get power(): number;
    set power(value: number);
    /**
     * The x coordinate of the point that the particle turns towards.
     */
    get x(): number;
    set x(value: number);
    /**
     * The y coordinate of the point that the particle turns towards.
     */
    get y(): number;
    set y(value: number);
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
    update(emitter: Emitter, particle: Particle, time: number): void;
}
