"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Steady {
    constructor() {
        this._timeToNext = 0;
        this._rate = 0;
        this._rateInv = 0;
        this._running = false;
    }
    /**
     * The constructor creates a Steady counter for use by an emitter. To
     * add a Steady counter to an emitter use the emitter's counter property.
     *
     * @param rate The number of particles to emit per second.
     *
     * @see org.flintparticles.common.emitter.Emitter.counter
     */
    Steady(rate = 0) {
        this._running = false;
        this.rate = rate;
    }
    /**
     * Stops the emitter from emitting particles
     */
    stop() {
        this._running = false;
    }
    /**
     * Resumes the emitter emitting particles after a stop
     */
    resume() {
        this._running = true;
    }
    /**
     * The number of particles to emit per second.
     */
    get rate() {
        return this._rate;
    }
    set rate(value) {
        if (!value || value < 0) {
            value = 0;
        }
        if (this._rate !== value) {
            if (this._rate && value) {
                var timePassed = this._rateInv - this._timeToNext;
                this._rate = value;
                this._rateInv = value ? 1 / value : Number.MAX_VALUE;
                this._timeToNext = Math.max(this._rateInv - timePassed, 0);
            }
            else {
                this._rate = value;
                this._rateInv = value ? 1 / value : Number.MAX_VALUE;
                this._timeToNext = this._rateInv;
            }
        }
    }
    /**
     * Initilizes the counter. Returns 0 to indicate that the emitter should
     * emit no particles when it starts.
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
        this._running = true;
        this._timeToNext = this._rateInv;
        return 0;
    }
    /**
     * Uses the time, rateMin and rateMax to calculate how many
     * particles the emitter should emit now.
     *
     * <p>This method is called within the emitter's update loop and need not
     * be called by the user.</p>
     *
     * @param emitter The emitter.
     * @param time The time, in seconds, since the previous call to this method.
     * @return the number of particles the emitter should create.
     *
     * @see org.flintparticles.common.counters.Counter#updateEmitter()
     */
    updateEmitter(emitter, time) {
        if (!this._running) {
            return 0;
        }
        var count = 0;
        this._timeToNext -= time;
        while (this._timeToNext <= 0) {
            ++count;
            this._timeToNext += this._rateInv;
        }
        return count;
    }
    /**
     * Indicates if the counter has emitted all its particles. For this counter
     * this will always be false.
     */
    get complete() {
        return false;
    }
    /**
     * Indicates if the counter is currently emitting particles
     */
    get running() {
        return this._running;
    }
}
exports.default = Steady;
//# sourceMappingURL=Steady.js.map