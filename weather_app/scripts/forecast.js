//https://developer.accuweather.com/user/me/apps USE THIS LINK TO GET THE SOURCE

const key = 'I7Q17TiLS1IeW0pUKRaLUGADAaLRmJ9D ';

//2nd function get weather information in that city

const getweather = async (id) => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${id}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

//firt function get city information
const getCity = async (city) => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;
	const response = await fetch(base + query);

	const data = await response.json();

	return data[0]; //to get the closest match
};
getCity('manchester') //this return a promise so we can apply .then() on it to get the data
	.then((data) => getweather(data.Key))
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
