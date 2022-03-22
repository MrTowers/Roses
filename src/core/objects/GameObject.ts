import { Transform } from "../math/Transform.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "./Component.js";

export class GameObject {
    tag: string;
    components: Component[];
    transform: Transform;
    constructor () {
        this.tag = "";
        this.components = [];
        this.transform = new Transform();
    }

    update () {
        for (let i in this.components) {
            this.components[i].update();
        }
    }

    render () {
        for (let i in this.components) {
            this.components[i].render();
        }
    }

    addComponent (c = new Component()) {
        this.components.push(c);
        c.gameObject = this;
    }

    removeComponentByTag (tag = "") {
        for (let i in this.components) {
            if (this.components[i].tag == tag) {
                this.components.splice(Number(i), 1);
            }
        }
    }

    getPosition () {
        return this.transform.position.clone();
    }

    setPosition (v = new Vector2()) {
        this.transform.position = v.clone();
    }

    getScale () {
        return this.transform.scale.clone();
    }

    setScale (v = new Vector2()) {
        this.transform.scale = v.clone();
    }

    destroy () {
        this.ondestroy();
        //dodac
    }

    //events

    onstart () {
        for (let i in this.components) {
            this.components[i].onstart();
        }
    }

    ondestroy () {
        for (let i in this.components) {
            this.components[i].ondestroy();
        }
    }
}