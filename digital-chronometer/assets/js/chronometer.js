// © 2023 gparap
// Digital Chronometer

let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;
let timerIntervalID = -1;

//get the chronometer text element
let chronometer = document.getElementById("chronometer");

//register event listeners for buttons
let buttonStart = document.getElementById("button-start");
buttonStart.addEventListener("click", function(){
    startChronometer();
});
let buttonStop = document.getElementById("button-stop");
buttonStop.addEventListener("click", function(){
    stopChronometer();
});
let buttonReset = document.getElementById("button-reset");
buttonReset.addEventListener("click", function(){
    resetChronometer();
});

function startChronometer() {
    console.log("startChronometer");
    timerIntervalID = setInterval(updateChronometer, 1000);
}

function stopChronometer() {
    console.log("stopChronometer");
    clearInterval(timerIntervalID);
    console.log("stop interval seconds" + timerIntervalID);
}

function resetChronometer() {
    console.log("resetChronometer");
    chronometer.innerHTML = "00:00:00";
}

//keep the time ticking
function updateChronometer(){   //TODO: fix output
    timerSeconds++;
    console.log("timerIntervalID = " + timerIntervalID);

    //handle seconds to minutes
    if (timerSeconds === 60) {
        timerMinutes++;
        timerSeconds=0;
    }

    //handle minutes to hours
    if (timerMinutes === 60) {
        timerHours++;
        timerMinutes=0;
    }
    
    //show the output
    chronometer.innerHTML = 
        fixChronometerOutput(timerHours) + ":" + 
        fixChronometerOutput(timerMinutes) + ":"  + 
        fixChronometerOutput(timerSeconds);
}

//retain leading zeros, ie: 0:11:4 => 00:11:04 
function fixChronometerOutput(value) {
    if (value<10){
        value = "0"+value;
    }
    return value;
}



















