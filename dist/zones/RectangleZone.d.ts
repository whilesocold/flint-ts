import Particle from "../particles/Particle2D";
import { Point, Zone2D } from "./Zone2D";
export default class RectangleZone implements Zone2D {
    private _left;
    private _top;
    private _right;
    private _bottom;
    private _width;
    private _height;
    /**
     * The constructor creates a RectangleZone zone.
     *
     * @param left The left coordinate of the rectangle defining the region of the zone.
     * @param top The top coordinate of the rectangle defining the region of the zone.
     * @param right The right coordinate of the rectangle defining the region of the zone.
     * @param bottom The bottom coordinate of the rectangle defining the region of the zone.
     */
    constructor(left?: number, top?: number, right?: number, bottom?: number);
    /**
     * The left coordinate of the rectangle defining the region of the zone.
     */
    get left(): number;
    set left(value: number);
    /**
     * The right coordinate of the rectangle defining the region of the zone.
     */
    get right(): number;
    set right(value: number);
    /**
     * The top coordinate of the rectangle defining the region of the zone.
     */
    get top(): number;
    set top(value: number);
    /**
     * The bottom coordinate of the rectangle defining the region of the zone.
     */
    get bottom(): number;
    set bottom(value: number);
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
     * Manages collisions between a particle and the zone. Particles will collide with the edges
     * of the rectangle defined for this zone, from inside or outside the zone. The collisionRadius
     * of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle: Particle, bounce?: number): boolean;
}
