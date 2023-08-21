const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let storeFirstNumber;
let storeSecondNumber;
let storeOperator;

const screen = document.querySelector("#screenone");
const displayScreen = document.querySelector("#screentwo");

const buttons =  document.querySelectorAll("button");

let currentInput = "";
let displayInput = "";
let decimalAllowed = true;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        if (buttonText === "AC") {
            currentInput = "";
            displayInput = "";
            updateScreen();
        } else if (buttonText === "DEL") {
            currentInput = currentInput.slice(0, -1);
            updateScreen();
        } else if ((buttonText === "+") || (buttonText === "-") || (buttonText === "*")
        || (buttonText === "/")) {
            storeOperator = buttonText;
            storeFirstNumber = +currentInput; 
            displayInput = `${currentInput} ${buttonText}`;
            currentInput = "";
            updateScreen();
        }  else if (buttonText === "=") {
            storeSecondNumber = +currentInput.slice(currentInput.indexOf(storeOperator));
            currentInput = operate(storeFirstNumber, storeSecondNumber, storeOperator);
            displayInput = `${storeFirstNumber} ${storeOperator} ${storeSecondNumber}`;
            updateScreen();
        } else if ((buttonText === ".") && (currentInput.includes(buttonText))) {
            decimalAllowed = false;
        } else {
            currentInput += buttonText;
            updateScreen();
        }
    });
});

function updateScreen() {
    screen.value = currentInput;
    displayScreen.value = displayInput;
}




const operate = function(x, y, opr) { 
    x = storeFirstNumber;
    y = storeSecondNumber;
    opr = storeOperator;
    if (opr === "+") {
        return add(x, y);
    } else if (opr === "-") {
        return subtract(x, y);
    } else if (opr === "*") {
        return multiply(x, y);
    } else if (opr === "/") {
        return divide(x, y);
    }
}

