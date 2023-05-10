// const ul = document.querySelector('ul');
// const btn = document.querySelector('.clickBtn');

// btn.addEventListener('click', () => {
// 	const li = document.createElement('li');
// 	li.classList.add('li');
// 	li.textContent += 'something else added';
// 	ul.appendChild(li);
// });

// // const items = document.querySelectorAll('.lis');
// // items.forEach((item) => {
// // 	item.addEventListener('click', (e) => {
// // 		//e.target.style.textDecoration = 'line-through';
// // 		e.target.remove();
// // 	});
// // });

// ul.addEventListener('click', (e) => {
// 	if (e.target.nodeName === 'LI') {
// 		e.target.remove();
// 	}
// });

/* Second event*/
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
	console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
	//console.log(e.offsetX, e.offsetY); //to show the cordinates of X & Y on mousemove
	box.textContent = `x pos: ${e.offsetX} y pos: ${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
	console.log(e.pageX, e.pageY); // cordinate on scroll page
});
