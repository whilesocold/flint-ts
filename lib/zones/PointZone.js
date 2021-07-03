"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PointZone {
    /**
     * The constructor defines a PointZone zone.
     *
     * @param point The point that is the zone.
     */
    constructor(point) {
        this._point = point;
    }
    /**
     * The point that is the zone.
     */
    get point() {
        return this._point;
    }
    set point(value) {
        this._point = value;
    }
    /**
     * The x coordinate of the point that is the zone.
     */
    get x() {
        return this._point.x;
    }
    set x(value) {
        this._point.x = value;
    }
    /**
     * The y coordinate of the point that is the zone.
     */
    get y() {
        return this._point.y;
    }
    set y(value) {
        this._point.y = value;
    }
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        return this._point.x === x && this._point.y === y;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        return { x: this._point.x, y: this._point.y };
    }
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea() {
        // treat as one pixel square
        return 1;
    }
    /**
     * Manages collisions between a particle and the zone. Particles will colide with the point defined
     * for this zone. The collisionRadius of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        const relativePreviousX = particle.previousX - this._point.x;
        const relativePreviousY = particle.previousY - this._point.y;
        let dot = relativePreviousX * particle.velX + relativePreviousY * particle.velY;
        if (dot >= 0) {
            // console.log('collide false')
            return false;
        }
        const relativeX = particle.x - this._point.x;
        const relativeY = particle.y - this._point.y;
        const radius = particle.collisionRadius;
        dot = relativeX * particle.velX + relativeY * particle.velY;
        if (dot <= 0) {
            if (relativeX > radius || relativeX < -radius) {
                return false;
            }
            if (relativeY > radius || relativeY < -radius) {
                return false;
            }
            if (relativeX * relativeX + relativeY * relativeY > radius * radius) {
                return false;
            }
        }
        let frameVelX = relativeX - relativePreviousX;
        let frameVelY = relativeY - relativePreviousY;
        const a = frameVelX * frameVelX + frameVelY * frameVelY;
        const b = 2 * (relativePreviousX * frameVelX + relativePreviousY * frameVelY);
        const c = relativePreviousX * relativePreviousX +
            relativePreviousY * relativePreviousY -
            radius * radius;
        const sq = b * b - 4 * a * c;
        if (sq < 0) {
            return false;
        }
        const srt = Math.sqrt(sq);
        const t1 = (-b + srt) / (2 * a);
        const t2 = (-b - srt) / (2 * a);
        const t = [];
        if (t1 > 0 && t1 <= 1) {
            t.push(t1);
        }
        if (t2 > 0 && t2 <= 1) {
            t.push(t2);
        }
        let time = 0;
        if (t.length === 0) {
            return false;
        }
        if (t.length === 1) {
            time = t[0];
        }
        else {
            time = Math.min(t1, t2);
        }
        const cx = relativePreviousX + time * frameVelX + this._point.x;
        const cy = relativePreviousY + time * frameVelY + this._point.y;
        let nx = cx - this._point.x;
        let ny = cy - this._point.y;
        const d = Math.sqrt(nx * nx + ny * ny);
        nx /= d;
        ny /= d;
        const n = frameVelX * nx + frameVelY * ny;
        frameVelX -= 2 * nx * n;
        frameVelY -= 2 * ny * n;
        particle.x = cx + (1 - time) * frameVelX;
        particle.y = cy + (1 - time) * frameVelY;
        const normalVel = particle.velX * nx + particle.velY * ny;
        particle.velX -= (1 + bounce) * nx * normalVel;
        particle.velY -= (1 + bounce) * ny * normalVel;
        return true;
    }
}
exports.default = PointZone;
//# sourceMappingURL=PointZone.js.map