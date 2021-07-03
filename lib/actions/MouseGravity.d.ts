import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import { Point } from "../zones/Zone2D";
import Action from "./Action";
export default class MouseGravity extends Action {
    protected _power: number;
    protected _epsilonSq: number;
    protected _gravityConst: number;
    protected _renderer: Point;
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
    constructor(power: number, renderer: Point, epsilon?: number);
    /**
     * The strength of the gravity force.
     */
    get power(): number;
    set power(value: number);
    /**
     * The display object whose coordinate system the mouse position is
     * converted to. This is usually the renderer for the particle system
     * created by the emitter.
     */
    get renderer(): Point;
    set renderer(value: Point);
    /**
     * The minimum distance for which the gravity force is calculated.
     * Particles closer than this distance experience the gravity as it they were
     * this distance away. This stops the gravity effect blowing up as distances get
     * small.
     */
    get epsilon(): number;
    set epsilon(value: number);
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
    update(emitter: Emitter, particle: Particle, time: number): void;
}
