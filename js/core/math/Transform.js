import { Vector2 } from "./Vector2.js";

export class Transform {
    constructor (position = new Vector2(), scale = new Vector2(1, 1)) {
        this.position = position;
        this.scale = scale;
    }
}