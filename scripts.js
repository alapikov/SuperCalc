'use strict';

// VARIABLES DECLARATION

const captionTop = document.querySelector('#captionTop');
const welcome = document.querySelector('#welcome');
const smile = document.querySelector('#smile');
const powerBox = document.querySelector('#powerBox')
const resultField = document.querySelector('#resultField');
const superUtilOrg = document.querySelector('#superUtilOrg');
const pwrModeSwitch = document.querySelector('#pwrModeSwitch');
const colorSwitch = document.querySelector('#colorSwitch');
const symbolSwitch = document.querySelector('#symbolSwitch');
const powerBtn = document.querySelector('#powerBtn');
const rootBtn = document.querySelector('#rootBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const minusBtn = document.querySelector('#minusBtn');
const divBtn = document.querySelector('#divBtn');
const clearBtn = document.querySelector('#clearBtn');
const plusBtn = document.querySelector('#plusBtn');
const multBtn = document.querySelector('#multBtn');
const percentBtn = document.querySelector('#percentBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const plusMinusBtn = document.querySelector('#plusMinusBtn');
const num0 = document.querySelector('#num0');
const num00 = document.querySelector('#num00');
const dotBtn = document.querySelector('#dotBtn');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const piBtn = document.querySelector('#piBtn');
const tauBtn = document.querySelector('#tauBtn');
const eBtn = document.querySelector('#eBtn');
const binBtn = document.querySelector('#binBtn');
const octBtn = document.querySelector('#octBtn');
const hexBtn = document.querySelector('#hexBtn');
const numSin = document.querySelector('#numSin');
const numCos = document.querySelector('#numCos');
const numTan = document.querySelector('#numTan');
const numRandom = document.querySelector('#numRandom');
const numLog = document.querySelector('#numLog');
const numBrackets = document.querySelector('#numBrackets');
const calcHistory = document.querySelector('#calcHistory');
const factBtn = document.querySelector('#factBtn');

// ELEMENTS ANIMATION

function captionTopAnimate() {
    captionTop.classList.add('animated');
}
setTimeout(captionTopAnimate, 700);

function footerBlockAnimate() {
    let footerBlock = document.querySelector('#footerBlock');
    footerBlock.classList.add('animated');
}
setTimeout(footerBlockAnimate, 2000);

//onclick
let captionTopOnclickCounter = 0

function captionTopOnclick() {
    if(captionTopOnclickCounter === 0) {
        welcome.classList.add('animated');
        smile.classList.add('animated');
        captionTopOnclickCounter = 1;
    }
    else if (captionTopOnclickCounter === 1) {
        welcome.classList.remove('animated');
        smile.classList.remove('animated');
        captionTopOnclickCounter = 0; 
    }
}
welcome.addEventListener('click', captionTopOnclick);

// for power box

function fillEdges() {
    num7.classList.add('fillEdges');
    num0.classList.add('fillEdges');
}
function cutEdges() {
    num7.classList.remove('fillEdges');
    num0.classList.remove('fillEdges');
}

let powerBoxOnclickCounter = 0

function powerBoxOnclick() {
    if(powerBoxOnclickCounter === 0) {
        powerBox.classList.add('animated');
        setTimeout(fillEdges, 1000);
        footerPwrMode.classList.add('activated');

        powerBoxOnclickCounter = 1;
    }
    else if (powerBoxOnclickCounter === 1) {
        powerBox.classList.remove('animated');
        setTimeout(cutEdges, 700);
        footerPwrMode.classList.remove('activated');

        powerBoxOnclickCounter = 0; 
    }    
}
pwrModeSwitch.addEventListener('click', powerBoxOnclick);

// COLOR SWITCH FUNCTION

const colors = ['Orange', 'Yellow', 'Green', 'Lightblue', 'Blue', 'Purple', 'Pink', 'Red'];
let counter = 0;
let elemsForColorChange = document.getElementsByClassName('colorChangeble');

function switchColor() {
    console.log(elemsForColorChange);
    for (let m = 0; m < elemsForColorChange.length; m++) {
        elemsForColorChange[m].classList.remove(`selected${colors[counter]}`);
    }
    // for result field
    resultField.classList.remove(`selected${colors[counter]}`);
    // for colored text
    superUtilOrg.classList.remove(`selected${colors[counter]}`);
    footerPwrMode.classList.remove(`selected${colors[counter]}`);

    if (counter === 7) {
        counter = -1;
    }
    counter++;

    for (let k = 0; k < elemsForColorChange.length; k++) {
        elemsForColorChange[k].classList.add(`selected${colors[counter]}`);
    }
    // for result field
    resultField.classList.add(`selected${colors[counter]}`);
    // for colored text
    superUtilOrg.classList.add(`selected${colors[counter]}`);
    footerPwrMode.classList.add(`selected${colors[counter]}`);
}
colorSwitch.addEventListener('click', switchColor);

// SYMBOL SWITCH FUNCTION

let symbolCounter = 0;

function switchSymbol() {
    if (symbolCounter === 0) {
        powerBtn.innerHTML = 'pw';
        rootBtn.innerHTML = 'rt';
        deleteBtn.innerHTML = 'de';
        minusBtn.innerHTML = 'mn';
        divBtn.innerHTML = 'dv';
        clearBtn.innerHTML = 'cl';
        plusBtn.innerHTML = 'pl';
        multBtn.innerHTML = 'mt';
        percentBtn.innerHTML = 'pc';
        equalsBtn.innerHTML = 'equals';
        plusMinusBtn.innerHTML = 'pm';
        binBtn.innerHTML = 'bin';
        octBtn.innerHTML = 'oct';
        hexBtn.innerHTML = 'hex';
        piBtn.innerHTML = 'pi';
        tauBtn.innerHTML = 'tau';
        numRandom.innerHTML = 'rdm';
        factBtn.innerHTML = 'fct';

        symbolSwitch.src = 'images/symbolBtn2.png';
    }
    if (symbolCounter === 1) {
        powerBtn.innerHTML = '<img src="images/powerSymbol.png" class="symbolImg">';
        rootBtn.innerHTML = '<img src="images/rootSymbol.png" class="symbolImg">';
        deleteBtn.innerHTML = '<img src="images/deleteSymbol.png" class="symbolImg">';
        minusBtn.innerHTML = '<img src="images/minusSymbol.png" class="symbolImg">';
        divBtn.innerHTML = '<img src="images/divideSymbol.png" class="symbolImg">';
        clearBtn.innerHTML = '<img src="images/clearSymbol.png" class="symbolImg">';
        plusBtn.innerHTML = '<img src="images/plusSymbol.png" class="symbolImg">';
        multBtn.innerHTML = '<img src="images/multiplySymbol.png" class="symbolImg">';
        percentBtn.innerHTML = '<img src="images/percentSymbol.png" class="symbolImg">';
        equalsBtn.innerHTML = '<img src="images/equalsSymbol.png" class="symbolImg">';
        plusMinusBtn.innerHTML = '<img src="images/plusMinusSymbol.png" class="symbolImg">';
        binBtn.innerHTML = '01';
        octBtn.innerHTML = '07';
        hexBtn.innerHTML = '0F';
        piBtn.innerHTML = 'π';
        tauBtn.innerHTML = 'τ';
        numRandom.innerHTML = '?';
        factBtn.innerHTML = '!';

        symbolSwitch.src = 'images/symbolBtn1.png';

        symbolCounter = -1;
    }
    symbolCounter++;
}

symbolSwitch.addEventListener('click', switchSymbol);

// PROGRAMMING CALCULATOR

num0.addEventListener('click', () => {resultField.innerHTML += '0'; correctLength();});
num00.addEventListener('click', () => {resultField.innerHTML += '00'; correctLength();});
num1.addEventListener('click', () => {resultField.innerHTML += '1'; correctLength();});
num2.addEventListener('click', () => {resultField.innerHTML += '2'; correctLength();});
num3.addEventListener('click', () => {resultField.innerHTML += '3'; correctLength();});
num4.addEventListener('click', () => {resultField.innerHTML += '4'; correctLength();});
num5.addEventListener('click', () => {resultField.innerHTML += '5'; correctLength();});
num6.addEventListener('click', () => {resultField.innerHTML += '6'; correctLength();});
num7.addEventListener('click', () => {resultField.innerHTML += '7'; correctLength();});
num8.addEventListener('click', () => {resultField.innerHTML += '8'; correctLength();});
num9.addEventListener('click', () => {resultField.innerHTML += '9'; correctLength();});

dotBtn.addEventListener('click', () => {resultField.innerHTML += '.'; correctLength();});
numRandom.addEventListener('click', () => {resultField.innerHTML = Math.trunc(Math.random() * 10000); correctLength();});
piBtn.addEventListener('click', () => {resultField.innerHTML = '3.141592653589'; correctLength();});
tauBtn.addEventListener('click', () => {resultField.innerHTML = '6.283185307179'; correctLength();});
eBtn.addEventListener('click', () => {resultField.innerHTML = '2.718281828459'; correctLength();});

let numToCount1 = 0;
let numToCount2 = 0;
let operator = '';
let result = 0;

deleteBtn.addEventListener('click', () => {
    let numDeleted = Array.from(resultField.innerHTML);
    numDeleted.pop();
    let numString = numDeleted.join('');
    resultField.innerHTML = numString;
});
clearBtn.addEventListener('click', () => {
    resultField.innerHTML = '';
});

plusBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '+';
    resultField.innerHTML = '';
});

minusBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '-';
    resultField.innerHTML = '';
});
multBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '×';
    resultField.innerHTML = '';
});
divBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '÷';
    resultField.innerHTML = '';
});
powerBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '^';
    resultField.innerHTML = '';
});
rootBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '√';
    resultField.innerHTML = '';
});
percentBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    operator = '%';
    resultField.innerHTML = '';
});
plusMinusBtn.addEventListener('click', () => {
    let numArrayed = Array.from(resultField.innerHTML);
    if (numArrayed[0] === '-') {
        numArrayed.shift();
    } else {
        numArrayed.unshift('-');
    }
    let numString = numArrayed.join('');
    resultField.innerHTML = numString;
});

let factResult = 1;
let numToCountFact = 0;
factBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    numToCountFact = numToCount1;
    while (numToCount1) factResult *= numToCount1--;
    resultField.innerHTML = factResult.toString();
    createLineFactorial()
    addToHistory();
    correctLength();
    factResult = 1;
});

let binResult = 0;
binBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    binResult = numToCount1.toString(2);
    resultField.innerHTML = binResult;
    createLineBinNum();
    addToHistory();
    correctLength();

})

let octResult = 0;
octBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    octResult = numToCount1.toString(8);
    resultField.innerHTML = octResult;
    createLineOctNum();
    addToHistory();
    correctLength();
})

