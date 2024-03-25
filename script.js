let firstNum = "";
let secondNum = "";
let displayValue = "";
let operator = "";

const buttonText = ["+/-", "sqrt", "%", "div", "MRC", "M-", "M+", "X",
                "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=",
                "ON/C", "0", ".", "blank"];
const operators = ["X", "-", "+", "div"]

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

let buttons = buttonContainer.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = buttonText[i];
    buttons[i].setAttribute("id", buttonText[i]);
}

let screen = document.querySelector("#screen");
screen.textContent = "0"
window.addEventListener("click", (event) => {
    let buttonName = event.target.id;  
    if (buttonName === "ON/C") {
        firstNum = "";
        secondNum = "";
        operator = "";
        displayValue = "";
        screen.textContent = 0;
    }
    if (buttonName >= "0" && buttonName <= "9") {
        displayValue += buttonName;
        screen.textContent = displayValue;
    } else if (operators.includes(buttonName)) {
        // If this is not the first operator in our operation
        if (operator !== "") {
            secondNum = displayValue;
            firstNum = operate(operator, +firstNum, +secondNum).toString();
            screen.textContent = firstNum;
        } else {
            firstNum = displayValue;
        }
        operator = buttonName;
        displayValue = "";
    } else if (buttonName === "=") {
        if (firstNum == "" || operator == "") {
            alert("Hey! You can't do that!")
            // Put clear function here once it's done
        }
        secondNum = displayValue;
        let res = operate(operator, +firstNum, +secondNum).toString();
        displayValue = res;
        screen.textContent = displayValue;
        operator = "";
        secondNum = "";
    }
})

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
    } else if (operator == "X") {
        return multiply(firstNum, secondNum);
    } else if (operator == "div") {
        if (secondNum === 0) {
            alert("No! Division by zero bad!")
        } else {
            return divide(firstNum, secondNum);
        }
    }
}




