import { ctx, textures } from "../../Roses.js";
import { Vector2 } from "../math/Vector2.js";
import { DisplayObject } from "../objects/DisplayObject.js";

export class Sprite extends DisplayObject {
    image: HTMLImageElement;
    constructor () {
        super();
        this.image = new Image();
    }

    render () {
        if (this.image) {
            if (this.image.width) {
                //console.log("redner")
                let pos = this._gRP();
                let scale = this._gRS();
                scale.x *= this.image.width;
                scale.y *= this.image.height;
                pos.x -= scale.x / 2;
                pos.y -= scale.y / 2;
                ctx.drawImage(this.image, pos.x, pos.y, scale.x, scale.y);
            }
        }
    }

    static from (name = "") {
        let s = new Sprite();
        s.image = textures[name];
        return s;
    }
}