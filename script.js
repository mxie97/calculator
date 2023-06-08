const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operator-button')
const equalsButton = document.getElementById('equals-button')
const clearButton = document.getElementById('clear-button')
const topDisplay = document.getElementById('top-display')
const bottomDisplay = document.getElementById('bottom-display')


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
    if (operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === 'x') return multiply(a,b);
    else if (operator === '÷') return divide(a,b);
}

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => populateDisplay(operatorButton.textContent))
})

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => populateDisplay(numberButton.textContent))
})

function populateDisplay(input) {

    // input = this.textContent;


    if (input === '+' || input === '-' || input === 'x' || input === '÷') {
        // check first if operator already exists
        if (operator) {
            evaluateDisplay();
        }
        a = Number(bottomDisplay.textContent);
        operator = input;
        topDisplay.textContent = a + input;
        bottomDisplay.textContent = '';
        
    } else {
        bottomDisplay.textContent += input;
    }
    
}

equalsButton.addEventListener('click', evaluateDisplay)

function evaluateDisplay() {
    //check if anything has been entered for the second value
    if (bottomDisplay.textContent==='') {
        b = undefined;
    } else b = Number(bottomDisplay.textContent)
    
    if (a === undefined || operator === undefined || b === undefined) {
        topDisplay.textContent = 'ERROR! Press CLEAR to continue';
        bottomDisplay.textContent = '';
    } else if (operator === 'divide' && b === 0) {
        topDisplay.textContent = '>:( no dividing by 0 allowed! Press CLEAR to continue';
        bottomDisplay.textContent = '';
    } else {
        let result = operate(a, operator, b);
        if (result.toString().length > 8) {
            result = result.toFixed(7);
        }
        bottomDisplay.textContent = result;
        topDisplay.textContent = topDisplay.textContent + b + '=';
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
    topDisplay.textContent = '';
    bottomDisplay.textContent = '';
}

window.addEventListener('keydown', takeKeyboardInput)

function takeKeyboardInput(e) {
    if ( ( e.key >= 0 && e.key <= 9 ) || e.key == '+' || e.key == '-' || e.key == 'x' || e.key == '.') {
        populateDisplay(e.key);
    } else if (e.key == '/') {
        populateDisplay('÷')
    } else if (e.key == '=') {
        evaluateDisplay();
    }
}