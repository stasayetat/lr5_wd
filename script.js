// let numberList = document.getElementById('numberList'); //Завдання 1
// function printNumb(n) {
//     for(let i = n; i >= 0; i--) {
//         numberList.innerText += (i + "\n");
//     }
// }
//
// let form = document.forms.formNumb;
// form.elements.submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     numberList.textContent = null;
//     printNumb(form.elements.number.value);
// });


// function transformToArr(text) { //2 Завдання
//     let transToArr = text.split(", ");
//     transToArr.reverse();
//    for(let el of transToArr) {
//        printArr.innerText += el + "\n";
//    }
// }
//
// let inputArr = document.getElementById('inputArr'); //Завдання 2
// let submitArr = document.getElementById('submitArr');
// let printArr = document.getElementById('printArr');
// submitArr.addEventListener('click', function () {
//     printArr.innerText = null;
//     transformToArr(inputArr.value);
// });

// function calculateEquation(text) { //Завдання 3
//     let coffs = text.split(" ");
//     let disc = Math.pow(coffs[1], 2) - 4*coffs[0]*coffs[2];
//     if(disc <= 0) {
//         alert("Рівняння відповіді немає");
//         return;
//     }
//     let x1 = (-coffs[1] + Math.sqrt(disc))/2*coffs[0];
//     let x2 = (-coffs[1] - Math.sqrt(disc))/2*coffs[0];
//     answers.innerText = "X1 - " + x1 + ", X2 - " + x2;
// }
//
// let inputModulus = document.getElementById('inputModulus');
// let submitEquation = document.getElementById('submitEquation');
// let answers = document.getElementById('answers');
// submitEquation.onclick = function () {
//     answers.innerText = null;
//     calculateEquation(inputModulus.value);
// };

// function randomNumbers(num) { //Завдання 4
//     let numArr = [];
//     for(let i = 0; i < parseInt(num); i++) {
//         let el = Math.floor(Math.random()*500);
//         if(numArr.includes(el)) {
//             i--;
//             continue;
//         }
//         numArr.push(el);
//     }
//     for(let el of numArr) {
//         printRandom.innerText += el + "\n";
//     }
// }
//
// let inputN = document.getElementById('inputN')
// let randomizeNum = document.getElementById('randomizeNum');
// let printRandom = document.getElementById('printRandom');
// randomizeNum.onclick = function () {
//     printRandom.innerText = null;
//     randomNumbers(inputN.value);
// };

// function transformToArr(text) { //5 Завдання
//     let transToArr = text.split(", ");
//     for(let i = 0; i < 2; i++) {
//         for(let el of transToArr) {
//             printArr.innerText += el + "\n";
//         }
//     }
// }
//
// let inputArr = document.getElementById('inputArr'); //Завдання 5
// let submitArr = document.getElementById('submitArr');
// let printArr = document.getElementById('printArr');
// submitArr.addEventListener('click', function () {
//     printArr.innerText = null;
//     transformToArr(inputArr.value);
// });
