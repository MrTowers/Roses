import { ctx } from "../../Roses.js";
import { Color } from "../math/Color.js";
import { DisplayObject } from "../objects/DisplayObject.js";

export class Shape extends DisplayObject {
    constructor(points = [[0, 0]]) {
        super();
        this.points = points;
        this.filled = false;
        this.color = new Color();
    }

    render() {
        if (this.points.length != 0) {
            ctx.save();
            ctx.fillStyle = this.color.toString()
            ctx.strokeStyle = this.color.toString();
            const pos = this._gRP();
            const scale = this._gRS();
            ctx.beginPath();
            ctx.moveTo((this.points[0][0] * scale.x) + pos.x, (this.points[0][1] * scale.y) + pos.y);
            for (let i in this.points) {
                let point = this.points[i];
                ctx.lineTo((point[0] * scale.x) + pos.x, (point[1] * scale.y) + pos.y);
            }
            ctx.lineTo((this.points[0][0] * scale.x) + pos.x, (this.points[0][1] * scale.y) + pos.y);
            ctx.stroke();
            if (this.filled) {
                ctx.fill();
            }
            ctx.restore();
        }
    }
}