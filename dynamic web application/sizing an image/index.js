let minImageSize = 100;
let maxImageSize = 300;
let originalImageSize = 200;
let decreaseSize = "Can't Visible. Increase the of the Image";
let IncreaseSize = "Too Big. Decrese the Size of the Image";
let warningInputMsg = document.getElementById("warningMessage");

document.getElementById("image").style.width = originalImageSize + "px";
document.getElementById("imageWidth").textContent = originalImageSize + "px";

function decrementButton() {

    if (minImageSize >= originalImageSize) {
        warningInputMsg.textContent = decreaseSize;
        document.getElementById("imageWidth").textContent = originalImageSize + "px";
    } else {
        warningInputMsg.textContent = "";
        originalImageSize = originalImageSize - 5;
        let updatedValue = originalImageSize;
        document.getElementById("image").style.width = updatedValue + "px";
        document.getElementById("imageWidth").textContent = updatedValue + "px";
    }
}

function incrementButton() {
    if (maxImageSize <= originalImageSize) {
        warningInputMsg.textContent = IncreaseSize;
        document.getElementById("imageWidth").textContent = originalImageSize + "px";
    } else {
        warningInputMsg.textContent = "";
        originalImageSize = originalImageSize + 5;

        document.getElementById("image").style.width = originalImageSize + "px";
        document.getElementById("imageWidth").textContent = originalImageSize + "px";
    }
}