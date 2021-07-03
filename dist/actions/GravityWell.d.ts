/**
 * The GravityWell action applies a force on the particle to draw it towards
 * a single point. The force applied is inversely proportional to the square
 * of the distance from the particle to the point, in accordance with Newton's
 * law of gravity.
 *
 * <p>This simulates the effect of gravity over large distances (as between
 * planets, for example). To simulate the effect of gravity at the surface
 * of the eacrth, use an Acceleration action with the direction of force
 * downwards.</p>
 *
 * @see Acceleration
 */
import Emitter from "../emitters/Emitter";
import Particle2D from "../particles/Particle2D";
import Action from "./Action";
export default class GravityWell extends Action {
    private _x;
    private _y;
    private _power;
    private _epsilonSq;
    private _gravityConst;
    /**
     * The constructor creates a GravityWell action for use by an emitter.
     * To add a GravityWell to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the gravity force - larger numbers produce a
     * stronger force.
     * @param x The x coordinate of the point towards which the force draws
     * the particles.
     * @param y The y coordinate of the point towards which the force draws
     * the particles.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power?: number, x?: number, y?: number, epsilon?: number);
    /**
     * The strength of the gravity force - larger numbers produce a
     * stronger force.
     */
    get power(): number;
    set power(value: number);
    /**
     * The x coordinate of the point towards which the force draws
     * the particles.
     */
    get x(): number;
    set x(value: number);
    /**
     * The y coordinate of the point towards which the force draws
     * the particles.
     */
    get y(): number;
    set y(value: number);
    /**
     * The minimum distance for which the gravity force is calculated.
     * Particles closer than this distance experience the gravity as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small.  For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    get epsilon(): number;
    set epsilon(value: number);
    /**
     * Calculates the gravity force on the particle and applies it for
     * the period of time indicated.
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
    update(emitter: Emitter, particle: Particle2D, time: number): void;
}
