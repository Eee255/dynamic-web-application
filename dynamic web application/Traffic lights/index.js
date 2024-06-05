let stopVariable = document.getElementById("stopButton");
let readyVariable = document.getElementById("readyButton");
let buttonVariable = document.getElementById("goButton");

function buttonStop() {
    stopVariable.style.backgroundColor = "#cf1124";
    document.getElementById("stopLight").style.backgroundColor = "#cf1124";
    buttonVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("goLight").style.backgroundColor = " #4b5069";
    readyVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("readyLight").style.backgroundColor = " #4b5069";
}

function buttonReady() {
    readyVariable.style.backgroundColor = "#f7c948";
    document.getElementById("readyLight").style.backgroundColor = "#f7c948";
    stopVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("stopLight").style.backgroundColor = " #4b5069";
    buttonVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("goLight").style.backgroundColor = " #4b5069";

}

function buttonGo() {
    buttonVariable.style.backgroundColor = "#199473";
    document.getElementById("goLight").style.backgroundColor = "#199473";
    stopVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("stopLight").style.backgroundColor = " #4b5069";
    readyVariable.style.backgroundColor = " #1f1d41";
    document.getElementById("readyLight").style.backgroundColor = " #4b5069";
}