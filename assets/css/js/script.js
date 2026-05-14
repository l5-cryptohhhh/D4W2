function sum() {
    let a = 2;
    let b = 3;
    return a + b;
}


function newSum() {
    let a = 5;
    return a + sum();
}


console.log(newSum());

const moltiplicazione = function(num1, num2) {
    return num1 * num2;
}

console.log(moltiplicazione(3, 7));
console.log(moltiplicazione(4, 5));
console.log(moltiplicazione(2, 8));



const regard = function(name = 'Non so chi salutare') {
      print(name);
    }
        
    

const checkError = function(name) {
    if (name === 'Non so chi salutare') {
        return false;
    } 
        return true;
    }



const print = function(name) {
    if (checkError(name)) {
        document.getElementById('saluta').textContent += name;
    } else {
        document.getElementById('saluta').textContent = name;
    }
}

regard(' Manuel');


const listElements = document.querySelectorAll('#firstlist li');
console.log(listElements);


const colorElements = function () {
    for (let i = 0; i < listElements.length; i++) {
    listElements[i].classList.add('listElements');
}
}
colorElements();

function creaContatote() {
    let count = 0;
    let increment = 1;
    return function () {
        count++;
        increment = increment * 2;
        return `Il valore di count ${count}, il valore di increment ${increment}`;
    };
}

const contatore = creaContatote();
const count = document.querySelectorAll('#count');

for (let i = 0; i < 8; i++) {
    count.innerHTML += `<li>${contatore()}<li>`;
}

let myName = 'Manuel Nunziata';
console.log(myName.includes('Nunziata'));
console.log(myName.includes('Leo'));
console.log(myName.slice(6, 10));
console.log(myName.slice(6));


const myNameArray = myName.split(' ');
console.table(myNameArray);

let myNameJoined = myNameArray.join().replaceAll(',', ' ');
console.log(myNameJoined);

const today = new Date();
console.log(today);


const myBirthday = new Date(2004, 7, 3);
console.log(myBirthday);

let myAbs = Math.abs(3.15);
console.log(myAbs);

let myMaxNumber = Math.max(12, 21, 3);
console.log(myMaxNumber);

let myCasualNumber = Math.floor(Math.random() * 11);
console.log(myCasualNumber);









