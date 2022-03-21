import { audios } from "../../Roses.js";

export class AudioPlayer {
    static play (name = "") {
        let audio = new Audio(audios[name]);
        console.log(audios[name]);
        audio.play();
    }
}