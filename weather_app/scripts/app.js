const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
	//destructure properties
	const { cityDetails, weather } = data;
	console.log(data);

	//update details template
	details.innerHTML = `
   <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
         <span>${weather.Temperature.Metric.Value}</span>
         <span>&deg;C</span>
      </div>
   `;

	//update the day/night & icons images
	const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSrc);

	let timeSrc = null;
	{
		weather.IsDayTime
			? (timeSrc = './img/day.svg')
			: (timeSrc = './img/night.svg');
	}

	time.setAttribute('src', timeSrc);

	//remove the d-none class name on present
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none');
	}
};

cityForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const updateCity = async (city) => {
		const cityDetails = await getCity(city);
		const weather = await getweather(cityDetails.Key);

		return { cityDetails, weather };
	};

	window.scrollTo(0, 0);
	//update the Ui with a new city
	const city = cityForm.city.value.trim();
	cityForm.reset();

	updateCity(city)
		.then((data) => updateUI(data))
		.catch((err) => console.log(err));

	//set localStorage
	localStorage.setItem('city', city);
	localStorage.getItem('city');

	if (localStorage.getItem('city')) {
		updateCity(localStorage.getItem('city'))
			.then((data) => updateUI(data))
			.catch((err) => console.log(err));
	}
});
