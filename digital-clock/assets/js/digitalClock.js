// Copyright (c) 2022 gparap
// Digital Clock

var time = null;
var hours = null;
var minutes = null;
var seconds = null;

// display the time
setInterval(displayTime, 1000);

// get html elements
var elementHours = document.getElementById("hours");
var elementMinutes = document.getElementById("minutes");
var elementSeconds = document.getElementById("seconds");


function displayTime() {
    getTimeNow();
    fixOneZeroDisplay();
    elementHours.innerHTML = hours;
    elementMinutes.innerHTML = minutes;
    elementSeconds.innerHTML = seconds;
}

function getTimeNow() {
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
}

function fixOneZeroDisplay() {
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
}