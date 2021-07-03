"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class Move extends Action_1.default {
    constructor() {
        super();
        this.priority = -10;
    }
    /**
     * Updates the particle's position based on its velocity and the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     *
     * @see org.flintparticles.common.actions.Action#update()
     */
    update(emitter, particle, time) {
        particle.previousX = particle.x;
        particle.previousY = particle.y;
        particle.x += particle.velX * time;
        particle.y += particle.velY * time;
    }
}
exports.default = Move;
//# sourceMappingURL=Move.js.map