let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];
let unorderedElement = document.getElementById("unorderedId");

function removingChild(paragraphId) {
let finalOut = document.getElementById(paragraphId);
unorderedElement.removeChild(finalOut);

}

function orderItems(items) {
let itemnameElement = items.itemName;
let buttonId = "button" + items.uniqueNo;
let paragraphId = "item" + items.uniqueNo;

let listElements = document.createElement("li");
listElements.classList.add("d-flex", "flex-row");
listElements.id = paragraphId;
unorderedElement.appendChild(listElements);

let paragraphElement = document.createElement('p');
paragraphElement.textContent = itemnameElement;

listElements.appendChild(paragraphElement);

let buttonElement = document.createElement('button');
buttonElement.id = buttonId;
buttonElement.classList.add("button");
buttonElement.textContent = "Cancel";
buttonElement.onclick = function() {
    removingChild(paragraphId);
};
listElements.appendChild(buttonElement);
}
for (let items of itemList) {
orderItems(items);
}