function add (num1, num2){
    let total = num1 + num2; 
    return total;   
}

function subtract (num1, num2){
    let total = num1 - num2; 
    return total;   
}

function multiply (num1, num2){
    let total = num1 * num2; 
    return total;   
}

function divide (num1, num2){
    let total = num1 / num2; 
    return total;   
}

function operate (operator, num1, num2){
    if (operator === '+') return add(num1, num2);
    else if (operator === '-') return subtract(num1, num2);
    else if (operator === '*') return multiply(num1, num2);
    else if (operator === '/') return divide(num1, num2);
}

let input = '';
let num1, num2, oper, answer;
const num = document.querySelectorAll('.number');
const numArray = Array.from(num);
const current = document.querySelector('.current')
current.textContent = input;
const past = document.querySelector('.past');

numArray.forEach(button =>{
    button.addEventListener('click', () =>{
        input += button.textContent;
        current.textContent = input;
})
}
);



const operator = document.querySelectorAll('.operator');
const operatorArray = Array.from(operator);

operatorArray.forEach(button => {
    button.addEventListener('click', () =>{
        oper = button.textContent;
        input += button.textContent;
        current.textContent = input;
        console.log()
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    let split = input.split(oper);
    num1 = parseInt (split[0]);
    num2 = parseInt (split[1]);
    if (oper === '+') answer = add(num1, num2);
    else if (oper ==='-') answer = subtract(num1, num2);
    else if (oper === 'x') answer = multiply(num1, num2);
    else if (oper === '÷') answer = divide(num1, num2);
    past.textContent = input;
    current.textContent = answer;
    input = answer;
})
