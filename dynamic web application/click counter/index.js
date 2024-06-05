let countValueElement = document.getElementById("counterValue");

function onClick() {
    let updatedCount = countValueElement.textContent;
    updatedCount = parseInt(updatedCount) + 1;
    countValueElement.textContent = updatedCount;
    localStorage.setItem("clickCount", updatedCount);
    localStorage.getItem("clickCount");
}

let buttonElement = document.getElementById("incrementBtn");
buttonElement.onclick = function() {
    onClick();
}