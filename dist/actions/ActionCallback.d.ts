import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import Action from "./Action";
export default class ActionCallback extends Action {
    private _callBack;
    private _once;
    private _called;
    constructor(callBack: Function, once?: boolean);
    update(emitter: Emitter, particle: Particle, time: number): void;
}
