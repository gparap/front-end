// Copyright (c) 2022 gparap
// Analog Clock

// get 2d context
var canvas = document.getElementById('canvas');
var context2d = canvas.getContext('2d');

// set the half of the minimum dimension (height) as the clock's radius
var radius = canvas.height / 3;

// set the origin at the center of the screen
context2d.translate(canvas.width / 3, canvas.height / 3);

// draw the circle of the clock
context2d.arc(0, 50, radius, 0, 360);
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
context2d.arc(0, 50, radius / 10, 0, 360);
context2d.fillStyle = '#555555';
context2d.fill();