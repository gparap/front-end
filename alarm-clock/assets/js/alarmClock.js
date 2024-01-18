// Copyright (c) 2024 gparap
// Alarm Clock

function setAlarm() {
    //get alarm values
    let hours = document.getElementById("select-hours").value;
    let minutes = document.getElementById("select-minutes").value;
    let alarmPeriod = document.getElementById("select-period").value;

    //validate alarm
    if (!isAlarmSet(hours, minutes)) {
        alert("Please, set alarm.");
        return;
    }

    //get the time now day period
    let time = new Date();
    let timeNowPeriod = time.toLocaleTimeString().match(/\b(?:AM|PM)\b/)[0];

    //get the time now in seconds
    let hoursNow = time.getHours();
    let minutesNow = time.getMinutes();
    let timeNowInSeconds = hoursNow * 3600 + minutesNow * 60;

    //get the alarm time in seconds
    let alarmTimeInSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    if (alarmPeriod.toLowerCase() === "pm") {
        alarmTimeInSeconds += 12 * 3600;
    }

    //get a day's time in seconds
    let dayInSeconds = 24 * 3600;

    //we are in the same day period
    if (timeNowPeriod.toLowerCase() === alarmPeriod.toLowerCase()) {
        let totalSecondsToAlarm = alarmTimeInSeconds - timeNowInSeconds;

        //he alarm time is >bigger
        if (totalSecondsToAlarm > 0) {
            let alarmTimeout = totalSecondsToAlarm * 1000;
            handleTheAlarmClock(totalSecondsToAlarm, alarmTimeout);
        }

        //the alarm time is <smaller
        if (totalSecondsToAlarm < 0) {
            //get the total seconds to alarm 
            //by subtracting the time difference (now - alarm) from a day's time 
            //totalSecondsToAlarm is negative so we use '+', see math: +1 = -(-)1
            totalSecondsToAlarm = dayInSeconds + totalSecondsToAlarm;
            let alarmTimeout = totalSecondsToAlarm * 1000;
            handleTheAlarmClock(totalSecondsToAlarm, alarmTimeout);
        }
    }

    //we are NOT in the same period with the alarm clock
    if (timeNowPeriod.toLowerCase() !== alarmPeriod.toLowerCase()) {
        let totalSecondsToAlarm = alarmTimeInSeconds - timeNowInSeconds;
        totalSecondsToAlarm = Math.abs(totalSecondsToAlarm);
        let alarmTimeout = totalSecondsToAlarm * 1000;
        handleTheAlarmClock(totalSecondsToAlarm, alarmTimeout);
    }
}

function isAlarmSet(hours, minutes) {
    if (hours === "0" && minutes === "0") {
        return false;
    }
    return true;
}

function handleTheAlarmClock(totalSecondsToAlarm, alarmTimeout) {
    //start alarm
    let intervalId = setInterval(function() {
        totalSecondsToAlarm -= 1;
        console.log("seconds to fire: " + totalSecondsToAlarm);
    }, 1000);

    //stop alarm
    setTimeout(function() {
        clearInterval(intervalId);
        alert("alarm fired!");
    }, alarmTimeout);
}

//Updates the alarm time texts in the user interface
function updateAlarmUI() {
    //get alarm values
    let hours = document.getElementById("select-hours").value;
    let minutes = document.getElementById("select-minutes").value;
    let period = document.getElementById("select-period").value;
    
    //fix the alarm texts display like:
    //ie. "01" instead of "1", "02" instead of "2", etc.
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    //update alarm UI
    let headerHours = document.getElementById("alarm-hours").innerHTML = hours;
    let headerMinutes = document.getElementById("alarm-minutes").innerHTML = minutes;
    let headerPeriod = document.getElementById("alarm-period").innerHTML = period.toUpperCase();
}

//Clears alarm select options & text values
function clearAlarm() {
    //clear options
    document.getElementById("select-hours").selectedIndex = 0;
    document.getElementById("select-minutes").selectedIndex = 0;
    document.getElementById("select-period").selectedIndex = 0;

    //clear text
    document.getElementById("alarm-hours").innerHTML = "00";
    document.getElementById("alarm-minutes").innerHTML = "00";
    document.getElementById("alarm-period").innerHTML = "AM";
}