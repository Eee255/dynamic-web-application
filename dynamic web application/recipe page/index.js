let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeElement = document.getElementById("recipeTitle");
recipeElement.textContent = recipeObj.title;
let imageElement = document.getElementById("imageSource");
imageElement.src = recipeObj.imgSrc;

function grocariesList(items) {
    let ingrediansElement = document.getElementById("ingredientsList");
    let listsElement = document.createElement('li');
    listsElement.textContent = items;
    listsElement.style.color = white;
    ingrediansElement.appendChild(listsElement);
}
for (let items of recipeObj.ingredients) {
    grocariesList(items);
}