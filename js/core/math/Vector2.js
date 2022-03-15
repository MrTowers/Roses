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

    clone () {
        return new Vector2(this.x, this.y);
    }
}