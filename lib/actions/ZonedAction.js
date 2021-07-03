/**
 * The ZonedAction Action applies an action to the particle only if it is in
 * the specified zone.
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
import Action from "./Action";
var ZonedAction = /** @class */ (function (_super) {
    __extends(ZonedAction, _super);
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
    function ZonedAction(action, zone, invertZone) {
        if (invertZone === void 0) { invertZone = false; }
        var _this = _super.call(this) || this;
        _this._action = action;
        _this._zone = zone;
        _this._invert = invertZone;
        return _this;
    }
    Object.defineProperty(ZonedAction.prototype, "action", {
        /**
         * The action to apply when inside the zone.
         */
        get: function () {
            return this._action;
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonedAction.prototype, "zone", {
        /**
         * The zone in which to apply the acceleration.
         */
        get: function () {
            return this._zone;
        },
        set: function (value) {
            this._zone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonedAction.prototype, "invertZone", {
        /**
         * If false (the default), the action is applied only to particles inside
         * the zone. If true, the action is applied only to particles outside the zone.
         */
        get: function () {
            return this._invert;
        },
        set: function (value) {
            this._invert = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZonedAction.prototype, "priority", {
        /**
         * Provides acces to the priority of the action being used.
         *
         * @see org.flintparticles.common.actions.Action#getDefaultPriority()
         */
        get: function () {
            return this._action.priority;
        },
        set: function (value) {
            this._action.priority = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calls the addedToEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#addedToEmitter()
     */
    ZonedAction.prototype.addedToEmitter = function (emitter) {
        this._action.addedToEmitter(emitter);
    };
    /**
     * Calls the removedFromEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#removedFromEmitter()
     */
    ZonedAction.prototype.removedFromEmitter = function (emitter) {
        this._action.removedFromEmitter(emitter);
    };
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
    ZonedAction.prototype.update = function (emitter, particle, time) {
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
    };
    return ZonedAction;
}(Action));
export default ZonedAction;
//# sourceMappingURL=ZonedAction.js.map