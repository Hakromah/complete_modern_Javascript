const form = document.querySelector('.signup-form');
const feadback = document.querySelector('.feadback');

const userPattern = /^[a-zA-Z]{8,12}$/;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!form.username.value) {
		return;
	}
	const user = form.username.value;
	if (userPattern.test(user)) {
		feadback.innerHTML = `<p class='green'>that username is valide</p>`;
	} else {
		feadback.innerHTML = `<p class='red'>username must contains letters only & be between 8 & 12 characters long</p>`;
		('');
	}
	form.username.value = '';
});

//live feadback
form.username.addEventListener('keyup', (e) => {
	if (userPattern.test(e.target.value)) {
		form.username.setAttribute('class', 'success');
	} else {
		form.username.setAttribute('class', 'error');
	}
});

// Regular expression tovalidate the form data (https://www.regex101.com) select ECMAScript(javascript)
//testing RegEx
// const user = '33445hhggsi';
// let result = user.search(userPattern);
// console.log(result);
