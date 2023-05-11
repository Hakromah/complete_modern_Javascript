//http request with promis chainning

const getTodos = (resource) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText);
				resolve(data);
			} else if (request.readyState === 4) {
				reject('Error getting resource!!');
			}
		});
		// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
		request.open('GET', resource);
		request.send();
	});
};

getTodos('./todos/todos1.json')
	.then((data) => {
		console.log('Promise 1 resolved:', data);
		return getTodos('./todos/todos2.json');
	})
	.then((data) => {
		console.log('Promise 2 resolved:', data);
		return getTodos('./todos/todos3.json');
	})
	.then((data) => {
		console.log('promise 3 resolved:', data);
		return getTodos('./todos/todos4.json');
	})
	.then((data) => {
		console.log('promise 4 resolved:', data);
	})
	.catch((err) => {
		console.log('Promise rejected:', err);
	})
	.finally(() => {
		console.log('All promises are invoked');
	});

// getTodos('./todos/todos1.json', (err, data) => {
// 	console.log(data);
// 	getTodos('./todos/todos2.json', (err, data) => {
// 		console.log(data);
// 		getTodos('./todos/todos3.json', (err, data) => {
// 			console.log(data);
// 			getTodos('./todos/todos4.json', (err, data) => {
// 				console.log(data);
// 			});
// 		});
// 	});
// });

// const getSomthing = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve('data founded');
// 		reject('somthing went wrong');
// 	});
// };

// getSomthing()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((data) => {
// 		console.log(data);
// 	});
