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

let firstNumber;
let secondNumber;
let operator;

const operate = function(x, y, opr) { 
    z = ['+', '-', '*', '/'];
    if (opr === z[0]) {
        add(x, y);
    } else if (opr === z[1]) {
        subtract(x, y);
    } else if (opr === z[2]) {
        multiply(x, y);
    } else if (opr === z[3]) {
        divide(x, y);
    }
}

operate(5, 4, '+');
