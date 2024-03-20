let firstNum;
let secondNum;
let operator;
let displayValue;

buttonContainer = document.querySelector("#button-container")
// There are 6 rows of buttons on the TI-108, each with 4 buttons
for (let i = 0; i < 6; i++) {
    let row = document.createElement("div")
    buttonContainer.appendChild(row);
    row.setAttribute("class", "row");
    for (let j = 0; j < 4; j++) {
        let button = document.createElement("button");
        if (j === 3) {
            button.setAttribute("class", "right-button");
        } else {
            button.setAttribute("class", "left-button");
        }
        row.appendChild(button);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    if (operator == "+") {
        return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
}