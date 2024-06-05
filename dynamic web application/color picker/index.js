let hexCode = document.getElementById("selectedColorHexCode")
let backgroundChange = document.getElementById("colorPickerContainer");

function whiteButton() {
    hexCode.textContent = "#e0e0e0";
    backgroundChange.style.backgroundColor = "#e0e0e0";
}

function greenButton() {
    hexCode.textContent = "#6fcf97";
    backgroundChange.style.backgroundColor = "#6fcf97";
}

function blueButton() {
    hexCode.textContent = "#56ccf2";
    backgroundChange.style.backgroundColor = "#56ccf2";
}

function purpleButton() {
    hexCode.textContent = "#bb6bd9";
    backgroundChange.style.backgroundColor = "#bb6bd9";
}