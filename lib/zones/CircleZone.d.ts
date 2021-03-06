/**
 * The CircleZone zone defines a circular zone. The zone may
 * have a hole in the middle, like a doughnut.
 */
import Particle2D from "../particles/Particle2D";
import { Point, Zone2D } from "./Zone2D";
export default class CircleZone implements Zone2D {
    protected _center: Point;
    protected _outerRadius: number;
    protected _outerSq: number;
    protected static TWOPI: number;
    /**
     * The constructor defines a CircleZone zone.
     *
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all
     * points inside the outer radius are included in the zone.
     */
    constructor(center: Point, outerRadius?: number);
    /**
     * The centre of the disc.
     */
    get center(): Point;
    set center(value: Point);
    /**
     * The x coordinate of the point that is the center of the disc.
     */
    get centerX(): number;
    set centerX(value: number);
    /**
     * The y coordinate of the point that is the center of the disc.
     */
    get centerY(): number;
    set centerY(value: number);
    /**
     * The radius of the outer edge of the disc.
     */
    get outerRadius(): number;
    set outerRadius(value: number);
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
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the disc defined for this zone, from inside or outside the disc.  The collisionRadius of the
     * particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle: Particle2D, bounce?: number): boolean;
    protected getPolar(r: number, theta: number): Point;
}
