import { Color } from "./core/math/Color.js";
import { Vector2 } from "./core/math/Vector2.js";
import { Component } from "./core/objects/Component.js";
import { GameObject } from "./core/objects/GameObject.js";
import { Camera } from "./core/rendering/Camera.js";
import { Shape } from "./core/rendering/Shape.js";
import { Sprite } from "./core/rendering/Sprite.js";
import { AudioPlayer } from "./core/utils/AudioPlayer.js";
import { Input } from "./core/utils/Input.js";
import { Load } from "./core/utils/Load.js";

export const MAINCAMERA = new Camera();
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d")!;

function resize () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;
}

window.addEventListener("resize", resize);

resize();

canvas.style.backgroundColor = "black";
document.body.appendChild(canvas);

document.body.style.padding = "0px";
document.body.style.margin = "0px";
document.body.style.overflow = "hidden";

export let delta = 0;
let lasttime = performance.now();
export const objects = [];
export const textures = {};
export const audios = {};

function calcDelta () {
    let now = performance.now();
    delta = now - lasttime;
    lasttime = now;
}

function tick () {
    calcDelta();
    update();
    render();
    requestAnimationFrame(tick);
}

function update () {
    for (let i in objects) {
        objects[i].update();
    }
}

function render () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText(`${Math.round(1000 / delta)} FPS`, 0, 10);
    for (let i in objects) {
        objects[i].render();
    }
}

function gameStart () {
    let obj = new GameObject();
    let sprite = Sprite.from("grass");
    obj.addComponent(sprite);
    objects.push(obj);
    let script = new Component();
    script.update = () => {
        let x = 0;
        let y = 0;

        if (Input.getKey("a")) {
            x = -1;
        }
        if (Input.getKey("d")) {
            x = 1;
        }
        if (Input.getKey("s")) {
            y = 1;
        }
        if (Input.getKey("w")) {
            y = -1;
        }

        MAINCAMERA.setPosition(MAINCAMERA.getPosition().add(new Vector2(x, y).normalize()));
    }
    obj.addComponent(script);
    tick();
}

async function loadAssets () {
    await Load.image("./textures/blocks/grass.png", "grass");
    gameStart();
}

loadAssets();

window.textures = textures;