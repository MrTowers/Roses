export class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor (r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toString () {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    static black () {
        return new Color(0, 0, 0);
    }

    static white () {
        return new Color(255, 255, 255);
    }

    static red () {
        return new Color(255, 0, 0);
    }

    static blue () {
        return new Color(0, 0, 255);
    }

    static green () {
        return new Color(0, 255, 0);
    }
}