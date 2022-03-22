import { audios, textures } from "../../Roses.js";

export class Load {
    static image(src = "", name = "") {
        src = `js/game/assets/${src}`;
        return new Promise((res, rej) => {
            let img = new Image();
            img.addEventListener("load", () => {
                console.log(`${src} loaded`);
                textures[name] = img;
                res(this);
            });

            img.addEventListener("error", (e) => {
                rej(e.error);
            });
            img.src = src;
        });
    }

    static audio(src = "", name = "") {
        src = `js/game/assets/${src}`;
        new Audio(src);
        audios[name] = src;
        console.log(`${src} loaded`);
    }
}