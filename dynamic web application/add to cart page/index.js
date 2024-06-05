let containerElement = document.getElementById("containerRow");

function onClick(list) {
    let outputElement = document.getElementById(list);
    let elementValue = outputElement.value;

    let orderedElements = document.createElement('li');
    orderedElements.classList.add("list-element");
    orderedElements.textContent = elementValue;
    outputElement.value = "";
    unorderdElements.appendChild(orderedElements);


}
let columnContainerElement = document.createElement('div');
columnContainerElement.classList.add("col-12");
containerElement.appendChild(columnContainerElement);

let headingElement = document.createElement('h1');
headingElement.textContent = "Add To Cart";
headingElement.classList.add("heading-element");
columnContainerElement.appendChild(headingElement);

let subContainerElement = document.createElement('div');
subContainerElement.classList.add("d-flex", "flex-row");
columnContainerElement.appendChild(subContainerElement);

let inputElement = document.createElement('input');
inputElement.id = "cartItemTextInput";
inputElement.type = "text";
subContainerElement.appendChild(inputElement);

let addButton = document.createElement('button');
addButton.classList.add("bg-primary", "m-2");
addButton.textContent = "Add";
addButton.id = "addBtn";
addButton.onclick = function() {
    onClick("cartItemTextInput");
};
subContainerElement.appendChild(addButton);

let myCartElement = document.createElement('p');
myCartElement.textContent = "My Cart items";
myCartElement.classList.add("paragraph");
columnContainerElement.appendChild(myCartElement);

let newContainerElement = document.createElement('div');
columnContainerElement.appendChild(newContainerElement);

let unorderdElements = document.createElement('ul');
unorderdElements.classList.add("d-flex", "flex-column");
columnContainerElement.appendChild(unorderdElements);