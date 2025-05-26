function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "can't divide by 0";
    }
    return a / b;
}

let num1;
let num2;
let operator = '';
let answer;

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            answer = add(num1, num2);
            break;
        case '-':
            answer = subtract(num1, num2);
            break;
        case '*':
            answer = multiply(num1, num2);
            break;
        case '/':
            answer = divide(num1, num2);
            break;
        default:
            alert("Invalid operator.");
    }
}

const btns = document.querySelectorAll('button');
const display = document.querySelector("input");

const numBtns = document.querySelectorAll('.num');
const signBtns = document.querySelectorAll('.sign');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.back');

numBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (display.value == answer) {
            display.value = '';
        }
        display.value += btn.innerText;
    })
})

clearBtn.addEventListener("click", () => {
    display.value = '';
})

backBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
})

signBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator != '') {
            const arr = display.value.split(operator);
            if (arr.includes('')) {
                display.value = display.value.replace(operator, '');
            } else {
                num1 = Number(arr[0]);
                num2 = Number(arr[1]);
                operate(operator, num1, num2);
                if (answer != Math.floor(answer)) {
                    answer = answer.toFixed(2);
                }
                display.value = answer;
            }
        }
        operator = btn.innerText;
        display.value += operator;
    })
})

equalBtn.addEventListener("click", () => {
    const arr = display.value.split(operator);
    if (!arr.includes('')) {
        num1 = Number(arr[0]);
        num2 = Number(arr[1]);
        operate(operator, num1, num2);
        if (answer != Math.floor(answer)) {
            answer = answer.toFixed(2);
        }
        display.value = answer;
        operator = '';
    }

})

