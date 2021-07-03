"use strict";
/*
 * FLINT PARTICLE SYSTEM
 * .....................
 *
 * Author: Richard Lord
 * Copyright (c) Richard Lord 2008-2011
 * http://flintparticles.org
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZeroCounter_1 = __importDefault(require("../counters/ZeroCounter"));
class Emitter {
    constructor() {
        this._counter = new ZeroCounter_1.default();
        this._actions = [];
        this._particles = [];
        this._maximumFrameTime = 0.1;
        this._running = false;
        this._eventTypes = {};
        this._eventDispatcher = document.createElement("div");
    }
    addEventListener(type, callback) {
        this._eventTypes[type] = this._eventTypes[type]
            ? this._eventTypes[type] + 1
            : 1;
        this._eventDispatcher.addEventListener(type, callback);
    }
    removeEventListener(type, callback) {
        this._eventTypes[type] =
            this._eventTypes[type] && this._eventTypes[type] > 1
                ? this._eventTypes[type] - 1
                : 0;
        this._eventDispatcher.removeEventListener(type, callback);
    }
    hasEventListener(type) {
        return !!this._eventTypes[type];
    }
    dispatchEvent(event) {
        this._eventDispatcher.dispatchEvent(event);
    }
    get counter() {
        return this._counter;
    }
    set counter(value) {
        this._counter = value;
        if (this._running) {
            this._counter.startEmitter(this);
        }
    }
    get actions() {
        return this._actions;
    }
    set actions(value) {
        var _a;
        while (this._actions.length) {
            (_a = this._actions.pop()) === null || _a === void 0 ? void 0 : _a.removedFromEmitter(this);
        }
        this._actions = value.slice();
        this._actions.sort(this.prioritySort);
        this._actions.forEach((action) => {
            action.addedToEmitter(this);
        });
    }
    addAction(action) {
        const len = this._actions.length;
        let i = 0;
        for (i = 0; i < len; ++i) {
            if (this._actions[i].priority < action.priority) {
                break;
            }
        }
        this._actions.splice(i, 0, action);
        action.addedToEmitter(this);
    }
    /**
     * Removes an Action from the Emitter.
     *
     * @param action The Action to remove
     *
     * @see addAction()
     */
    removeAction(action) {
        const index = this._actions.indexOf(action);
        if (index !== -1) {
            this._actions.splice(index, 1);
            action.removedFromEmitter(this);
        }
    }
    /**
     * Detects if the emitter is using a particular action or not.
     *
     * @param action The action to look for.
     *
     * @return true if the action is being used by the emitter, false
     * otherwise.
     */
    hasAction(action) {
        return this._actions.indexOf(action) !== -1;
    }
    get particles() {
        return this._particles;
    }
    set particles(value) {
        this.killAllParticles();
        this.addParticles(value);
    }
    addParticle(particle) {
        this._particles.push(particle);
    }
    addParticles(particles) {
        this._particles.splice(this._particles.length, 0, ...particles);
    }
    removeParticle(particle) {
        const index = this._particles.indexOf(particle);
        if (index !== -1) {
            this._particles.splice(index, 1);
            return true;
        }
        return false;
    }
    removeParticles(particles) {
        for (let i = 0; i < particles.length; i++) {
            this.removeParticle(particles[i]);
        }
    }
    killAllParticles() {
        this._particles.splice(0);
    }
    prioritySort(b1, b2) {
        return b1.priority - b2.priority;
    }
    update(time) {
        if (time > this._maximumFrameTime) {
            time = this._maximumFrameTime;
        }
        // sortParticle2Ds();
        if (this._particles.length === 0) {
            return;
        }
        // update particle state
        for (let j = 0; j < this._actions.length; j++) {
            for (let i = 0; i < this._particles.length; i++) {
                this._actions[j].update(this, this._particles[i], time);
            }
        }
        // remove dead particles
        const length = this._particles.length;
        for (let i = length; i--;) {
            const particle = this._particles[i];
            if (particle.isDead) {
                this._particles.splice(i, 1);
            }
        }
    }
}
exports.default = Emitter;
//# sourceMappingURL=Emitter.js.map