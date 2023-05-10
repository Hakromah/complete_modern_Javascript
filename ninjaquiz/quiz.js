const correctAnswers = ['B', 'C', 'B', 'A'];

const form = document.querySelector('.quiz-form');
const resultData = document.querySelector('.result');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	result.style.display = 'block';

	let score = 0;
	let userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
	];

	//check answers
	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});

	//Auto scroll to the top on submit
	window.scrollTo(0, 0);
	result.classList.remove('d-none');

	//show the result on the page with animation
	let output = 0;
	const timer = setInterval(() => {
		result.querySelector('span').textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 20);
});

//set animation on score counter
