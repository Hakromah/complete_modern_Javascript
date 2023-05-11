//fetch api from my private json files

fetch('./todos/todos1.json')
	.then((response) => {
		//console.log('resolved:', response);
		return response.json();
	})
	.then((data) => {
		//console.log(data);
	})
	.catch((err) => {
		//console.log('rejected:', err);
	});

//async & await
const getTodos = async () => {
	const response = await fetch('./todos/todos1.json');
   
	if (response.status !== 200) {
		throw new Error('cannot fetch the data');
	}
	const data = await response.json();
	return data;
};

getTodos()
	.then((data) => console.log('resolved async fetch:', data))
	.catch((err) => console.log('Ooops error ocured:', err.message));
