// gparap © 2022
// Form Validator

function validate() {
    //TODO: clear previous errors
    validateUsername();
    validateEmail();
    validatePassword();
    validatePasswordConfirm()
}

function validateUsername() {
    let username = document.getElementById("username");

    // Username must be > 4 chars
    if (username.value.length <= 4) {
        let errorUsername = document.getElementById("error-username");
        errorUsername.innerHTML = "Username must be > 4 chars";
        username.classList.add(".error");
    }
}

function validateEmail() {
    let email = document.getElementById("email");

    //check if email contains the <<@>> and the <<.>> symbols
    if (!email.value.includes("@") || !email.value.includes(".")) {
        let errorEmail = document.getElementById("error-email");
        errorEmail.innerHTML = "E-mail is not valid.";
        email.classList.add(".error");
    }
}

function validatePassword() {
    let password = document.getElementById("password");
    let errorPassword = document.getElementById("error-password");

    //check if password is too small
    if (password.value.length < 6) {
        errorPassword.innerHTML = "password must be >= 6 chars";
        password.classList.add(".error");
    }

    //check if password contains at least 2 special characters
    const pattern = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]+/g;
    if (!pattern.test(password.value)) {
        errorPassword.innerHTML = "Password must contain at least one special char";
        password.classList.add(".error");
       }
}

function validatePasswordConfirm() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("password-confirm");

    //check if passwords matches
    if (password.value !== confirm.value) {
        let errorConfirm = document.getElementById("error-password-confirm");
        errorConfirm.innerHTML = "Passwords do not match";
        confirm.classList.add(".error");
    }
}