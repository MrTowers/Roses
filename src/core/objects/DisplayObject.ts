import { canvas, MAINCAMERA } from "../../Roses.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "./Component.js";

export class DisplayObject extends Component {
    constructor () {
        super();
    }

    _gRP () {
        return this.gameObject.getPosition().add(MAINCAMERA.getPosition().add(new Vector2(canvas.width / 2, canvas.height / 2)));
    }

    _gRS () {
        return this.gameObject.getScale();
    }
}