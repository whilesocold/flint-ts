"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RectangleZone = /** @class */ (function () {
    /**
     * The constructor creates a RectangleZone zone.
     *
     * @param left The left coordinate of the rectangle defining the region of the zone.
     * @param top The top coordinate of the rectangle defining the region of the zone.
     * @param right The right coordinate of the rectangle defining the region of the zone.
     * @param bottom The bottom coordinate of the rectangle defining the region of the zone.
     */
    function RectangleZone(left, top, right, bottom) {
        if (left === void 0) { left = 0; }
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        this._left = left;
        this._top = top;
        this._right = right;
        this._bottom = bottom;
        this._width = right - left;
        this._height = bottom - top;
    }
    Object.defineProperty(RectangleZone.prototype, "left", {
        /**
         * The left coordinate of the rectangle defining the region of the zone.
         */
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
            if (!isNaN(this._right) && !isNaN(this._left)) {
                this._width = this.right - this.left;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RectangleZone.prototype, "right", {
        /**
         * The right coordinate of the rectangle defining the region of the zone.
         */
        get: function () {
            return this._right;
        },
        set: function (value) {
            this._right = value;
            if (!isNaN(this._right) && !isNaN(this._left)) {
                this._width = this.right - this.left;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RectangleZone.prototype, "top", {
        /**
         * The top coordinate of the rectangle defining the region of the zone.
         */
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
            if (!isNaN(this._top) && !isNaN(this._bottom)) {
                this._height = this.bottom - this.top;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RectangleZone.prototype, "bottom", {
        /**
         * The bottom coordinate of the rectangle defining the region of the zone.
         */
        get: function () {
            return this._bottom;
        },
        set: function (value) {
            this._bottom = value;
            if (!isNaN(this._top) && !isNaN(this._bottom)) {
                this._height = this.bottom - this.top;
            }
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
    RectangleZone.prototype.contains = function (x, y) {
        return (x >= this._left && x <= this._right && y >= this._top && y <= this._bottom);
    };
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    RectangleZone.prototype.getLocation = function () {
        return {
            x: this._left + Math.random() * this._width,
            y: this._top + Math.random() * this._height,
        };
    };
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    RectangleZone.prototype.getArea = function () {
        return this._width * this._height;
    };
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
    RectangleZone.prototype.collideParticle = function (particle, bounce) {
        if (bounce === void 0) { bounce = 1; }
        var position;
        var previousPosition;
        var intersect;
        var collision = false;
        if (particle.velX > 0) {
            position = particle.x + particle.collisionRadius;
            previousPosition = particle.previousX + particle.collisionRadius;
            if (previousPosition < this._left && position >= this._left) {
                intersect =
                    particle.previousY +
                        ((particle.y - particle.previousY) *
                            (this._left - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius &&
                    intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._left - position);
                    collision = true;
                }
            }
            else if (previousPosition <= this._right && position > this._right) {
                intersect =
                    particle.previousY +
                        ((particle.y - particle.previousY) *
                            (this._right - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius &&
                    intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._right - position);
                    collision = true;
                }
            }
        }
        else if (particle.velX < 0) {
            position = particle.x - particle.collisionRadius;
            previousPosition = particle.previousX - particle.collisionRadius;
            if (previousPosition > this._right && position <= this._right) {
                intersect =
                    particle.previousY +
                        ((particle.y - particle.previousY) *
                            (this._right - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius &&
                    intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._right - position);
                    collision = true;
                }
            }
            else if (previousPosition >= this._left && position < this._left) {
                intersect =
                    particle.previousY +
                        ((particle.y - particle.previousY) *
                            (this._left - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius &&
                    intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._left - position);
                    collision = true;
                }
            }
        }
        if (particle.velY > 0) {
            position = particle.y + particle.collisionRadius;
            previousPosition = particle.previousY + particle.collisionRadius;
            if (previousPosition < this._top && position >= this._top) {
                intersect =
                    particle.previousX +
                        ((particle.x - particle.previousX) * (this._top - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius &&
                    intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._top - position);
                    collision = true;
                }
            }
            else if (previousPosition <= this._bottom && position > this._bottom) {
                intersect =
                    particle.previousX +
                        ((particle.x - particle.previousX) *
                            (this._bottom - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius &&
                    intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._bottom - position);
                    collision = true;
                }
            }
        }
        else if (particle.velY < 0) {
            position = particle.y - particle.collisionRadius;
            previousPosition = particle.previousY - particle.collisionRadius;
            if (previousPosition > this._bottom && position <= this._bottom) {
                intersect =
                    particle.previousX +
                        ((particle.x - particle.previousX) *
                            (this._bottom - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius &&
                    intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._bottom - position);
                    collision = true;
                }
            }
            else if (previousPosition >= this._top && position < this._top) {
                intersect =
                    particle.previousX +
                        ((particle.x - particle.previousX) * (this._top - previousPosition)) /
                            (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius &&
                    intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._top - position);
                    collision = true;
                }
            }
        }
        return collision;
    };
    return RectangleZone;
}());
exports.default = RectangleZone;
