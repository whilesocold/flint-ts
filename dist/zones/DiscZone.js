"use strict";
/**
 * The DiscZone zone defines a circular zone. The zone may
 * have a hole in the middle, like a doughnut.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CircleZone_1 = __importDefault(require("./CircleZone"));
var DiscZone = /** @class */ (function (_super) {
    __extends(DiscZone, _super);
    /**
     * The constructor defines a DiscZone zone.
     *
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all
     * points inside the outer radius are included in the zone.
     */
    function DiscZone(center, outerRadius, innerRadius) {
        if (outerRadius === void 0) { outerRadius = 0; }
        if (innerRadius === void 0) { innerRadius = 0; }
        var _this = _super.call(this, center, outerRadius) || this;
        if (outerRadius < innerRadius) {
            throw new Error("The outerRadius (" +
                outerRadius +
                ") can't be smaller than the innerRadius (" +
                innerRadius +
                ") in your DiscZone. N.B. the outerRadius is the second argument in the constructor and the innerRadius is the third argument.");
        }
        _this._innerRadius = innerRadius;
        _this._innerSq = _this._innerRadius * _this._innerRadius;
        return _this;
    }
    Object.defineProperty(DiscZone.prototype, "innerRadius", {
        /**
         * The radius of the inner edge of the disc.
         */
        get: function () {
            return this._innerRadius;
        },
        set: function (value) {
            this._innerRadius = value;
            this._innerSq = this._innerRadius * this._innerRadius;
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
    DiscZone.prototype.contains = function (x, y) {
        x -= this._center.x;
        y -= this._center.y;
        var distSq = x * x + y * y;
        return distSq <= this._outerSq && distSq >= this._innerSq;
    };
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    DiscZone.prototype.getLocation = function () {
        var rand = Math.random();
        var point = this.getPolar(this._innerRadius +
            (1 - rand * rand) * (this._outerRadius - this._innerRadius), Math.random() * DiscZone.TWOPI);
        point.x += this._center.x;
        point.y += this._center.y;
        return point;
    };
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    DiscZone.prototype.getArea = function () {
        return Math.PI * (this._outerSq - this._innerSq);
    };
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
    DiscZone.prototype.collideParticle = function (particle, bounce) {
        if (bounce === void 0) { bounce = 1; }
        var outerLimit;
        var innerLimit;
        var outerLimitSq;
        var innerLimitSq;
        var distanceSq;
        var distance;
        var pdx;
        var pdy;
        var pDistanceSq;
        var adjustSpeed;
        var positionRatio;
        var epsilon = 0.001;
        var dx = particle.x - this._center.x;
        var dy = particle.y - this._center.y;
        var dotProduct = particle.velX * dx + particle.velY * dy;
        if (dotProduct < 0) {
            // moving towards center
            outerLimit = this._outerRadius + particle.collisionRadius;
            if (Math.abs(dx) > outerLimit)
                return false;
            if (Math.abs(dy) > outerLimit)
                return false;
            distanceSq = dx * dx + dy * dy;
            outerLimitSq = outerLimit * outerLimit;
            if (distanceSq > outerLimitSq)
                return false;
            // Particle is inside outer circle
            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            pDistanceSq = pdx * pdx + pdy * pdy;
            if (pDistanceSq > outerLimitSq) {
                // particle was outside outer circle
                adjustSpeed = ((1 + bounce) * dotProduct) / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance + epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }
            if (this._innerRadius !== 0 && this.innerRadius !== this._outerRadius) {
                innerLimit = this._innerRadius + particle.collisionRadius;
                if (Math.abs(dx) > innerLimit)
                    return false;
                if (Math.abs(dy) > innerLimit)
                    return false;
                innerLimitSq = innerLimit * innerLimit;
                if (distanceSq > innerLimitSq)
                    return false;
                // Particle is inside inner circle
                if (pDistanceSq > innerLimitSq) {
                    // particle was outside inner circle
                    adjustSpeed = ((1 + bounce) * dotProduct) / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance + epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }
            return false;
        } // moving away from center
        else {
            outerLimit = this._outerRadius - particle.collisionRadius;
            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            if (Math.abs(pdx) > outerLimit)
                return false;
            if (Math.abs(pdy) > outerLimit)
                return false;
            pDistanceSq = pdx * pdx + pdy * pdy;
            outerLimitSq = outerLimit * outerLimit;
            if (pDistanceSq > outerLimitSq)
                return false;
            // particle was inside outer circle
            distanceSq = dx * dx + dy * dy;
            if (this._innerRadius !== 0 && this.innerRadius !== this._outerRadius) {
                innerLimit = this._innerRadius - particle.collisionRadius;
                innerLimitSq = innerLimit * innerLimit;
                if (pDistanceSq < innerLimitSq && distanceSq >= innerLimitSq) {
                    // particle was inside inner circle and is outside it
                    adjustSpeed = ((1 + bounce) * dotProduct) / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance - epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }
            if (distanceSq >= outerLimitSq) {
                // Particle is inside outer circle
                adjustSpeed = ((1 + bounce) * dotProduct) / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance - epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }
            return false;
        }
    };
    return DiscZone;
}(CircleZone_1.default));
exports.default = DiscZone;
