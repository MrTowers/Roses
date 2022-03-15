import { MAINCAMERA } from "../../Roses.js";
import { Component } from "./Component.js";

export class DisplayObject extends Component {
    constructor () {
        super();
    }

    _gRP () {
        return this.gameObject.position.add(MAINCAMERA.getPosition());
    }

    _gRS () {
        return this.gameObject.scale.clone();
    }
}