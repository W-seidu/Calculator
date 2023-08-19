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
const displayScreen = document.querySelector("#screentwo")

const buttons =  document.querySelectorAll("button");

let currentInput = "";


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        if (buttonText === "AC") {
            currentInput = "";
            updateScreen();
        } else if (buttonText === "DEL") {
            currentInput = currentInput.slice(0, -1);
            updateScreen();
        } else if ((buttonText === "+") || (buttonText === "-") || (buttonText === "*")
        || (buttonText === "/")) {
            storeOperator = buttonText;
            currentInput += buttonText;
            updateScreen();
            storeFirstNumber = +currentInput.slice(0, currentInput.indexOf(buttonText)); 
        }  else if (buttonText === "=") {
            storeSecondNumber = +currentInput.slice(currentInput.indexOf(storeOperator) + 1);
            currentInput = operate(storeFirstNumber, storeSecondNumber, storeOperator);
            updateScreen();
        } else {
            currentInput += buttonText;
            updateScreen();
        }
    });
});

function updateScreen() {
    screen.value = currentInput;
    if (currentInput.includes("=")) {
        screen.value = currentInput;
        displayScreen.value = currentInput.slice(0, -1)
    };
}

// function displayScreen() {
//     displayScreen.value = currentInput.slice(0, -1);
// }


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


