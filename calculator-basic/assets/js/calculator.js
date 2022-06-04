// © 2022 gparap

function handleButtonClick(input) {
    var result = document.getElementById("button-result");

    //if it is zero, clear the value
    if (result.textContent === 0) {
        result.textContent = ""
    }

    //if it is the clear sign, clear the value
    if (input === 'C') {
        result.textContent = "0"
        return
    }

    //if it is the equals sign, do the math
    if (input === '=') {
        result.textContent = eval(result.textContent)
        return
    }

    //concatenate the input to the display
    result.textContent += input;
}