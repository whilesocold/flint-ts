/**
 * The BoundingBox action confines each particle to a rectangle region. The
 * particle bounces back off the sides of the rectangle when it reaches
 * the edge. The bounce treats the particle as a circular body. By default,
 * no energy is lost in the collision. This can be modified by setting the
 * bounce property to a value other than 1, its default value.
 *
 * This action has a priority of -20, so that it executes after
 * all movement has occured.
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
import ParticleEvents from "../events/ParticleEvents";
import Action from "./Action";
var BoundingBox = /** @class */ (function (_super) {
    __extends(BoundingBox, _super);
    /**
     * The constructor creates a BoundingBox action for use by
     * an emitter. To add a BoundingBox to all particles created by an emitter,
     * use the emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     * @param bounce The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    function BoundingBox(left, top, right, bottom, bounce) {
        if (left === void 0) { left = 0; }
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (bounce === void 0) { bounce = 1; }
        var _this = _super.call(this) || this;
        _this.priority = -20;
        _this._left = left;
        _this._top = top;
        _this._right = right;
        _this._bottom = bottom;
        _this._bounce = bounce;
        return _this;
    }
    Object.defineProperty(BoundingBox.prototype, "left", {
        /**
         * The left coordinate of the bounding box.
         */
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "top", {
        /**
         * The top coordinate of the bounding box.
         */
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "right", {
        /**
         * The left coordinate of the bounding box.
         */
        get: function () {
            return this._right;
        },
        set: function (value) {
            this._right = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "bottom", {
        /**
         * The left coordinate of the bounding box.
         */
        get: function () {
            return this._bottom;
        },
        set: function (value) {
            this._bottom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "bounce", {
        /**
         * The coefficient of restitution when the particles bounce off the
         * sides of the box. A value of 1 gives a pure pure elastic collision, with no energy loss.
         * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
         * greater than 1 causes the particle to gain energy in the collision.
         */
        get: function () {
            return this._bounce;
        },
        set: function (value) {
            this._bounce = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Tests whether the particle is at the edge of the box and, if so,
     * adjusts its velocity to bounce in back towards the center of the
     * box.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     *
     * @see org.flintparticles.common.actions.Action#update()
     */
    BoundingBox.prototype.update = function (emitter, particle, time) {
        var p = particle;
        var radius = particle.collisionRadius;
        var collide = false;
        var position;
        if (p.velX > 0 && (position = p.x + radius) >= this._right) {
            p.velX = -p.velX * this._bounce;
            p.x += 2 * (this._right - position);
            collide = true;
        }
        else if (p.velX < 0 && (position = p.x - radius) <= this._left) {
            p.velX = -p.velX * this._bounce;
            p.x += 2 * (this._left - position);
            collide = true;
        }
        if (p.velY > 0 && (position = p.y + radius) >= this._bottom) {
            p.velY = -p.velY * this._bounce;
            p.y += 2 * (this._bottom - position);
            collide = true;
        }
        else if (p.velY < 0 && (position = p.y - radius) <= this._top) {
            p.velY = -p.velY * this._bounce;
            p.y += 2 * (this._top - position);
            collide = true;
        }
        if (collide &&
            emitter.hasEventListener(ParticleEvents.BOUNDING_BOX_COLLISION)) {
            var options = {
                detail: {
                    particle: particle,
                    action: this,
                },
            };
            emitter.dispatchEvent(new CustomEvent(ParticleEvents.BOUNDING_BOX_COLLISION, options));
        }
    };
    return BoundingBox;
}(Action));
export default BoundingBox;
//# sourceMappingURL=BoundingBox.js.map