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
            boom.currentTime = 0;
            boom.play();
        break;

        case "2":
            clap.currentTime = 0;
            clap.play();
        break;

        case "3":
            hihat.currentTime = 0;
            hihat.play();
        break;

        case "4":
            kick.currentTime = 0;
            kick.play();
        break;

        case "5":
            openhat.currentTime = 0;
            openhat.play();
        break;

        case "6":
            ride.currentTime = 0;
            ride.play();
        break;

        case "7":
            snare.currentTime = 0;
            snare.play();
        break;

        case "8":
            tink.currentTime = 0;
            tink.play();
        break;

        case "9":
            tom.currentTime = 0;
            tom.play();
        break;
    }
});