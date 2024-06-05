let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let containerElement = document.getElementById("groceryListContainer");
containerElement.classList.add("bg-container");

let headingElement = document.createElement('h1');
headingElement.textContent = "Grocery List";
headingElement.classList.add("heading-element", "pb-3");
containerElement.appendChild(headingElement);

let newContainerElement = document.createElement('ul');
newContainerElement.classList.add("bg-list-container");
containerElement.appendChild(newContainerElement);

function groceries(items) {
    let listItems = document.createElement('li');
    listItems.textContent = items;
    listItems.classList.add("list-items");
    newContainerElement.appendChild(listItems);
}
for (let items of groceryList) {
    groceries(items);
}