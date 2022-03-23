import { GameObject } from "./core/objects/GameObject.js";
import { Camera } from "./core/rendering/Camera.js";

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
export const objects: GameObject[] = [];
export const textures: any = {};
export const audios: any = {};

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
    tick();
}

async function loadAssets () {
    gameStart();
}

loadAssets();