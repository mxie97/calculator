const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operator-button')
const equalsButton = document.getElementById('equals-button')
const clearButton = document.getElementById('clear-button')
const display = document.getElementById('display')



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let a;
let b;
let operator;

function operate(a, operator, b) {
    if (operator === 'add') return add(a,b);
    else if (operator === 'subtract') return subtract(a,b);
    else if (operator === 'multiply') return multiply(a,b);
    else if (operator === 'divide') return divide(a,b);
}

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', populateDisplay)
})

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', populateDisplay)
})

equalsButton.addEventListener('click', evaluateDisplay)

function populateDisplay() {
    let input = this.textContent;
    if (input === '+' || input === '-' || input === 'x' || input === '÷') {
        a = parseInt(display.textContent);
        operator = this.id;
    } 
    display.textContent = display.textContent + input;
}

function evaluateDisplay() {
    let bStartIndex = a.toString().length + 1;
    b = parseInt(display.textContent.slice(bStartIndex));
    result = operate(a, operator, b);
    display.textContent = result;
}
