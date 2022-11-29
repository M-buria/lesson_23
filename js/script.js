"use strict"
//урок №1
console.log(' урок №1');
console.log('35' + - "22");
// console.log('558' > 22++);


let i = 0;
let u = i++;
console.log(u);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? 'без имени');

//урок №2
console.log(' урок №2 ')
if (1 == '1') {
    console.log('правда');
} else {
    console.log('не правда');
}
let message = (92 > '11' && 58 < 11) ? 'правда' : 'брехня';
console.log(message);

if (0) {
    console.log('не правда');
} else if (' ') {
    console.log('правда');
}

//урок №3
console.log(' урок №3');
//задача №1
console.log('  цикл while');
let num = 1;
while (num < 6) {
    console.log(num);
    num++
}
console.log('  цикл for');
for (let numOne = 1; numOne < 6; numOne++) {
    console.log(numOne);
}
//задача №2
console.log('  задача №2');
let numTwo = 8;
while (numTwo) {
    console.log(numTwo);
    numTwo--;
}
//задача №3

console.log('  задача №3');
let numThree = 0;
while (numThree < 3) {
    console.log(`Число: ${numThree}`);
    numThree++;
}
//задача №4
console.log('  задача №4')
firstFor: for (let numFour = 0; numFour < 2; numFour++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size);
    }
}
//урок №4
console.log(' урок №4');
//задача №1
let numeOne = Math.round(1.005 * 1000) / 1000;
console.log(numeOne);

//задача №2
let value = "135.58px";
let valueResult = parseFloat(value);
console.log(valueResult);
//задача №3
let someVar = 58 + 'фрілансер';
if (someVar !== NaN) {
    console.log('результат виразу NaN');
}
//задача №4
console.log(Math.max(10, 58, 39, -150, 0));
//задача №5
let someNum = 58.858;
let numResult = Math.floor(58.858);
console.log(numResult);

//урок №5
console.log(' урок №5');
//задача №2
console.log('  задача №2');
let text = 'фрілансер';
console.log(text[5]);
//задача №4
console.log('  задача №4');

let textOne = 'фрілансер';
console.log(textOne.toUpperCase());

//задача №5
console.log('  задача №5');
let textTwo = 'фрілансер';
let textTwoNew = textTwo.slice(3, 6);
console.log(textTwoNew);
//задача №6
console.log('  задача №6');

let textThree = 'фрілансер';
console.log(textThree.includes('лан', 2));