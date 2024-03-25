let firstNum = "";
let secondNum = "";
let displayValue = "";
let operator = "";

const buttonText = ["+/-", "sqrt", "%", "div", "MRC", "M-", "M+", "X",
                "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=",
                "ON/C", "0", ".", "blank"];
const operators = ["X", "-", "+", "/"]

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
window.addEventListener("click", (event) => {
    let buttonName = event.target.id;  
    if (buttonName >= "0" && buttonName <= "9") {
        displayValue += buttonName;
        screen.textContent = displayValue;
    } else if (operators.includes(buttonName)) {
        // If this is an operator stacked on top of a preceding operator
        if (operator !== "") {
            // Save the second number 
            secondNum = displayValue;
            // Calculate the result of the first operation 
            let res = operate(operator, +firstNum, +secondNum);
            // Save that under the first number
            firstNum = res.toString();
            // Display the result 
            screen.textContent = firstNum;
        } else {
            // If this is the first operator we've seen, lock in the first num
            firstNum = displayValue;
        }
        // Update the operator 
        operator = buttonName;
        // Clear out display value for second number to be typed 
        displayValue = "";
    } else if (buttonName === "=") {
        secondNum = displayValue;
        let res = operate(operator, +firstNum, +secondNum);
        screen.textContent = res.toString();
        firstNum = res.toString();
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
    } else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
}




