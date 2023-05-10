const display = document.querySelector('.score');
const scores = [10, 30, 45, 26, 5, 80];

let filtered = scores.filter((score) => {
	return score > 20;
});
display.textContent = filtered;
//console.log(filtered);

const users = [
	{ name: 'Hadja', premium: true },
	{ name: 'Amara', premium: false },
	{ name: 'Oumar', premium: true },
	{ name: 'Matthew', premium: false },
];

let premiumUsers = users.filter((user) => user.premium);
//console.log(premiumUsers.map((a) => a.name));

//map() methods
const prices = [10, 30, 45, 26, 5, 80, 8, 60];
const salesPrice = prices.map((price) => price / 2);
//console.log(salesPrice);

const products = [
	{ name: 'gold chaine', price: '50' },
	{ name: 'silver bracelet', price: '40' },
	{ name: 'gold ring', price: '80' },
	{ name: 'white gold ear ring', price: '55' },
	{ name: 'gram gold bar', price: '66' },
];

const salesProducts = products.map((product) => {
	if (product.price > 30) {
		return { name: product.name, price: product.price / 2 };
	} else {
		return product;
	}
});
//console.log(salesProducts);

const scoreData = [10, 30, 45, 26, 5, 80];

let result = scoreData.reduce((acc, ccr) => {
	if (ccr > 30) {
		acc++;
	}
	return acc;
}, 0);
//console.log(result);

const userScores = [
	{ name: 'Hadja', score: 50 },
	{ name: 'Amara', score: 80 },
	{ name: 'Oumar', score: 60 },
	{ name: 'Matthew', score: 70 },
	{ name: 'Hadja', score: 50 },
	{ name: 'Amara', score: 89 },
	{ name: 'Oumar', score: 60 },
	{ name: 'Matthew', score: 69 },
	{ name: 'Hadja', score: 95 },
	{ name: 'Amara', score: 50 },
	{ name: 'Oumar', score: 60 },
	{ name: 'Matthew', score: 98 },
	{ name: 'Hadja', score: 68 },
	{ name: 'Amara', score: 92 },
	{ name: 'Oumar', score: 60 },
	{ name: 'Matthew', score: 80 },
];

const userTotal = userScores.reduce((acc, curr) => {
	if (curr.name === 'Hadja') {
		acc += curr.score;
	}
	return acc;
}, 0);

//console.log(userTotal);

//Find method *returns the first true value*

const findScores = [10, 30, 45, 26, 5, 80, 8, 60];
const sort = findScores.sort((a, b) => a - b);
//console.log(sort); // the correct way to sort the numbers.
const sortt = findScores.sort(); // auto sort and it count on the first digites eg. 15 25 40 5 60 90

const firstHighScore = findScores.find((score) => score > 30);
//console.log(firstHighScore);//45

//Sort methood
const names = [
	{ name: 'Hadja', score: 50 },
	{ name: 'Amara', score: 80 },
	{ name: 'Oumar', score: 60 },
	{ name: 'Matthew', score: 70 },
];

const sorted = names.sort((a, b) => b.score - a.score);
//console.log(sorted);

//array chaining (filter() -> map() -> reduce() ... )
const goldProducts = [
	{ name: 'gold chaine', price: '50' },
	{ name: 'silver bracelet', price: '40' },
	{ name: 'gold ring', price: '80' },
	{ name: 'white gold ear ring', price: '55' },
	{ name: 'gram gold bar', price: '66' },
];

const promos = goldProducts
	.filter((goldP) => goldP.price > 40)
	.map((discountPrice) => `the ${discountPrice.name} is ${discountPrice.price * (1 - 0.5)} USD`);
console.log(promos);
