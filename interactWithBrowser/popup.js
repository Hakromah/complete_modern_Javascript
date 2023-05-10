const button = document.querySelector('button');
const popup = document.querySelector('.popup-wraper');

const innerPopup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup-close');

button.addEventListener('click', () => {
	popup.style.display = 'block'; // open popup
});

closePopup.addEventListener('click', () => {
	popup.style.display = 'none'; //close popup with X
});

popup.addEventListener('click', (e) => {
	if (e.target === popup) {
		popup.style.display = 'none'; //close popup with any space
	} else {
		innerPopup.style.display = 'block';
	}
});
