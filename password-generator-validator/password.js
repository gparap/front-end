// © 2024 gparap

/* Switch screens between generator & validator. */
function togglePasswordScreens() {
    //get the info element visibility
    let infoElement = document.getElementById("password-info");
    let infoElementStyle = window.getComputedStyle(infoElement);
    let infoElementVisibility = infoElementStyle.visibility;

    //get the generator & validator elements
    let generatorElement = document.getElementById("generator");
    let validatorElement = document.getElementById("validator");

    //toggle between screens based on info visibility
    //!!! info visibility should match with validator
    if (infoElementVisibility === "hidden") {
        //show the validator
        generatorElement.style.display = "none";
        validatorElement.style.display = "flex"

        //show info
        infoElement.style.visibility = "visible";

    } else {
        //show the generator
        generatorElement.style.display = "flex";
        validatorElement.style.display = "none";

        //hide info
        infoElement.style.visibility = "hidden";
    }
}

/* Update the password input element with a random generated password. */
function displayGeneratedPassword() {
    //get the length of the password based on the the radio buttons
    let radio08 = document.getElementById("flexRadio08CharsPassword");
    if (radio08.checked) { length = 8; }
    let radio16 = document.getElementById("flexRadio16CharsPassword");
    if (radio16.checked) { length = 16; }
    let radio24 = document.getElementById("flexRadio24CharsPassword");
    if (radio24.checked) { length = 24; }

    //generate password by
    // 1. Generating random numbers between 32 and 126 and 
    // 2. Converting them to their ASCII characters. 
    var password = "";
    for (var i = 0; i < length - 1; i++) {
        let random = Math.floor(Math.random() * (127 - 32) + 32);
        let randomToChar = String.fromCharCode(random);
        password += randomToChar;
    }

    //update the password input element
    let element = document.getElementById("generatorInputText");
    element.value = password;
}

/* Validate a user-typed password (aka show password strength). */
function displayValidatedPasswordStrength() {
    //create a helper array to hold password validations
    let passwordStrengthArray = new Array(5).fill(0);

    //get the password from the input element
    let passwordElement = document.getElementById("validatorInputText");
    if (passwordElement.value === "") { alert("Pleasen enter a password!"); }
    let password = passwordElement.value;

    //START PASSWORD VALIDATION
    //check if the password is not short (but not long) (must be >=8 and <16)
    if (password.length >= 8) passwordStrengthArray[0] = 1;
    //check if password contains at least 2 digits (0..9)
    if (/([0-9].*[0-9])/.test(password)) passwordStrengthArray[1] = 1;
    //check if password contains at least 2 uppercase letters (A..Z)
    if (/([A-Z].*[A-Z])/.test(password)) passwordStrengthArray[2] = 1;
    //check if password contains at least 2 special characters (not in 0..9, a..z or A..Z)
    if (/([^A-Za-z0-9].*[^A-Za-z0-9])/.test(password)) passwordStrengthArray[3] = 1;
    //check if the password is not long enough (must be >=16)
    if (password.length >= 16) passwordStrengthArray[4] = 1;
        
    //get the strength of the array;
    let passwordStrength = 0;
    passwordStrengthArray.forEach(element => {
        passwordStrength += element;
    });

    //update the password strength element
    let passwordStrengthElement = document.getElementById("passwordStrength");
    passwordStrengthElement.innerText = "Password Strength is "+ passwordStrength + " out of 5";
}

/* Copy the generated password to clipboard and alert about it. */
function copyPasswordToClipboard() {
    let password = document.getElementById("generatorInputText").value.toString();
    if (password != "") {
        navigator.clipboard.writeText(password);
        alert("Password copied.");
    }
}

