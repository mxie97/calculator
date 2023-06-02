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
    return operator(a, b);
}

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', populateDisplay)
})

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', populateDisplay)
})

function populateDisplay() {
    let input = this.textContent;
    if (!a && typeof Number(input) === 'number') {
        a = parseInt(input);
    } else if (input === '+' || input === '-' || input === 'x' || input === '÷') {
        operator = this.id;
    } else b = parseInt(input);
    display.textContent = display.textContent + this.textContent;
}
