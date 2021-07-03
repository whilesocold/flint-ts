"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Particle_1 = __importDefault(require("./Particle"));
class Particle2D extends Particle_1.default {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.velX = 0;
        this.velY = 0;
        this.rotation = 0;
        this.angVelocity = 0;
        /**
         * The position in the emitter's horizontal spacial sorted array
         */
        this.sortID = -1;
        this._previousMass = 0;
        this._previousRadius = 0;
        this._inertia = 0;
    }
    /**
     * The moment of inertia of the particle about its center point
     */
    get inertia() {
        if (this.mass !== this._previousMass ||
            this.collisionRadius !== this._previousRadius) {
            this._inertia =
                this.mass * this.collisionRadius * this.collisionRadius * 0.5;
            this._previousMass = this.mass;
            this._previousRadius = this.collisionRadius;
        }
        return this._inertia;
    }
}
exports.default = Particle2D;
//# sourceMappingURL=Particle2D.js.map