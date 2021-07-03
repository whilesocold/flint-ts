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
/*
 * Для использования с ZonedAction
 */
var ActionCallback = /** @class */ (function (_super) {
    __extends(ActionCallback, _super);
    function ActionCallback(callBack, once) {
        if (once === void 0) { once = false; }
        var _this = _super.call(this) || this;
        _this._called = false;
        _this._callBack = callBack;
        _this._once = once;
        return _this;
    }
    ActionCallback.prototype.update = function (emitter, particle, time) {
        if (this._once && !this._called) {
            this._callBack();
        }
        else {
            this._callBack();
        }
        this._called = true;
    };
    return ActionCallback;
}(Action));
export default ActionCallback;
//# sourceMappingURL=ActionCallback.js.map