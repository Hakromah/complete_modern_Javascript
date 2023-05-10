// const para = document.querySelector('body > h1');
// console.log(para);

// const hello = document.querySelector('.hello');
// hello.innerHTML;
// hello.innerText += ' Hello has been added';
// const content = document.querySelector('.content');

// const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
// 	console.log(para.innerHTML);

// 	para.innerHTML += '<span> new texts has been added </span>';
// });

// const people = ['Aisha', 'Amara', 'Ayouba', 'Oumar', 'Hassan'];

// people.forEach((person) => {
// 	content.innerHTML += `<p>${person}</p>`;
// });

// //Get & Set Attribute
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.innerHTML = 'Lorem ipsum dolor sit amet.';

// const mssg = document.querySelector('.prestij');
// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));

/*Add & remove classes in js */

//add class
// const span = document.querySelector('span');
// span.classList.add('title');
// span.classList.remove('title');

// span.classList.add('success')

const ps = document.querySelectorAll('p');
// console.log(ps);
// const element = (p) => {
// 	if (p.textContent.includes('success')) {
// 		p.classList.add('success');
// 	} else if (p.textContent.includes('error')) {
// 		p.classList.add('error');
// 	} else {
// 		p.classList.add('blue');
// 	}
// };
//  ps.forEach(element);

ps.forEach((p) => {
	if (p.textContent.includes('error')) {
		p.classList.add('error');
	} else if (p.textContent.includes('success')) {
		p.classList.add('success');
	} else {
		p.classList.add('blue');
	}
});

const article = document.querySelector('article')
console.log(article.children);

Array.from(article.children).forEach(child => {
	console.log(child);
})

const title = document.querySelector('h1')
console.log(title.parentElement.children);
console.log(title.nextElementSibling.textContent.toUpperCase());

