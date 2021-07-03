var Action = /** @class */ (function () {
    function Action() {
        this._priority = 0;
    }
    Object.defineProperty(Action.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Action.prototype.removedFromEmitter = function (emitter) {
        // console.log('action removedFromEmitter')
    };
    Action.prototype.addedToEmitter = function (emitter) {
        // console.log('action addedToEmitter')
    };
    Action.prototype.update = function (emitter, particle, time) {
        // console.log('action update')
    };
    return Action;
}());
export default Action;
//# sourceMappingURL=Action.js.map