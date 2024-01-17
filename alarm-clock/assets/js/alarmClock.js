// Copyright (c) 2024 gparap
// Alarm Clock

//TODO: update alarm time in UI
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