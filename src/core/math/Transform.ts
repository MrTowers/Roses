import { Vector2 } from "./Vector2.js";

export class Transform {
    position: Vector2;
    scale: Vector2
    constructor (position = new Vector2(), scale = new Vector2(1, 1)) {
        this.position = position;
        this.scale = scale;
    }
}