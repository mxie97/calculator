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

function populateDisplay() {
    let input = this.textContent;

    if (input === '+' || input === '-' || input === 'x' || input === '÷') {
        // check first if operator already exists
        if (operator) {
            evaluateDisplay();
        }
        a = parseInt(display.textContent);
        operator = this.id;
    } 
    display.textContent = display.textContent + input;
}

equalsButton.addEventListener('click', evaluateDisplay)

function evaluateDisplay() {
    let bStartIndex = a.toString().length + 1;
    b = parseInt(display.textContent.slice(bStartIndex));
    if (a === undefined || operator === undefined || b === undefined) {
        display.textContent = 'ERROR - press CLEAR to continue';
    } else if (operator === 'divide' && b === 0) {
        display.textContent = '>:( no dividing by 0 allowed - press CLEAR to continue';
    } else {
        let result = operate(a, operator, b);
        display.textContent = result;
        resetVariables();
    }
    
}

function resetVariables() {
    a = undefined;
    b = undefined;
    operator = undefined;
}

clearButton.addEventListener('click', reset)

function reset() {
    resetVariables();
    display.textContent = '';
}