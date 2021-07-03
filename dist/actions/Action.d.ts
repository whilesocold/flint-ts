import Emitter from "../emitters/Emitter";
import Particle2D from "../particles/Particle2D";
export default class Action {
    protected _priority: number;
    get priority(): number;
    set priority(value: number);
    removedFromEmitter(emitter: Emitter): void;
    addedToEmitter(emitter: Emitter): void;
    update(emitter: Emitter, particle: Particle2D, time: number): void;
}
