// declare interface ElementEvent extends Event {
//     currentTarget: HTMLElement;
//     target: HTMLElement;
// }
// let temp1: HTMLInputElement = ;
function add() {
    var number1 = Number(document.getElementById("num1").value);
    var number2 = Number(document.getElementById("num2").value);
    // let temp2: string = document.getElementById("num2");
    // let number2: number = Number(temp2);
    var result = number1 + number2;
    var resultElement = document.getElementById("result");
    resultElement.innerText = 'Result ' + result;
}
function subtract() {
    var number1 = Number(document.getElementById("num1").value);
    var number2 = Number(document.getElementById("num2").value);
    // let temp2: string = document.getElementById("num2");
    // let number2: number = Number(temp2);
    var result = number1 - number2;
    var resultElement = document.getElementById("result");
    resultElement.innerText = 'Result ' + result;
}
function multiply() {
    var number1 = Number(document.getElementById("num1").value);
    var number2 = Number(document.getElementById("num2").value);
    // let temp2: string = document.getElementById("num2");
    // let number2: number = Number(temp2);
    var result = number1 * number2;
    var resultElement = document.getElementById("result");
    resultElement.innerText = 'Result ' + result;
}
function divide() {
    var number1 = Number(document.getElementById("num1").value);
    var number2 = Number(document.getElementById("num2").value);
    // let temp2: string = document.getElementById("num2");
    // let number2: number = Number(temp2);
    var result = number1 / number2;
    var resultElement = document.getElementById("result");
    resultElement.innerText = 'Result ' + result;
}
// let res : number = num1+num2
// console.log("sum is: "+res);
// function printH():void{
//     console.log("Hello")
// }
