import { Transform } from "../math/Transform.js";
import { Component } from "./Component.js";

export class GameObject {
    constructor () {
        this.tag = "";
        this.components = [];
    }

    addComponent (c = new Component()) {
        this.components.push(c);
    }

    removeComponentByTag (tag = "") {
        for (let i in this.components) {
            if (this.components[i].tag == tag) {
                this.components.splice(i, 1);
            }
        }
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