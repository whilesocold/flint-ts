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
import MouseGravity from "./MouseGravity";
var MouseAntiGravity = /** @class */ (function (_super) {
    __extends(MouseAntiGravity, _super);
    /**
     * The constructor creates a MouseAntiGravity action for use by an emitter.
     * To add a MouseAntiGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @see org.flintparticles.common.emitters.Emitter#addAction()
     *
     * @param power The strength of the anti-gravity force - larger numbers produce a
     * stronger force.
     * @param renderer The display object whose coordinate system the mouse
     * position is converted to. This is usually the renderer for the particle
     * system created by the emitter.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing up
     * as distances get small.
     */
    function MouseAntiGravity(power, renderer, epsilon) {
        if (power === void 0) { power = 0; }
        if (epsilon === void 0) { epsilon = 1; }
        return _super.call(this, power, renderer, epsilon) || this;
    }
    Object.defineProperty(MouseAntiGravity.prototype, "power", {
        /**
         * The strength of the anti-gravity force.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: function () {
            return -this._power;
        },
        set: function (value) {
            this._power = -value;
        },
        enumerable: false,
        configurable: true
    });
    return MouseAntiGravity;
}(MouseGravity));
export default MouseAntiGravity;
//# sourceMappingURL=MouseAntiGravity.js.map