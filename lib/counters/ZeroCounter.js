"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZeroCounter {
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
    startEmitter(emitter) {
        return 0;
    }
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
    updateEmitter(emitter, time) {
        return 0;
    }
    /**
     * Does nothing
     */
    stop() {
        return;
    }
    /**
     * Does nothing
     */
    resume() {
        return;
    }
    /**
     * Indicates if the counter has emitted all its particles. For the ZeroCounter
     * this will always be true.
     */
    get complete() {
        return true;
    }
    /**
     * Indicates if the counter is currently emitting particles
     */
    get running() {
        return false;
    }
}
exports.default = ZeroCounter;
//# sourceMappingURL=ZeroCounter.js.map