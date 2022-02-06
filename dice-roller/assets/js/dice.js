// © 2022 gparap
// Roll two dice

var textPlaceholder = document.getElementById("text-placeholder-1");
var diceLeft = document.getElementById("dice-left");
var diceRight = document.getElementById("dice-right");

function roll() {
    removePlaceholderText();
    var dice1 = rollLeftDice();
    var dice2 = rollRightDice();

    //check if we have the same value on both dice
    //and inform the user
    if (dice1 === dice2) {
        textPlaceholder.innerHTML = "Double!!!"
    }
}

function removePlaceholderText() {
    textPlaceholder.innerHTML = "";
}

function rollLeftDice() {
    var value = 0;
    var r = Math.random();
    
    //map the random number with the dice img
    if (r < 0.16) {
        diceLeft.src = "assets/img/dice_1.png";
        value = 1;
    }else if (r > 0.16 && r < 0.32) {
        diceLeft.src = "assets/img/dice_2.png";
        value = 2;
    }else if (r > 0.32 && r < 0.48) {
        diceLeft.src = "assets/img/dice_3.png";
        value = 3;
    }else if (r > 0.48 && r < 0.64) {
        diceLeft.src = "assets/img/dice_4.png";
        value = 4;
    }else if (r > 0.64 && r < 0.82) {
        diceLeft.src = "assets/img/dice_5.png";
        value = 5;
    }else {
        diceLeft.src = "assets/img/dice_6.png";
        value = 6;
    }
    
    return value;
}

function rollRightDice() {
    var value = 0;
    var r = Math.random();
    
    //map the random number with the dice img
    if (r < 0.16) {
        diceRight.src = "assets/img/dice_1.png";
        value = 1;
    }else if (r > 0.16 && r < 0.32) {
        diceRight.src = "assets/img/dice_2.png";
        value = 2;
    }else if (r > 0.32 && r < 0.48) {
        diceRight.src = "assets/img/dice_3.png";
        value = 3;
    }else if (r > 0.48 && r < 0.64) {
        diceRight.src = "assets/img/dice_4.png";
        value = 4;
    }else if (r > 0.64 && r < 0.82) {
        diceRight.src = "assets/img/dice_5.png";
        value = 5;
    }else {
        diceRight.src = "assets/img/dice_6.png";
        value = 6;
    }
    
    return value;
}