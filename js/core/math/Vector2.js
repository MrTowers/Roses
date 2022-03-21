export class Vector2 {
    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add (v = new Vector2()) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    sub (v = new Vector2()) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    mul (v = new Vector2()) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }

    div (v = new Vector2()) {
        return new Vector2(this.x / v.x, this.y / v.y);
    }

    mag () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize () {
        let mag = this.mag();
        let v = new Vector2(this.x / mag, this.y / mag);
        if (isNaN(v.x)) v.x = 0;
        if (isNaN(v.y)) v.y = 0;
        return v;
    }

    angle () {
        return Math.atan2(this.y, this.x);
    }

    angleTo (v = new Vector2()) {
        return Math.atan2(v.y - this.y, v.x - this.x);
    }

    distanceTo (v = new Vector2()) {
        return Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2));
    }

    set (n = 0) {
        this.x = n;
        this.y = n;
    }

    clone () {
        return new Vector2(this.x, this.y);
    }
}