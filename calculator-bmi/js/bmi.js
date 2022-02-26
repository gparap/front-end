// © 2022 gparap

//calculate the body max index based on user input
//
//formula: BMI = kg / (m * m)
//
function calculate() {
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var result = document.getElementById("result");
    
    var bmi = weight.value / ((height.value/100) * (height.value/100));
    
    result.innerHTML = "Your BMI is:  " + bmi.toFixed(1);
}