import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import { Zone2D } from "../zones/Zone2D";
import Action from "./Action";
export default class CollisionZone extends Action {
    private _bounce;
    private _zone;
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
    constructor(zone: Zone2D, bounce?: number);
    /**
     * The zone that the particles should collide with.
     */
    get zone(): Zone2D;
    set zone(value: Zone2D);
    /**
     * The coefficient of restitution when the particles collide. A value of
     * 1 gives a pure elastic collision, with no energy loss. A value
     * between 0 and 1 causes the particles to loose enegy in the collision.
     * A value greater than 1 causes the particles to gain energy in the collision.
     */
    get bounce(): number;
    set bounce(value: number);
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
    update(emitter: Emitter, particle: Particle, time: number): void;
}
