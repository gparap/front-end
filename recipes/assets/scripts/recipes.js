// © 2024 gparap

/* Keeper of all recipes data. */
let recipes = null;

/* Fetches all recipes data from an API. */
function initRecipes() {
    fetch('<<REPLACE-WITH-API>>')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            recipes = data.recipes;
            viewRecipes(data.recipes);
            shortenRecipes();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

/* Handles the shortened display of all the recipes texts after page loading. */
function shortenRecipes() {
    const recipesTexts = document.querySelectorAll('.card-text');
    let i = 0;
    recipesTexts.forEach(element => {
        //remove extra spaces and line breaks
        //!!! when applying a code formatting
        const formattedText = recipes[i].description.replace(/\s+/g, ' ').trim();

        //give the element the shortend text
        element.innerHTML = getShortendText(formattedText);

        i++;
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
    recipe.innerHTML = `<p>${recipes[id - 1].description}<br><br>${recipes[id - 1].recipe}</p>`;
    image.src = recipes[id - 1].image;
}

/* Displays all recipes on the page. */
const viewRecipes = (recipesData) => {
    const container = document.getElementById('container-recipes');

    //append recipe to container
    recipesData.forEach((recipe) => {
        container.innerHTML +=`
            <div class="col-md-4">
                <div class="card" id="${recipe.id}">
                    <img class="card-img-top w-100 d-block" src="${recipe.image}">
                    <div class="card-body">
                        <h4 class="card-title">
                            <p>${recipe.title}</p>
                        </h4>
                        <p class="card-text">${recipe.description}</p>
                        <button onclick="viewRecipe(${recipe.id});" class="btn btn-dark" type="button"
                            data-bs-toggle="modal" data-bs-target="#recipeModal">View Recipe</button>
                    </div>
                </div>
            </div>`;
    });
};
