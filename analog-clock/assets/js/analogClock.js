// Copyright (c) 2022 gparap
// Analog Clock

// get 2d context
var canvas = document.getElementById('canvas');
var context2d = canvas.getContext('2d');

// set the half of the minimum dimension (height) as the clock's radius
var radius = canvas.height / 3.3;

// set the origin at the center of the screen
context2d.translate(canvas.width / 3, canvas.height / 3);

// draw the circle of the clock
context2d.arc(0, 0, radius, 0, 360);
context2d.fillStyle = 'white';
context2d.fill();

// draw a gradient around the clock
var gradient = context2d.createRadialGradient(0, 0, radius / 10, 0, 0, radius * 1.33);
gradient.addColorStop(0, '#555555');
gradient.addColorStop(0.5, 'white');
gradient.addColorStop(1, '#555555');
context2d.strokeStyle = gradient;
context2d.lineWidth = radius / 10;
context2d.stroke();

// draw circle origin of the clock's pointers
context2d.beginPath();
context2d.arc(0, 0, radius / 10, 0, 360);
context2d.fillStyle = '#555555';
context2d.fill();

// setup the clock's text settings
context2d.font = radius / 10 + "px monospace";
context2d.textAlign = "center";
context2d.textBaseline = "middle";

// draw the clock's numbers
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

// get the exact current time
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
    minutes = minutes % 60;
    
// set the angle of the hours-pointer
hours = hours % 12;
hours = (hours * Math.PI / 6);
    
// draw the hours-pointer path
drawPointer(hours, radius / 15, 2.25);

// set the angle of the minutes-pointer
minutes = minutes % 60;
minutes = (minutes * Math.PI / 30);
    
// draw the hours-pointer path
drawPointer(minutes, radius / 15, 1.33);

// Draws the clock pointer
function drawPointer(radians, lineWidth, lineLength) {
    context2d.beginPath();
    
    // center on the inner circle of the clock
    context2d.moveTo(0, 0);
    
    // draw the clock pointer based on the rotation 
    context2d.rotate(radians);
    context2d.lineWidth = lineWidth;
    context2d.lineTo(0, -radius / lineLength);
    context2d.stroke();
    
    // restore rotation
    context2d.rotate(-radians);
}