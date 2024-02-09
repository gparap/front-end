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
    let recipeDescription = document.getElementById('modalRecipeDescription');
    let recipeIngredients = document.getElementById('modalRecipeIngredients');
    let recipeInstructions = document.getElementById('modalRecipeInstructions');
    let image = document.getElementById('modalRecipeImage');

    //Update the modal with the recipe details
    //title 
    title.innerHTML = recipes[id - 1].title;
    //image
    image.src = recipes[id - 1].image;
    //description
    recipeDescription.innerHTML = recipes[id - 1].description;
    //ingredients
    recipeIngredients.innerHTML = `<p><b>Ingredients:</b><br /></p>`;
    recipes[id - 1].ingredients.forEach(ingredient => {
        recipeIngredients.innerHTML += `${ingredient}</br>`;
    });
    //instructions
    recipeInstructions.innerHTML = `<p><b>Instructions:</b><br /></p>`;
    recipes[id - 1].instructions.forEach(instruction => {
        recipeInstructions.innerHTML += `${instruction}</br>`;
    });
}

/* Displays all recipes on the page. */
const viewRecipes = (recipesData) => {
    const container = document.getElementById('container-recipes');

    //append recipe to container
    recipesData.forEach((recipe) => {
        //get recipe's categories, if has extra 
        //ie. basic -> meat, extra -> featured
        const categories = recipe.category.split(',');
        let categoryBasic = categories[0];
        let categoryExtra = categories[1];

        //append recipe
        if (categoryExtra === '') {
            container.innerHTML += `
            <div id="${recipe.id}" class="col-md-4 filter-recipe-all filter-recipe-${categoryBasic}">
                <div class="card">
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
        } else {
            container.innerHTML += `
            <div id="${recipe.id}" class="col-md-4 filter-recipe-all filter-recipe-${categoryBasic} filter-recipe-${categoryExtra}">
                <div class="card">
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
        }
    });
};

/* Shows or hides recipes based on their categories. */
function filterCategory(category) {
    //get all the recipe elements on the page
    let recipeElements = document.querySelectorAll('.filter-recipe-all, filter-recipe-recent, filter-recipe-reatured, \
    .filter-recipe-meat, .filter-recipe-pasta, .filter-recipe-salad');

    //filter recipe elements based on category
    recipeElements.forEach(element => {
        if (element.classList.contains(category)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

/* Search recipes based on their names or their ingredients. */
function searchRecipes() {
    //get search input
    let inputText = document.getElementById('search-recipe');
    let searchText = inputText.value.toLowerCase();

    //search
    recipes.forEach(recipe => {
        //hide all recipes
        let recipeElement = document.getElementById(recipe.id);
        recipeElement.style.display = 'none';

        //search in the recipe's title
        if (recipe.title.toLowerCase().includes(searchText)) {
            //show the element that holds the recipe
            recipeElement.style.display = 'block';
        }

        //search in the recipe's ingredients
        recipe.ingredients.forEach(ingredient => {
            if (ingredient.toLowerCase().includes(searchText)) {
                //show the element that holds the recipe
                recipeElement.style.display = 'block';
            }
        });
    });
}
