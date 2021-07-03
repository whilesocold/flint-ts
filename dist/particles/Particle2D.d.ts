import Particle from "./Particle";
export default class Particle2D extends Particle {
    x: number;
    y: number;
    previousX: number;
    previousY: number;
    velX: number;
    velY: number;
    rotation: number;
    angVelocity: number;
    /**
     * The position in the emitter's horizontal spacial sorted array
     */
    sortID: number;
    private _previousMass;
    private _previousRadius;
    private _inertia;
    /**
     * The moment of inertia of the particle about its center point
     */
    get inertia(): number;
}
