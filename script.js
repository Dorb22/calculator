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
        if (oper) {
            getAnswer();
            oper = button.textContent;
            input += button.textContent;
            current.textContent = input;
        }
        else{
        oper = button.textContent;
        input += button.textContent;
        current.textContent = input;
        }
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', getAnswer);

function getAnswer(){
    if (!oper){
        past.textContent = input;
        current.textContent = '';
    }
    else{
    let split = input.split(oper);
    num1 = Number(split[0]);
    num2 = Number(split[1]);
    if (oper === '+') answer = add(num1, num2);
    else if (oper ==='-') answer = subtract(num1, num2);
    else if (oper === 'x') answer = multiply(num1, num2);
    else if (oper === '÷') answer = divide(num1, num2);
    past.textContent = input;
    current.textContent = (Math.round(answer * 10 ** 9))/10 ** 9;
    input = current.textContent;
    oper = '';
    }
}

const del = document.querySelector('.delete');
del.addEventListener('click', () =>{
    let last = input.replace(input[input.length -1], '');
    input = last;
    current.textContent = input;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    input = num1 = num2 = oper = answer = current.textContent = past.textContent = '';
})


window.addEventListener('keypress', (event) => {
    if (event.key === '+' || event.key === '-' || event.key === 'x' || event.key === '÷') {
        if (oper) {
            getAnswer();
            oper = event.key;
            input += event.key;
            current.textContent = input;
        }
            else{
            oper = event.key;
            input += event.key;
            current.textContent = input;
        }
    }
    else if (event.key === '/'){
        if (oper) {
            getAnswer();
            oper = '÷';
            input += '÷';
            current.textContent = input;
        }
            else{
            oper = '÷';
            input += '÷';
            current.textContent = input;
        }
        
    }
    else if (event.key === '=' || event.key === 'Enter'){
        getAnswer();
    }
    else if (event.key === '.'){
        input += event.key;
        current.textContent = input;
    }
    else if (event.key === 'c'){
        input = num1 = num2 = oper = answer = current.textContent = past.textContent = '';
    }
    else if (isNaN(event.key));
    else {
        input += event.key;
        current.textContent = input;
    }
});

window.addEventListener('keydown', (event)=>{
    if (event.key === 'Backspace') {
        let last = input.replace(input[input.length -1], '');
        input = last;
        current.textContent = input;
    }
})

const display = document.querySelector('.display');
display.removeChild(current)
display.removeChild(past);

const introCAL = document.createElement('div');
introCAL.textContent = 'CAL';
introCAL.classList.add('introCAL');


const introQ = document.createElement('div');
introQ.classList.add('introQ');
introQ.textContent = 'Q';

const title = document.querySelector('.title');

const shorts = document.createElement('div');
shorts.classList.add('shorts');
title.appendChild(shorts);

const shortcuts = document.createElement('button');
shortcuts.classList.add('shortcuts');
shortcuts.textContent = 'SHORTCUTS';
title.appendChild(shortcuts);

let j = 0;
shortcuts.addEventListener('click', () => {
    ++j;
    if (j % 2 !== 0){
        shorts.textContent = 'D: Delete  C: Clear Enter: =';
        shortcuts.style.backgroundColor = 'transparent';
        shortcuts.style.color = '#ffd26a';
        shortcuts.style.border = '2px double #ffd26a';
    }
    else {shorts.textContent = '';
        shortcuts.style.backgroundColor = '#ffd26a';
        shortcuts.style.color = 'black';
        shortcuts.style.borderStyle = 'none';}
})

const on = document.querySelector('.on');
let i = 0;
on.addEventListener('click', () => {
    ++i;
    if (i % 2 !== 0){
        on.textContent = 'OFF';
        display.appendChild(introCAL);
        display.appendChild(introQ);
        on.style.fontSize = '10px';
        introQ.addEventListener('animationend', () => {
            display.removeChild(introCAL);
            display.removeChild(introQ);
            display.appendChild(past);
            display.appendChild(current);
        }, {once : true});
    }
    else {
        on.textContent = 'ON';
        display.removeChild(past);
        display.removeChild(current);
        display.appendChild(introCAL);
        display.appendChild(introQ);
    }
})

