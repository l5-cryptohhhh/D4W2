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



