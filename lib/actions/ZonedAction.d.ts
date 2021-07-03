/**
 * The ZonedAction Action applies an action to the particle only if it is in
 * the specified zone.
 */
import Emitter from "../emitters/Emitter";
import Particle from "../particles/Particle2D";
import { Zone2D } from "../zones/Zone2D";
import Action from "./Action";
export default class ZonedAction extends Action {
    private _action;
    private _zone;
    private _invert;
    /**
     * The constructor creates a ZonedAction action for use by an emitter.
     * To add a ZonedAction to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flintparticles.emitters.Emitter#addAction()
     *
     * @param action The action to apply when inside the zone.
     * @param zone The zone in which to apply the action.
     * @param invertZone If false (the default) the action is applied only to
     * particles inside the zone. If true the action is applied only to
     * particles outside the zone.
     */
    constructor(action: Action, zone: Zone2D, invertZone?: boolean);
    /**
     * The action to apply when inside the zone.
     */
    get action(): Action;
    set action(value: Action);
    /**
     * The zone in which to apply the acceleration.
     */
    get zone(): Zone2D;
    set zone(value: Zone2D);
    /**
     * If false (the default), the action is applied only to particles inside
     * the zone. If true, the action is applied only to particles outside the zone.
     */
    get invertZone(): boolean;
    set invertZone(value: boolean);
    /**
     * Provides acces to the priority of the action being used.
     *
     * @see org.flintparticles.common.actions.Action#getDefaultPriority()
     */
    get priority(): number;
    set priority(value: number);
    /**
     * Calls the addedToEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#addedToEmitter()
     */
    addedToEmitter(emitter: Emitter): void;
    /**
     * Calls the removedFromEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     *
     * @see org.flintparticles.common.actions.Action#removedFromEmitter()
     */
    removedFromEmitter(emitter: Emitter): void;
    /**
     * Checks if the particle is in the zone and if so calls the update
     * method of the action being used.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     *
     * @see org.flintparticles.common.actions.Action#update()
     */
    update(emitter: Emitter, particle: Particle, time: number): void;
}
