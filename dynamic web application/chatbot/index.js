let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let containerElement = document.getElementById("chatContainer");
let buttonElement = document.getElementById("sendMsgBtn");

function getMessage() {
    let length = chatbotMsgList.length;
    let indexMsg = chatbotMsgList[Math.ceil(Math.random() * length) - 1];
    let newContainer2 = document.createElement('div');
    newContainer2.classList.add("msg-from-chatbot");
    containerElement.appendChild(newContainer2);

    let spanElement1 = document.createElement('span');
    spanElement1.textContent = indexMsg;
    spanElement1.classList.add("msg-from-chatbot");
    newContainer2.appendChild(spanElement1);
}

function sendMessage() {
    let userElement = document.getElementById("userInput");
    let userElementValue = userElement.value;

    let newContainer = document.createElement('div');
    newContainer.classList.add("msg-to-chatbot-container");
    containerElement.appendChild(newContainer);

    let spanElement = document.createElement('span');
    spanElement.textContent = userElementValue;
    spanElement.classList.add("msg-to-chatbot");
    newContainer.appendChild(spanElement);

    userElement.value = "";
    getMessage();
}
buttonElement.onclick = function() {
    sendMessage();
}