// Copyright (c) 2022 gparap
// Analog Clock

// get 2d context
var canvas = document.getElementById('canvas');
var context2d = canvas.getContext('2d');

// set the half of the minimum dimension (height) as the clock's radius
var radius = canvas.height / 3.3;

// set the origin at the center of the screen
context2d.translate(canvas.width / 2, canvas.height / 2);

// display the time
setInterval(displayTime, 1000);

function displayTime() {
    context2d.clearRect(0, 0, canvas.width, canvas.height);
    drawClockBackground();
    drawClockPointers();    
}

function drawClockBackground() {
    // draw the circle of the clock
    context2d.arc(0, 0, radius, 0, 360);
    context2d.fillStyle = 'white';
    context2d.fill();

    // draw circle origin of the clock's pointers
    context2d.beginPath();
    context2d.arc(0, 0, radius / 10, 0, 360);
    context2d.fillStyle = '#555555';
    context2d.fill();

    // setup the clock's text settings
    context2d.font = radius / 10 + "px monospace";
    context2d.textAlign = "center";
    context2d.textBaseline = "middle";

    // draw the clock's numbers (1 - 12)
    drawClockNumbers();
}

function drawClockNumbers() {
    for (var i=1; i<13; i++) {
        // rotation angle of the text
        var angle = i * Math.PI / 6;

        // save context before translations
        context2d.save();

        // rotate context based on the angle
        context2d.rotate(angle);

        // offset from inner clock's circle
        context2d.translate(0, -radius/1.175);

        // fix the rotation of the text before drawing the number
        // and restore the rotation after drawing the number
        context2d.rotate(-angle);
        context2d.fillText(i.toString(), 0, 0);
        context2d.rotate(angle);

        // restore context after translations
        context2d.restore();
    }
}

function drawClockPointers() {
    // get the exact current time
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // set the angle of the hours-pointer
    hours = (hours * Math.PI / 6) + ((Math.PI / 6) /(minutes * Math.PI / 30));
    
    // draw the hours-pointer path
    drawPointer(hours, radius / 15, 2.25);
    
    // set the angle of the minutes-pointer
    minutes = (minutes * Math.PI / 30);
    
    // draw the hours-pointer path
    drawPointer(minutes, radius / 25, 1.33);
    
    // set the angle of the seconds-pointer
    seconds = (seconds * Math.PI / 30);
    
    // draw the seconds-pointer path
    drawPointer(seconds, radius / 50, 1.25);
}

function drawPointer(radians, lineWidth, lineLength) {
    context2d.beginPath();
    
    // center on the inner circle of the clock
    context2d.moveTo(0, 0);
    
    // draw the clock pointer based on the rotation 
    context2d.rotate(radians);
    context2d.lineWidth = lineWidth;
    context2d.lineTo(0, -radius / lineLength);
    context2d.stroke();
    
    // restore rotation and closh path
    context2d.rotate(-radians);
    context2d.closePath();
}