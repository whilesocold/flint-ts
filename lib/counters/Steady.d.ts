import Emitter from "../emitters/Emitter";
import Counter from "./Counter";
export default class Steady implements Counter {
    private _timeToNext;
    private _rate;
    private _rateInv;
    private _running;
    /**
     * The constructor creates a Steady counter for use by an emitter. To
     * add a Steady counter to an emitter use the emitter's counter property.
     *
     * @param rate The number of particles to emit per second.
     *
     * @see org.flintparticles.common.emitter.Emitter.counter
     */
    Steady(rate?: number): void;
    /**
     * Stops the emitter from emitting particles
     */
    stop(): void;
    /**
     * Resumes the emitter emitting particles after a stop
     */
    resume(): void;
    /**
     * The number of particles to emit per second.
     */
    get rate(): number;
    set rate(value: number);
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
    startEmitter(emitter: Emitter): number;
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
    updateEmitter(emitter: Emitter, time: number): number;
    /**
     * Indicates if the counter has emitted all its particles. For this counter
     * this will always be false.
     */
    get complete(): boolean;
    /**
     * Indicates if the counter is currently emitting particles
     */
    get running(): boolean;
}
