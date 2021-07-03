"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __importDefault(require("./Particle"));
var Particle2D = /** @class */ (function (_super) {
    __extends(Particle2D, _super);
    function Particle2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.y = 0;
        _this.previousX = 0;
        _this.previousY = 0;
        _this.velX = 0;
        _this.velY = 0;
        _this.rotation = 0;
        _this.angVelocity = 0;
        /**
         * The position in the emitter's horizontal spacial sorted array
         */
        _this.sortID = -1;
        _this._previousMass = 0;
        _this._previousRadius = 0;
        _this._inertia = 0;
        return _this;
    }
    Object.defineProperty(Particle2D.prototype, "inertia", {
        /**
         * The moment of inertia of the particle about its center point
         */
        get: function () {
            if (this.mass !== this._previousMass ||
                this.collisionRadius !== this._previousRadius) {
                this._inertia =
                    this.mass * this.collisionRadius * this.collisionRadius * 0.5;
                this._previousMass = this.mass;
                this._previousRadius = this.collisionRadius;
            }
            return this._inertia;
        },
        enumerable: false,
        configurable: true
    });
    return Particle2D;
}(Particle_1.default));
exports.default = Particle2D;
