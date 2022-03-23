import { Vector2 } from "../math/Vector2.js";

interface IMouse {
    position: Vector2;
    buttonEvents: any[];
    buttons: any;
}

export class Input {
    static keys: any = {};
    static keyEvents: any[] = [];
    static KeyEvent = class {
        key: string;
        callback: any;
        constructor (key = "", callback = () => {}) {
            this.key = key;
            this.callback = callback;
        }
    }
    static mouse: IMouse = {
        position: new Vector2(),
        buttonEvents: [],
        buttons: {}
    }

    constructor () {
        document.addEventListener("keydown", (e) => {
            Input.keys[e.key] = true;
            for (let i in Input.keyEvents) {
                const ev = Input.keyEvents[i];
                if (ev.key == e.key) {
                    ev.callback();
                }
            }
        });

        document.addEventListener("keyup", (e) => {
            Input.keys[e.key] = false;
        });

        document.addEventListener("mousemove", (e) => {
            Input.mouse.position.x = e.offsetX;
            Input.mouse.position.y = e.offsetY;
        });

        function initMouseEvent (key = "") {
            for (let i in Input.mouse.buttonEvents) {
                let ev = Input.mouse.buttonEvents[i];
                if (ev.key == key) {
                    ev.callback();
                }
            }
        }

        document.addEventListener("mousedown", (e) => {
            switch (e.button) {
                case 0: {
                    Input.mouse.buttons["left"] = true;
                    initMouseEvent("left");
                    break;
                }
                case 1: {
                    Input.mouse.buttons["middle"] = true;
                    initMouseEvent("middle");
                    break;
                }
                case 2: {
                    Input.mouse.buttons["right"] = true;
                    initMouseEvent("right");
                    break;
                }
            }
        });

        document.addEventListener("mouseup", (e) => {
            switch (e.button) {
                case 0: {
                    Input.mouse.buttons["left"] = false;
                    break;
                }
                case 1: {
                    Input.mouse.buttons["middle"] = false;
                    break;
                }
                case 2: {
                    Input.mouse.buttons["right"] = false;
                    break;
                }
            }
        });
    }

    static getKey (key = "") {
        return this.keys[key];
    }

    static addKeyEvent (key = "", event = () => {}) {
        let ev = new this.KeyEvent(key, event);
        this.keyEvents.push(ev);
        return ev;
    }

    static removeKeyEvent (ev = new this.KeyEvent()) {
        this.keyEvents.splice(this.keyEvents.indexOf(ev, 1));
    }
}

new Input();