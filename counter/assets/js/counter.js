// © 2022 gparap

//adds value to the counter
function plus(value) {
    var result = document.getElementById("result");
    result.innerHTML = parseInt(result.innerHTML) + value;
}

//subtracts value from the counter
function minus(value) {
    var result = document.getElementById("result");
    result.innerHTML = parseInt(result.innerHTML) - value;
}

//reset the counter
function reset(value) {
    result.innerHTML = 0;
}