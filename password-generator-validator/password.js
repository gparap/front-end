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