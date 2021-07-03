"use strict";
/**
 * The ZonedAction Action applies an action to the particle only if it is in
 * the specified zone.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
class ZonedAction extends Action_1.default {
    /**
     * The constructor creates a ZonedAction action for use by an emitter.
     * To add a ZonedAction to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.emitters.Emitter#addAction()
     *
     * @param action The action to apply when inside the zone.
     * @param zone The zone in which to apply the action.
     * @param invertZone If false (the default) the action is applied only to
     * particles inside the zone. If true the action is applied only to
     * particles outside the zone.
     */
    constructor(action, zone, invertZone = false) {
        super();
        this._action = action;
        this._zone = zone;
        this._invert = invertZone;
    }
    /**
     * The action to apply when inside the zone.
     */
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    /**
     * The zone in which to apply the acceleration.
     */
    get zone() {
        return this._zone;
    }
    set zone(value) {
        this._zone = value;
    }
    /**
     * If false (the default), the action is applied only to particles inside
     * the zone. If true, the action is applied only to particles outside the zone.
     */
    get invertZone() {
        return this._invert;
    }
    set invertZone(value) {
        this._invert = value;
    }
    /**
     * Provides acces to the priority of the action being used.
     *
     * @see org.flintparticles.common.actions.Action#getDefaultPriority()
     */
    get priority() {
        return this._action.priority;
    }
    set priority(value) {
        this._action.priority = value;
    }
    /**
     * Calls the addedToEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#addedToEmitter()
     */
    addedToEmitter(emitter) {
        this._action.addedToEmitter(emitter);
    }
    /**
     * Calls the removedFromEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#removedFromEmitter()
     */
    removedFromEmitter(emitter) {
        this._action.removedFromEmitter(emitter);
    }
    /**
     * Checks if the particle is in the zone and if so calls the update
     * method of the action being used.
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
        if (this._zone.contains(particle.x, particle.y)) {
            if (!this._invert) {
                this._action.update(emitter, particle, time);
            }
        }
        else {
            if (this._invert) {
                this._action.update(emitter, particle, time);
            }
        }
    }
}
exports.default = ZonedAction;
//# sourceMappingURL=ZonedAction.js.map