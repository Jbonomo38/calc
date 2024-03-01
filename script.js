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
    console.log(consoleBox.textContent);
    if(consoleBox.textContent === '0') consoleBox.textContent = num.textContent;
    else if(consoleBox.textContent === firstValue) consoleBox.textContent = num.textContent;
    else consoleBox.textContent += num.textContent;
}

// add eventListeners to each operator
document.querySelectorAll('.operator').forEach((operator) => operator.addEventListener('click', () => typeOperator(operator)));

// function for eventListener
function typeOperator(operator) {
    if(operator.id === 'divide') {
        // console.log("divide");
        currentOperator = "/";
        // console.log(currentOperator);
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'multiply') {
        // console.log("multiply");
        currentOperator = "*";
        // console.log(currentOperator);
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'subtract') {
        // console.log("subtract");
        currentOperator = "-";
        // console.log(currentOperator);
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'add') {
        // console.log("add");
        currentOperator = "+";
        // console.log(currentOperator);
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'equals') {
        // console.log("equals");
        secondValue = consoleBox.textContent;
        result = calculate(firstValue, secondValue, currentOperator);
        console.log(`firstValue: ${firstValue}, secondValue: ${secondValue}, currentOperator: ${currentOperator}`);
        console.log(result);
        consoleBox.textContent = result;
        clearLets();
        firstValue = result;
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
        console.log('AC');
        consoleBox.textContent = 0;
        clearLets();
    }

    if(operator.textContent === '+/-' ) {
        console.log('+/-');
        consoleBox.textContent = consoleBox.textContent * -1;
    }

    if(operator.textContent === '%' ) {
        console.log('%');
        consoleBox.textContent = consoleBox.textContent / 100;
    }
}

function clearLets() {
    secondValue = null;
    currentOperator = null;
    result = null;
}