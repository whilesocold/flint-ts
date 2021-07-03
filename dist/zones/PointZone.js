"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointZone = /** @class */ (function () {
    /**
     * The constructor defines a PointZone zone.
     *
     * @param point The point that is the zone.
     */
    function PointZone(point) {
        this._point = point;
    }
    Object.defineProperty(PointZone.prototype, "point", {
        /**
         * The point that is the zone.
         */
        get: function () {
            return this._point;
        },
        set: function (value) {
            this._point = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointZone.prototype, "x", {
        /**
         * The x coordinate of the point that is the zone.
         */
        get: function () {
            return this._point.x;
        },
        set: function (value) {
            this._point.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointZone.prototype, "y", {
        /**
         * The y coordinate of the point that is the zone.
         */
        get: function () {
            return this._point.y;
        },
        set: function (value) {
            this._point.y = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    PointZone.prototype.contains = function (x, y) {
        return this._point.x === x && this._point.y === y;
    };
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    PointZone.prototype.getLocation = function () {
        return { x: this._point.x, y: this._point.y };
    };
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    PointZone.prototype.getArea = function () {
        // treat as one pixel square
        return 1;
    };
    /**
     * Manages collisions between a particle and the zone. Particles will colide with the point defined
     * for this zone. The collisionRadius of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    PointZone.prototype.collideParticle = function (particle, bounce) {
        if (bounce === void 0) { bounce = 1; }
        var relativePreviousX = particle.previousX - this._point.x;
        var relativePreviousY = particle.previousY - this._point.y;
        var dot = relativePreviousX * particle.velX + relativePreviousY * particle.velY;
        if (dot >= 0) {
            // console.log('collide false')
            return false;
        }
        var relativeX = particle.x - this._point.x;
        var relativeY = particle.y - this._point.y;
        var radius = particle.collisionRadius;
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
        var frameVelX = relativeX - relativePreviousX;
        var frameVelY = relativeY - relativePreviousY;
        var a = frameVelX * frameVelX + frameVelY * frameVelY;
        var b = 2 * (relativePreviousX * frameVelX + relativePreviousY * frameVelY);
        var c = relativePreviousX * relativePreviousX +
            relativePreviousY * relativePreviousY -
            radius * radius;
        var sq = b * b - 4 * a * c;
        if (sq < 0) {
            return false;
        }
        var srt = Math.sqrt(sq);
        var t1 = (-b + srt) / (2 * a);
        var t2 = (-b - srt) / (2 * a);
        var t = [];
        if (t1 > 0 && t1 <= 1) {
            t.push(t1);
        }
        if (t2 > 0 && t2 <= 1) {
            t.push(t2);
        }
        var time = 0;
        if (t.length === 0) {
            return false;
        }
        if (t.length === 1) {
            time = t[0];
        }
        else {
            time = Math.min(t1, t2);
        }
        var cx = relativePreviousX + time * frameVelX + this._point.x;
        var cy = relativePreviousY + time * frameVelY + this._point.y;
        var nx = cx - this._point.x;
        var ny = cy - this._point.y;
        var d = Math.sqrt(nx * nx + ny * ny);
        nx /= d;
        ny /= d;
        var n = frameVelX * nx + frameVelY * ny;
        frameVelX -= 2 * nx * n;
        frameVelY -= 2 * ny * n;
        particle.x = cx + (1 - time) * frameVelX;
        particle.y = cy + (1 - time) * frameVelY;
        var normalVel = particle.velX * nx + particle.velY * ny;
        particle.velX -= (1 + bounce) * nx * normalVel;
        particle.velY -= (1 + bounce) * ny * normalVel;
        return true;
    };
    return PointZone;
}());
exports.default = PointZone;
