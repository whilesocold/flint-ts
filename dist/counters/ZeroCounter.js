"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZeroCounter = /** @class */ (function () {
    function ZeroCounter() {
    }
    /**
     * Returns 0 to indicate that the emitter should emit no particles when it
     * starts.
     *
     * <p>This method is called within the emitter's start method
     * and need not be called by the user.</p>
     *
     * @param emitter The emitter.
     * @return 0
     *
     * @see org.flintparticles.common.counters.Counter#startEmitter()
     */
    ZeroCounter.prototype.startEmitter = function (emitter) {
        return 0;
    };
    /**
     * Returns 0 to indicate that the emitter should emit no particles.
     *
     * <p>This method is called within the emitter's update loop and need not
     * be called by the user.</p>
     *
     * @param emitter The emitter.
     * @param time The time, in seconds, since the previous call to this method.
     * @return 0
     *
     * @see org.flintparticles.common.counters.Counter#updateEmitter()
     */
    ZeroCounter.prototype.updateEmitter = function (emitter, time) {
        return 0;
    };
    /**
     * Does nothing
     */
    ZeroCounter.prototype.stop = function () {
        return;
    };
    /**
     * Does nothing
     */
    ZeroCounter.prototype.resume = function () {
        return;
    };
    Object.defineProperty(ZeroCounter.prototype, "complete", {
        /**
         * Indicates if the counter has emitted all its particles. For the ZeroCounter
         * this will always be true.
         */
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroCounter.prototype, "running", {
        /**
         * Indicates if the counter is currently emitting particles
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroCounter;
}());
exports.default = ZeroCounter;
