async function getRecipes() {
    const url = 'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image';
    const response = await fetch(url);
    const data = await response.json();

    const recipesContainer = document.getElementsByClassName('recipes')[0];
    recipesContainer.innerHTML = ''; 

    data.recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
          <h1>${recipe.id}</h1>
            <h2>${recipe.name}</h2> 
            <img src="${recipe.image}" alt="${recipe.name}" style="width:300px; height:auto;"> 
        `;
        recipesContainer.appendChild(recipeDiv);
    });
}

getRecipes();

