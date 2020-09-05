"use strict";

// Remember the rules for exectuing code, code should be executed when the window loads not before it... otherwise you get errors
window.onload = () => {
    createCalculator();
    createWordPractise();
}

// Global variables that are used the keep count of button clicks as well as the input
let count = 0;
let input = '';
let prevInput = '';
let action = '';
let clearScreen = false;

/*
    This function is responsible for creating the look of calculator.
*/
function createCalculator() {
    let oldArea = document.getElementById('calculatorArea');

    // The background for the calculator is created
    let canv = document.createElement('div');
    canv.id = 'canv';
    oldArea.appendChild(canv);

    // An element that will act as the "screen" of the calculator
    let p = document.createElement('p');
    p.id = 'screen';
    let pTxt = document.createTextNode('');
    p.append(pTxt);
    canv.append(p);

    // Add a button to the area
    addBtn('clear', 'AC', doClear);
    addBtn('enter', '=', doEnter);
    for (let i = 0; i < 10; i++) {
        let id = 'num' + i;
        addBtn(id, i, doNum);
    }
    addBtn('comma', ',', doComma);
    addBtn('mark', '+/-', doChangeMark);
    addBtn('percent', '%', doPercent);
    addBtn('divide', '/', doChangeAction);
    addBtn('multiply', 'X', doChangeAction);
    addBtn('plus', '+', doChangeAction);
    addBtn('minus', '-', doChangeAction);
}

/*
   Function that adds buttons to the calculator.
*/
function addBtn(id, name, listener) {
    let canv = document.getElementById('canv')
    let btn = document.createElement('button');
    btn.id = id;
    btn.className = 'calcBtn';

    // Only number buttons need to have a value because it is used in calculations.
    if (listener == doNum) {
        btn.value = name;
    }

    btn.addEventListener('click', listener, false);
    let txt = document.createTextNode(name);
    btn.append(txt);
    canv.append(btn);

}

/*
   Function that handles clearing the screen or the whole input.
*/
function doClear() {
    input = prevInput;
    if (count == 0) {
        console.log('Screen was cleared! The input is: ' + input);
        count++;
        document.getElementById('screen').childNodes[0].nodeValue = input;
        action = '';
    }
    else {
        console.log('All data was cleared.');
        count = 0;
        input = '';
        prevInput = '';
        let scrnTxt = document.getElementById('screen').childNodes[0];
        scrnTxt.nodeValue = '0';
        action = '';
        console.log(scrnTxt);
    }
}

/*
   Function that handles the actions of normal number buttons.
*/
function doNum(e) {
    e.preventDefault();
    let scrnTxt = document.getElementById('screen').childNodes[0];
    if (clearScreen) scrnTxt.nodeValue = e.target.value;
    else scrnTxt.nodeValue = scrnTxt.nodeValue + e.target.value;
    prevInput = prevInput + input;
    input = e.target.value;
    //console.log('Number ' + e.target.value + ' was clicked');
}

/*
   Functio that handles the clicking of a comma making normal ints to floats with up to 3 decimals.
*/
function doComma() {
    // fisrt commais handled correctly, second one is not
    console.log('Comma was clicked but it does not work yet.');
    document.getElementById('screen').childNodes[0].nodeValue = input;
}

/*
   Functio that handles the clicking of a change mark making positive numbers negative and vice versa.
*/
function doChangeMark() {
    console.log('Mark of the number will be changed');
}

/*
   Function that gives the command of the action of calculation.
*/
function doChangeAction(e) {
    if (action != '') {
        if (action == 'divide') doDivide(prevInput, input);
        if (action == 'multiply') doMultiply(prevInput, input);
        if (action == 'plus') doPlus(prevInput, input);
        if (action == 'minus') doMinus(prevInput, input);
    }
    action = e.target.id;
    clearScreen = true;
    console.log('The action was ' + e.target.id);
}

/*
   Functio that calculates the percentage calculations.
*/
function doPercent() {
    console.log('Percentage will be calculated');
    let num = document.getElementById('screen').childNodes[0].nodeValue;
    document.getElementById('screen').childNodes[0].nodeValue = num / 100;
}

/*
   Function that handles clicking enter button.
*/
function doEnter() {
    console.log('Enter was clicked. The action is ' + action);
    // TODO: calculation for the inputs...
    if (action == 'divide') doDivide(prevInput, input);
    if (action == 'multiply') doMultiply(prevInput, input);
    if (action == 'plus') doPlus(prevInput, input);
    if (action == 'minus') doMinus(prevInput, input);
    action = '';
}
/*
   Functio that will calculate the dividing of numbers.
*/
function doDivide(a, b) {
    console.log('Numbers will be divided.');
    let num = a / b;
    prevInput = num;
    input = 0;
    document.getElementById('screen').childNodes[0].nodeValue = num;
}

/*
   Functio that will calculate the multiplication of numbers.
*/
function doMultiply(a, b) {
    console.log('Numbers will be multiplied.');
    let num = a * b;
    prevInput = num;
    input = 0;
    document.getElementById('screen').childNodes[0].nodeValue = num;
}

/*
   Functio that will add numbers together.
*/
function doPlus(a, b) {
    console.log('Numbers will be added together.');
    console.log('First num: ' + a + ' Second num: ' + b);
    let num = parseFloat(a) + parseFloat(b);
    prevInput = num;
    input = 0;
    document.getElementById('screen').childNodes[0].nodeValue = num;
}

/*
   Functio that will calculate the substraction of numbers.
*/
function doMinus(a, b) {
    console.log('Numbers will be substracted.');
    let num = a - b;
    prevInput = num;
    input = 0;
    document.getElementById('screen').childNodes[0].nodeValue = num;
}


// THE WORD PRACTISE WIDGET CODE SPACE BEGINS

function createWordPractise() {
    let oldArea = document.getElementById('calculatorArea');

    // The background for the calculator is created
    let canv = document.createElement('div');
    canv.id = 'wordPractise';
    oldArea.appendChild(canv);

    // An element that will act as the "screen" of the calculator
    let p = document.createElement('p');
    p.id = 'info';
    let pTxt = document.createTextNode('Placeholder for word spelling practise.');
    p.append(pTxt);
    canv.append(p);
    oldArea.append(canv);
}