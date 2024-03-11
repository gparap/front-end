// © 2024 gparap

// maximum for rgb color values ie. (255, 255, 255)
const MAX = 255;

function generateColor() {
    //get random color
    let color = getRandomRGBColor();

    //get the color container element and apply the color
    let colorContainer = document.getElementById('container-color');
    colorContainer.style.backgroundColor = 'rgb(' + color.red + ',' + color.green + ',' + color.blue + ')';

    //get the color container element and apply the color in hex
    let colorElement = document.getElementById('color');
    colorElement.innerHTML = "#" +
        getHexFromRGB(color.red) + getHexFromRGB(color.green) + getHexFromRGB(color.blue);
}

/* Returns a color object with random rgb values. */
function getRandomRGBColor() {
    let color = { red: 0, green: 0, blue: 0 };
    color.red = Math.floor(Math.random() * MAX);
    color.green = Math.floor(Math.random() * MAX);
    color.blue = Math.floor(Math.random() * MAX);
    return color;
}

/* Converts the color value (ie.255) to its hexadecimal representation. */
function getHexFromRGB(value) {
    let hex = value.toString(16);

    //add "0" if the hex value is only 1 digit
    if (hex.length === 1) {
        hex = "0" + hex.toString();
    }

    return hex.toUpperCase();
}
