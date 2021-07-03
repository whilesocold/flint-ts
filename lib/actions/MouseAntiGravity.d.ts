import { Point } from "../zones/Zone2D";
import MouseGravity from "./MouseGravity";
export default class MouseAntiGravity extends MouseGravity {
    /**
     * The constructor creates a MouseAntiGravity action for use by an emitter.
     * To add a MouseAntiGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the anti-gravity force - larger numbers produce a
     * stronger force.
     * @param renderer The display object whose coordinate system the mouse
     * position is converted to. This is usually the renderer for the particle
     * system created by the emitter.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing up
     * as distances get small.
     */
    constructor(power: number, renderer: Point, epsilon?: number);
    /**
     * The strength of the anti-gravity force.
     */
    get power(): number;
    set power(value: number);
}
