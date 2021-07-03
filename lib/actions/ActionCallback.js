"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __importDefault(require("./Action"));
/*
 * Для использования с ZonedAction
 */
class ActionCallback extends Action_1.default {
    constructor(callBack, once = false) {
        super();
        this._called = false;
        this._callBack = callBack;
        this._once = once;
    }
    update(emitter, particle, time) {
        if (this._once && !this._called) {
            this._callBack();
        }
        else {
            this._callBack();
        }
        this._called = true;
    }
}
exports.default = ActionCallback;
//# sourceMappingURL=ActionCallback.js.map