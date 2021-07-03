import Action from "../actions/Action";
import Counter from "../counters/Counter";
import Particle2D from "../particles/Particle2D";
export default class Emitter {
    protected _counter: Counter;
    protected _actions: Array<Action>;
    protected _particles: Array<Particle2D>;
    protected _maximumFrameTime: number;
    protected _running: boolean;
    private _eventTypes;
    private _eventDispatcher;
    constructor();
    addEventListener(type: string, callback: EventListenerOrEventListenerObject): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject): void;
    hasEventListener(type: string): boolean;
    dispatchEvent(event: CustomEvent): void;
    get counter(): Counter;
    set counter(value: Counter);
    get actions(): Array<Action>;
    set actions(value: Array<Action>);
    addAction(action: Action): void;
    /**
     * Removes an Action from the Emitter.
     *
     * @param action The Action to remove
     *
     * @see addAction()
     */
    removeAction(action: Action): void;
    /**
     * Detects if the emitter is using a particular action or not.
     *
     * @param action The action to look for.
     *
     * @return true if the action is being used by the emitter, false
     * otherwise.
     */
    hasAction(action: Action): boolean;
    get particles(): Array<Particle2D>;
    set particles(value: Array<Particle2D>);
    addParticle(particle: Particle2D): void;
    addParticles(particles: Array<Particle2D>): void;
    removeParticle(particle: Particle2D): boolean;
    removeParticles(particles: Array<Particle2D>): void;
    killAllParticles(): void;
    private prioritySort;
    update(time: number): void;
}
