"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Action {
    constructor() {
        this._priority = 0;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    removedFromEmitter(emitter) {
        // console.log('action removedFromEmitter')
    }
    addedToEmitter(emitter) {
        // console.log('action addedToEmitter')
    }
    update(emitter, particle, time) {
        // console.log('action update')
    }
}
exports.default = Action;
//# sourceMappingURL=Action.js.map