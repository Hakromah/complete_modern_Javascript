//function declaration (it sart with function keyword)
function greet(name) {
	console.log(`Good morning Mr. ${name}`);
}
greet('Abdoullah');

//function Expression (it is assign to a variable)
const say = function (name) {
	console.log(`Good bye Mrs. ${name}`);
};
say('Aisha');

//regular function vs arrow function
function sum(a, b) {
	return a + b;
}
const count = sum(5, 3); // regular function
console.log(count);

//arrow function
const sum2 = (b, c) => b - c;
const res = sum2(9, 5);
console.log(res);

//Bloc scop and global scop

let a = 30;
function add() {
	let a = 50;
	return a;

	function sub() {
		let a = 40;
		return a;
	}
}
console.log(add());
console.log(a);

const greeting = () => {
	return 'Hello, world';
};
const hi = greeting();
console.log(hi);

const bill = (products, tax) => {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
};
const ptax = bill([40, 50, 30, 60], 0.18);
console.log(ptax.toFixed(2));

//ollback function
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach((person, indext) => {
// 	console.log(indext, person);
// });

// call back
const logPerson = (person, index) => {
	console.log(`${index} - ${person}`);
};
people.forEach(logPerson);

const ul = document.querySelector('.people');
let html = ``;
people.forEach((person) => {
	//create html template for each person
	html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
