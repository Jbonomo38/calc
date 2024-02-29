const consoleBox = document.querySelector('.console');
let currentOperator;
let firstValue;
let secondValue;

// add eventListeners to each number
// const numbers = document.querySelectorAll('.number');
// numbers.forEach((num) => addEventListener('click', typeNumber(num)));
document.querySelectorAll('.number').forEach((num) => num.addEventListener('click', () => typeNumber(num)));

// function for eventListener
function typeNumber(num) {
    console.log(consoleBox.textContent);
    if(consoleBox.textContent === '0') consoleBox.textContent = num.textContent;
    else consoleBox.textContent += num.textContent;
}

// add eventListeners to each operator
document.querySelectorAll('.operator').forEach((operator) => operator.addEventListener('click', () => operate(operator)));

// function for eventListener
function typeOperator(operator) {
    if(operator.id === 'divide') {
        currentOperator = "/";
        firstValue = consoleBox.textContent;
    }
    if(operator.id === 'multiple') {
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
    if(operator.id === 'equals') {
        currentOperator = "/";
        
    }
}