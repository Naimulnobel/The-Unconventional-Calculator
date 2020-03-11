// alert('this work');
// let currentResult=0;
// const result=0;
// currentResult = currentResult+10;
// // let calculationDescription=result+' +10 ';
// let calculationDescription=`${result} +10 `;
// let errorMessage='An Error\n'+
//                    'occured';
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInput() {
  return parseInt(userInput.value);
}
function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    oparetion: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}
function createAndWriteOUtput(operator, resultBeforeCalc, calcNumber) {
  const calDEscription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDEscription);
}
function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOpertor;
  if (calculationType === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOpertor = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathOpertor = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    mathOpertor = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult = currentResult / enteredNumber;
    mathOpertor = "/";
  }
  createAndWriteOUtput(mathOpertor, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add() {
  calculateResult("ADD");
}
function subtract() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}
function devide() {
  calculateResult("DIVIDE")
}
// let additionResult = add(1,2);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
