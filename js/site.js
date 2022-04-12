// Step One - get -controller accept requrests
function getMessage() {
    let msg = document.getElementById("message").value;

    if (msg == '') {
        alert('You must enter a message!');
    } else {
        msg = msg.toLowerCase();

        let revMsg = reverseMessageB(msg);
        displayMessage(revMsg);
    }

}

function reverseMessageA(msg) {

    let revMessage = '';

    // decrimenting loop
    for (let index = msg.length - 1; index >= 0; index--) {

        let char = msg[index];
        revMessage += char;

    }

    return revMessage;
}

function reverseMessageB(msg) {

    let revMessage = '';
    revMessage = msg.split("").reverse("").join("");

    return revMessage
}

function displayMessage(message) {

    element = document.getElementById("results");
    element.innerHTML = message;

}