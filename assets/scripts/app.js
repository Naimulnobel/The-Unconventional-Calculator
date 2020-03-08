// alert('this work');
// let currentResult=0;
// const result=0;
// currentResult = currentResult+10;
// // let calculationDescription=result+' +10 ';
// let calculationDescription=`${result} +10 `;
// let errorMessage='An Error\n'+                   
//                    'occured';
const  defaultResult=0;
let currentResult=defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}
function createAndWriteOUtput(operator,resultBeforeCalc,calcNumber){
    const calDEscription=`${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,calDEscription );
}

function add(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOUtput('+',initialResult,enteredNumber);
}
function subtract(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOUtput('-',initialResult,enteredNumber);
}
function multiply(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOUtput('*',initialResult,enteredNumber);
}
function devide(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOUtput('/',initialResult,enteredNumber);
}
// let additionResult = add(1,2);
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',devide);
