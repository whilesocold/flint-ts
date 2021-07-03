/**
 * The Particle class is a set of public properties shared by all particles.
 * It is deliberately lightweight, with only one method. The Initializers
 * and Actions modify these properties directly. This means that the same
 * particles can be used in many different emitters, allowing Particle
 * objects to be reused.
 *
 * Particles are usually created by the ParticleCreator class. This class
 * just simplifies the reuse of Particle objects which speeds up the
 * application.
 */
export default class Particle {
    /**
     * The 32bit ARGB color of the particle. The initial value is 0xFFFFFFFF (white).
     */
    color: string;
    private _previousColor;
    /**
     * The scale of the particle ( 1 is normal size ).
     */
    scale: number;
    /**
     * The mass of the particle ( 1 is the default ).
     */
    mass: number;
    /**
     * The radius of the particle, for collision approximation
     */
    collisionRadius: number;
    /**
     * The object used to display the image. In a 2D particle, this is usually
     * a DisplayObject. In a 3D particle, this may be a DisplayObject, for
     * displaying on a billboard or similar, or a 3D object in the form used
     * by the render system.
     */
    /**
     * The lifetime of the particle, in seconds.
     */
    lifetime: number;
    /**
     * The age of the particle, in seconds.
     */
    age: number;
    /**
     * The energy of the particle.
     */
    energy: number;
    /**
     * Whether the particle is dead and should be removed from the stage.
     */
    isDead: boolean;
    /**
     * The dictionary object enables actions and activities to add additional properties to the particle.
     * Any object adding properties to the particle should use a reference to itself as the dictionary
     * key, thus ensuring it doesn't clash with other object's properties. If multiple properties are
     * needed, the dictionary value can be an object with a number of properties.
     */
    /**
     * Creates a particle. Alternatively particles can be reused by using the ParticleCreator to create
     * and manage them. Usually the emitter will create the particles and the user doesn't need
     * to create them.
     */
    constructor();
    /**
     * Sets the particle's properties to their default values.
     */
    initialize(): void;
    /**
     * A ColorTransform object that converts white to the colour of the particle.
     */
    /**
     * @private
     */
    protected cloneInto(p: Particle): Particle;
    /**
     * Creates a new particle with all the same properties as this one.
     *
     * <p>Note that the new particle will use the same image object as the one you're cloning.
     * This is fine if the particles are used with a Bitmaprenderer, but if they are used with a
     * DisplayObjectRenderer you will need to replace teh image property with a new image, otherwise
     * only one of the particles (original or clone) will be displayed.</p>
     */
    clone(): Particle;
    revive(): void;
}
