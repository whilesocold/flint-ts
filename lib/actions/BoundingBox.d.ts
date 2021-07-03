/**
 * The BoundingBox action confines each particle to a rectangle region. The
 * particle bounces back off the sides of the rectangle when it reaches
 * the edge. The bounce treats the particle as a circular body. By default,
 * no energy is lost in the collision. This can be modified by setting the
 * bounce property to a value other than 1, its default value.
 *
 * This action has a priority of -20, so that it executes after
 * all movement has occured.
 */
import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import Action from "./Action";
export default class BoundingBox extends Action {
    private _left;
    private _top;
    private _right;
    private _bottom;
    private _bounce;
    /**
     * The constructor creates a BoundingBox action for use by
     * an emitter. To add a BoundingBox to all particles created by an emitter,
     * use the emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     * @param bounce The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    constructor(left?: number, top?: number, right?: number, bottom?: number, bounce?: number);
    /**
     * The left coordinate of the bounding box.
     */
    get left(): number;
    set left(value: number);
    /**
     * The top coordinate of the bounding box.
     */
    get top(): number;
    set top(value: number);
    /**
     * The left coordinate of the bounding box.
     */
    get right(): number;
    set right(value: number);
    /**
     * The left coordinate of the bounding box.
     */
    get bottom(): number;
    set bottom(value: number);
    /**
     * The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    get bounce(): number;
    set bounce(value: number);
    /**
     * Tests whether the particle is at the edge of the box and, if so,
     * adjusts its velocity to bounce in back towards the center of the
     * box.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     *
     * @see org.flintparticles.common.actions.Action#update()
     */
    update(emitter: Emitter, particle: Particle, time: number): void;
}
