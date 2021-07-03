/*
 * FLINT PARTICLE SYSTEM
 * .....................
 *
 * Author: Richard Lord
 * Copyright (c) Richard Lord 2008-2011
 * http://flintparticles.org
 *
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import ZeroCounter from "../counters/ZeroCounter";
var Emitter = /** @class */ (function () {
    function Emitter() {
        this._counter = new ZeroCounter();
        this._actions = [];
        this._particles = [];
        this._maximumFrameTime = 0.1;
        this._running = false;
        this._eventTypes = {};
        this._eventDispatcher = document.createElement("div");
    }
    Emitter.prototype.addEventListener = function (type, callback) {
        this._eventTypes[type] = this._eventTypes[type]
            ? this._eventTypes[type] + 1
            : 1;
        this._eventDispatcher.addEventListener(type, callback);
    };
    Emitter.prototype.removeEventListener = function (type, callback) {
        this._eventTypes[type] =
            this._eventTypes[type] && this._eventTypes[type] > 1
                ? this._eventTypes[type] - 1
                : 0;
        this._eventDispatcher.removeEventListener(type, callback);
    };
    Emitter.prototype.hasEventListener = function (type) {
        return !!this._eventTypes[type];
    };
    Emitter.prototype.dispatchEvent = function (event) {
        this._eventDispatcher.dispatchEvent(event);
    };
    Object.defineProperty(Emitter.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        set: function (value) {
            this._counter = value;
            if (this._running) {
                this._counter.startEmitter(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emitter.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        set: function (value) {
            var _this = this;
            var _a;
            while (this._actions.length) {
                (_a = this._actions.pop()) === null || _a === void 0 ? void 0 : _a.removedFromEmitter(this);
            }
            this._actions = value.slice();
            this._actions.sort(this.prioritySort);
            this._actions.forEach(function (action) {
                action.addedToEmitter(_this);
            });
        },
        enumerable: false,
        configurable: true
    });
    Emitter.prototype.addAction = function (action) {
        var len = this._actions.length;
        var i = 0;
        for (i = 0; i < len; ++i) {
            if (this._actions[i].priority < action.priority) {
                break;
            }
        }
        this._actions.splice(i, 0, action);
        action.addedToEmitter(this);
    };
    /**
     * Removes an Action from the Emitter.
     *
     * @param action The Action to remove
     *
     * @see addAction()
     */
    Emitter.prototype.removeAction = function (action) {
        var index = this._actions.indexOf(action);
        if (index !== -1) {
            this._actions.splice(index, 1);
            action.removedFromEmitter(this);
        }
    };
    /**
     * Detects if the emitter is using a particular action or not.
     *
     * @param action The action to look for.
     *
     * @return true if the action is being used by the emitter, false
     * otherwise.
     */
    Emitter.prototype.hasAction = function (action) {
        return this._actions.indexOf(action) !== -1;
    };
    Object.defineProperty(Emitter.prototype, "particles", {
        get: function () {
            return this._particles;
        },
        set: function (value) {
            this.killAllParticles();
            this.addParticles(value);
        },
        enumerable: false,
        configurable: true
    });
    Emitter.prototype.addParticle = function (particle) {
        this._particles.push(particle);
    };
    Emitter.prototype.addParticles = function (particles) {
        var _a;
        (_a = this._particles).splice.apply(_a, __spreadArray([this._particles.length, 0], particles));
    };
    Emitter.prototype.removeParticle = function (particle) {
        var index = this._particles.indexOf(particle);
        if (index !== -1) {
            this._particles.splice(index, 1);
            return true;
        }
        return false;
    };
    Emitter.prototype.removeParticles = function (particles) {
        for (var i = 0; i < particles.length; i++) {
            this.removeParticle(particles[i]);
        }
    };
    Emitter.prototype.killAllParticles = function () {
        this._particles.splice(0);
    };
    Emitter.prototype.prioritySort = function (b1, b2) {
        return b1.priority - b2.priority;
    };
    Emitter.prototype.update = function (time) {
        if (time > this._maximumFrameTime) {
            time = this._maximumFrameTime;
        }
        // sortParticle2Ds();
        if (this._particles.length === 0) {
            return;
        }
        // update particle state
        for (var j = 0; j < this._actions.length; j++) {
            for (var i = 0; i < this._particles.length; i++) {
                this._actions[j].update(this, this._particles[i], time);
            }
        }
        // remove dead particles
        var length = this._particles.length;
        for (var i = length; i--;) {
            var particle = this._particles[i];
            if (particle.isDead) {
                this._particles.splice(i, 1);
            }
        }
    };
    return Emitter;
}());
export default Emitter;
//# sourceMappingURL=Emitter.js.map