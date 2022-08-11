"use strict";

const key = document.getElementById("key");
const boom = new  Audio("../sounds/boom.wav");
const clap = new Audio("../sounds/clap.wav");
const hihat = new Audio("../sounds/hihat.wav");
const kick = new Audio("../sounds/kick.wav");
const openhat = new Audio("../sounds/openhat.wav");
const ride = new Audio("../sounds/ride.wav");
const snare = new Audio("../sounds/snare.wav");
const tink = new Audio("../sounds/tink.wav");
const tom = new Audio("../sounds/tom.wav"); 

document.addEventListener("keydown", (e) => {
    console.log(e);

    switch(e.key) {
        case "1":
            boom.play();
        break;

        case "2":
            clap.play();
        break;

        case "3":
            hihat.play();
        break;

        case "4":
            kick.play();
        break;

        case "5":
            openhat.play();
        break;

        case "6":
            ride.play();
        break;

        case "7":
            snare.play();
        break;

        case "8":
            tink.play();
        break;

        case "9":
            tom.play();
        break;
    }
});