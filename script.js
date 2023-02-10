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
let num1, num2, nbr, oper;
const num = document.querySelectorAll('.number');
const numArray = Array.from(num);
const current = document.querySelector('.current')
current.textContent = input;

numArray.forEach(button =>{
    button.addEventListener('click', () =>{
        if(!num1){
        input = '';
        input += button.textContent;
        nbr = input;
        current.textContent = input;
        }
        else  
    })
})



const operator = document.querySelectorAll('.operator');
const operatorArray = Array.from(operator);

operatorArray.forEach(button => {
    button.addEventListener('click', () =>{
        oper = button.textContent;
        num1 = parseInt(nbr);
        input += button.textContent;
        current.textContent = input;
        console.log(input);
    })
})





