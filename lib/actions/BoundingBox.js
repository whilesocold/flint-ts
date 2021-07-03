"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParticleEvents_1 = __importDefault(require("../events/ParticleEvents"));
const Action_1 = __importDefault(require("./Action"));
class BoundingBox extends Action_1.default {
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
    constructor(left = 0, top = 0, right = 0, bottom = 0, bounce = 1) {
        super();
        this.priority = -20;
        this._left = left;
        this._top = top;
        this._right = right;
        this._bottom = bottom;
        this._bounce = bounce;
    }
    /**
     * The left coordinate of the bounding box.
     */
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    /**
     * The top coordinate of the bounding box.
     */
    get top() {
        return this._top;
    }
    set top(value) {
        this._top = value;
    }
    /**
     * The left coordinate of the bounding box.
     */
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    /**
     * The left coordinate of the bounding box.
     */
    get bottom() {
        return this._bottom;
    }
    set bottom(value) {
        this._bottom = value;
    }
    /**
     * The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    get bounce() {
        return this._bounce;
    }
    set bounce(value) {
        this._bounce = value;
    }
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
    update(emitter, particle, time) {
        const p = particle;
        const radius = particle.collisionRadius;
        let collide = false;
        let position;
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
            emitter.hasEventListener(ParticleEvents_1.default.BOUNDING_BOX_COLLISION)) {
            const options = {
                detail: {
                    particle: particle,
                    action: this,
                },
            };
            emitter.dispatchEvent(new CustomEvent(ParticleEvents_1.default.BOUNDING_BOX_COLLISION, options));
        }
    }
}
exports.default = BoundingBox;
//# sourceMappingURL=BoundingBox.js.map