let hexResult = 0;
hexBtn.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    hexResult = numToCount1.toString(16);
    resultField.innerHTML = hexResult;
    createLineHexNum();
    addToHistory();
    correctLength();
})

equalsBtn.addEventListener('click', () => {
    numToCount2 = Number(resultField.innerHTML);
    if (operator === '+') {
        result = numToCount1 + numToCount2;
    }
    if (operator === '-') {
        result = numToCount1 - numToCount2;
    }
    if (operator === '×') {
        result = numToCount1 * numToCount2;
    }
    if (operator === '÷') {
        result = numToCount1 / numToCount2;
    }
    if (operator === '^') {
        result = Math.pow(numToCount1, numToCount2);
    }
    if (operator === '√') {
        result = Math.pow(numToCount1, 1 / numToCount2);
    }
    if (operator === '%') {
        result = numToCount1 / 100 * numToCount2;
    }

    resultField.innerHTML = result;
    createLineCommon();
    addToHistory();
    correctLength();
});

numSin.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    result = Math.sin(numToCount1);
    resultField.innerHTML = result;
    operator = 'sin';
    createLinePowOperators()
    addToHistory();
    correctLength();
})

numCos.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    result = Math.cos(numToCount1);
    resultField.innerHTML = result;
    operator = 'cos';
    createLinePowOperators()
    addToHistory();
    correctLength();
})

numTan.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    result = Math.tan(numToCount1);
    resultField.innerHTML = result;
    operator = 'tan';
    createLinePowOperators()
    addToHistory();
    correctLength();
})

numLog.addEventListener('click', () => {
    numToCount1 = Number(resultField.innerHTML);
    result = Math.log(numToCount1);
    resultField.innerHTML = result;
    operator = 'logE';
    createLinePowOperators()
    addToHistory();
    correctLength();
})

// HISTORY LINE

let line = ``;
function createLineCommon() {
    line = `${numToCount1} ${operator} ${numToCount2} = ${result}`;
    return line;
}

function createLinePowOperators() {
    line = `${operator} ${numToCount1} = ${result}`;
    return line;
}

function createLineFactorial() {
    line = `${numToCountFact}! = ${factResult}`;
    return line;
}

function createLineBinNum() {
    line = `${numToCount1} bin = ${binResult}`;
    return line;
}

function createLineOctNum() {
    line = `${numToCount1} oct = ${octResult}`;
    return line
}

function createLineHexNum() {
    line = `${numToCount1} hex = ${hexResult}`;
    return line;
}

function addToHistory() {
    let lineLength = line.length;
    if (lineLength <= 23) {
        let historyLine = document.createElement('div');
        historyLine.classList.add('historyLine');
        historyLine.innerHTML = line;
        historyLine.classList.add('colorChangeble');
        historyLine.classList.add(`selected${colors[counter]}`);
        calcHistory.prepend(historyLine);
    }
    else {
        let line1 = Array.from(line).slice(0, 22);
        let line2 = Array.from(line).slice(22);

        let historyLine1 = document.createElement('div');
        historyLine1.classList.add('historyLine');
        historyLine1.classList.add(`selected${colors[counter]}`);
        historyLine1.innerHTML = line1.join('');

        let historyLine2 = document.createElement('div');
        historyLine2.classList.add('historyLine');
        historyLine2.classList.add(`selected${colors[counter]}`);
        historyLine2.innerHTML = line2.join('');

        calcHistory.prepend(historyLine2);
        calcHistory.prepend(historyLine1);
    }
    deleteLastLine(10, calcHistory);
}

// ADDITIONAL FUNCTIONS TO WORK INSIDE MAIN FUNCTIONS

function clearCalc() {
    resultField.innerHTML = '';
    numToCount1 = 0;
    numToCount2 = 0;
    result = 0;
}

function deleteLastLine(maxNumOfLines, parentNode) {
    let childrenNum = parentNode.childElementCount;
    if (childrenNum >= maxNumOfLines) {
        parentNode.removeChild(parentNode.getElementsByTagName('div')[maxNumOfLines]);
    }
}

function correctLength() {
    let number = Array.from(resultField.innerHTML);
    if (number.length >= 19) {
        number = number.splice(0, 18);
    }
    resultField.innerHTML = number.join('');
}

