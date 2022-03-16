import { Color } from "./core/math/Color.js";
import { Component } from "./core/objects/Component.js";
import { GameObject } from "./core/objects/GameObject.js";
import { Camera } from "./core/rendering/Camera.js";
import { Shape } from "./core/rendering/Shape.js";
import { Sprite } from "./core/rendering/Sprite.js";
import { Input } from "./core/utils/Input.js";
import { Load } from "./core/utils/Load.js";

export const MAINCAMERA = new Camera();
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");

function resize () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;
}

window.addEventListener("resize", resize);

resize();

canvas.style.backgroundColor = "black";
document.body.appendChild(canvas);

document.body.style.padding = 0;
document.body.style.margin = 0;
document.body.style.overflow = "hidden";

export let delta = 0;
let lasttime = performance.now();
export const objects = [];
export const textures = {};

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
    let shp = new Shape([
        [0, 0],
        [1, 1],
        [1, 0]
    ]);
    shp.color = Color.white();
    obj.transform.scale.set(200);
    obj.addComponent(shp);
    objects.push(obj);

    tick();
}

async function loadAssets () {
    await Load.image("./textures/blocks/grass.png", "grass");
    gameStart();
}

loadAssets();

window.textures = textures;