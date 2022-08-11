"use strict";

const boom = new  Audio("sounds/boom.wav");
const Boom = document.getElementById("boom");

const clap = new Audio("sounds/clap.wav");
const Clap = document.getElementById("clap");

const hihat = new Audio("sounds/hihat.wav");
const Hihat = document.getElementById("hihat");

const kick = new Audio("sounds/kick.wav");
const Kick = document.getElementById("kick");

const openhat = new Audio("sounds/openhat.wav");
const Openhat = document.getElementById("openhat");

const ride = new Audio("sounds/ride.wav");
const Ride = document.getElementById("ride");

const snare = new Audio("sounds/snare.wav");
const Snare = document.getElementById("snare");

const tink = new Audio("sounds/tink.wav");
const Tink = document.getElementById("tink");

const tom = new Audio("sounds/tom.wav"); 
const Tom = document.getElementById("tom");

document.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "a":
            boom.currentTime = 0;
            boom.play();

            Boom.classList.add("active");

            setTimeout(() => {
                Boom.classList.remove("active");
            }, 300);
        break;

        case "s":
            clap.currentTime = 0;
            clap.play();

            Clap.classList.add("active");

            setTimeout(() => {
                Clap.classList.remove("active");
            }, 300);
        break;

        case "d":
            hihat.currentTime = 0;
            hihat.play();

            Hihat.classList.add("active");

            setTimeout(() => {
                Hihat.classList.remove("active");
            }, 300);
        break;

        case "f":
            kick.currentTime = 0;
            kick.play();

            Kick.classList.add("active");

            setTimeout(() => {
                Kick.classList.remove("active");
            }, 300);
        break;

        case "g":
            openhat.currentTime = 0;
            openhat.play();

            Openhat.classList.add("active");

            setTimeout(() => {
                Openhat.classList.remove("active");
            }, 300);
        break;

        case "h":
            ride.currentTime = 0;
            ride.play();

            Ride.classList.add("active");

            setTimeout(() => {
                Ride.classList.remove("active");
            }, 300);
        break;

        case "j":
            snare.currentTime = 0;
            snare.play();

            Snare.classList.add("active");

            setTimeout(() => {
                Snare.classList.remove("active");
            }, 300);
        break;

        case "k":
            tink.currentTime = 0;
            tink.play();

            Tink.classList.add("active");

            setTimeout(() => {
                Tink.classList.remove("active");
            }, 300);
        break;

        case "l":
            tom.currentTime = 0;
            tom.play();

            Tom.classList.add("active");

            setTimeout(() => {
                Tom.classList.remove("active");
            }, 300);
        break;
    }
});