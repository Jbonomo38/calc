const consoleBox = document.querySelector('.console');
let currentOperator;
let firstValue;
let secondValue;
let result;

// add eventListeners to each number
// const numbers = document.querySelectorAll('.number');
// numbers.forEach((num) => addEventListener('click', typeNumber(num)));
document.querySelectorAll('.number').forEach((num) => num.addEventListener('click', () => typeNumber(num)));

// function for eventListener
function typeNumber(num) {
    if(consoleBox.textContent === '0' || consoleBox.textContent === 'ERROR') consoleBox.textContent = num.textContent;
    else if(consoleBox.textContent === firstValue) consoleBox.textContent = num.textContent;
    else consoleBox.textContent += num.textContent;
}

// add eventListeners to each operator
document.querySelectorAll('.operator').forEach((operator) => operator.addEventListener('click', () => typeOperator(operator)));

// function for eventListener
function typeOperator(operator) {
    if(operator.id === 'divide') {
        currentOperator = "/";
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'multiply') {
        currentOperator = "*";
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'subtract') {
        currentOperator = "-";
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'add') {
        currentOperator = "+";
        firstValue = consoleBox.textContent;
    }
    if(consoleBox.textContent === 'ERROR') firstValue = 0;
    if(operator.id === 'equals') {
        secondValue = consoleBox.textContent;
        result = calculate(firstValue, secondValue, currentOperator);
        if(result.toString() === 'Infinity') {
            consoleBox.textContent = 'ERROR';
            clearLets();
            firstValue = 0;
        } else {
            consoleBox.textContent = result;
            clearLets();
            firstValue = result;
        }
        
    }
}

function calculate(a, b, operator) {
    if(operator === "/") {
        return a / b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "+") {
        return +a + +b;
    }
}

// add eventListeners to the operator-always (AC, +/-, %)
document.querySelectorAll('.operator-always').forEach((operator) => operator.addEventListener('click', () => operatorAlways(operator)));

function operatorAlways(operator) {
    if(operator.textContent === 'AC' ) {
        consoleBox.textContent = 0;
        clearLets();
    }

    if(operator.textContent === '+/-' ) {
        consoleBox.textContent = consoleBox.textContent * -1;
    }

    if(operator.textContent === '%' ) {
        consoleBox.textContent = consoleBox.textContent / 100;
    }
}

function clearLets() {
    secondValue = null;
    currentOperator = null;
    result = null;
}