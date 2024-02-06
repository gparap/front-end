// © 2024 gparap

/* Handles the shortened display of all the recipes texts after page loading. */
function initRecipes() {
    const recipesTexts = document.querySelectorAll('.card-text');
    recipesTexts.forEach(element => {
        //remove extra spaces and line breaks
        //!!! when applying a code formatting
        const formattedText = element.textContent.replace(/\s+/g, ' ').trim();

        //keep the full text of the recipe
        let recipe

        //give the element the shortend text
        element.innerHTML = getShortendText(formattedText);
    });
}

/* Returns a shortened version of a full text. */
function getShortendText(fullText) {
    maxWords = 30;  //max default

    //split the full texts into words
    let words = fullText.split(' ');

    //shorten text to default max words
    let shortenedText = "";
    let counter = maxWords;
    for (let i = 0; i < maxWords; i++) {
        shortenedText += words[i] + ' ';
    }
    shortenedText += '...';
    shortenedText = shortenedText.trim();

    //return the shortened text version
    return shortenedText;
}

/**
 * Displays the full recipe inside a modal.
 * @param {*} id the selected recipe's id
 */
function viewRecipe(id) {
    //get the modal's elements
    let title = document.getElementById('modalRecipeTitle');
    let recipe = document.getElementById('modalRecipeContent');
    let image = document.getElementById('modalRecipeImage');

    //update the modal with the recipe
    title.innerHTML = recipes[id - 1].title;
    recipe.innerHTML = recipes[id - 1].recipe;
    image.src = "assets/img/" + recipes[id - 1].image;
}
