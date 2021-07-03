import Particle from "../particles/Particle2D";
import { Point, Zone2D } from "./Zone2D";
export default class PointZone implements Zone2D {
    private _point;
    /**
     * The constructor defines a PointZone zone.
     *
     * @param point The point that is the zone.
     */
    constructor(point: Point);
    /**
     * The point that is the zone.
     */
    get point(): Point;
    set point(value: Point);
    /**
     * The x coordinate of the point that is the zone.
     */
    get x(): number;
    set x(value: number);
    /**
     * The y coordinate of the point that is the zone.
     */
    get y(): number;
    set y(value: number);
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x: number, y: number): boolean;
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation(): Point;
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea(): number;
    /**
     * Manages collisions between a particle and the zone. Particles will colide with the point defined
     * for this zone. The collisionRadius of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle: Particle, bounce?: number): boolean;
}
