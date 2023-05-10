// Strings in JavaScript

const fullName = 'Hassan S Kromah';
//const email = 'kkromah12@gmail.com';

// let result = fullName.toUpperCase();
// console.log(result);

// let emResult = email.indexOf('@');
// console.log(emResult);
// console.log(fullName.length);

// last indexOf('...')
const email = 'kkromah12@gmail.com';
//let eMail = email.lastIndexOf('i')
//let eMail = email.slice(0, 12)
//let result = email.substring(4, 10)
//let result = email.replace('h', 'w')
// let result = email.replace('m', 'www');
// console.log(result);

//Numbers

let pi = Math.PI.toFixed(2);
console.log(pi);

let lik = 10;
//likes++ //11
lik += 10; //20
console.log(lik);

// Template string
const title = 'Best read of 2023';
const auther = 'Matthew';
const likes = 50;

let result = `The blog called ${title} by ${auther} has ${likes} likes.`;
console.log(result);
// const h2 = document.createElement('h2');
// h2.innerHTML = result;
// document.body.appendChild(h2);

let ninjas = ['shaun', ' ryu', ' chun-li'];
console.log(ninjas[1]); // ryu

const ages = [20, 25, 30, 33, 35];
console.log(ages);
console.log(ages.length);

let result1 = ninjas.join('-');
console.log(result1);
console.log(ninjas.indexOf('ryu'));

const concat = ninjas.concat([...ages]); // it combines both arries together
console.log(concat);

// boolean
console.log(true, false);

let email2 = 'kkromah12@yahoo.com';
let result2 = email2.includes('@');
console.log(result2); //true

// Type conversion

let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);// number
