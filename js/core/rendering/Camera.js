import { Vector2 } from "../math/Vector2.js";

export class Camera {
    constructor () {
        this.position = new Vector2();
        this.offset = new Vector2();
    }

    getPosition () {
        return this.position.add(this.offset);
    }

    setPosition (v = new Vector2()) {
        this.position = v.clone();
    }
}