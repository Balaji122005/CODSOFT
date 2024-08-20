const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
let currentInput = '';
let currentOperator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            currentOperator = '';
            display.innerText = '0';
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || '0';
        } else if (value === '=') {
            if (currentInput && previousInput && currentOperator) {
                currentInput = eval(`${previousInput}${currentOperator}${currentInput}`);
                display.innerText = currentInput;
                currentOperator = '';
                previousInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentOperator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});
