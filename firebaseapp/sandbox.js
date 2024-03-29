const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
	let time = recipe.prepared_at.toDate();
	let html = `
		<li data-id = "${id}">
			<div>${recipe.title}</div>
			<div>${time}</div>
			<button class="btn btn-danger btn-sm my-2">delete</button>
		</li>
	`;
	list.innerHTML += html;
};

//remove from the browser on delete instantly
const removeRecipe = (id) => {
	const recipes = document.querySelectorAll('li');
	recipes.forEach((recipe) => {
		if (recipe.getAttribute('data-id') === id) {
			recipe.remove();
		}
	});
};

//get documents
const unsub = db.collection('recipes').onSnapshot((snapshot) => {
	snapshot.docChanges().forEach((change) => {
		console.log(change);
		const doc = change.doc;
		if (change.type === 'added') {
			addRecipe(doc.data(), doc.id);
		} else if (change.type === 'removed') {
			removeRecipe(doc.id);
		}
	});
});

//add documents
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const now = new Date();
	const recipe = {
		title: form.recipe.value,
		prepared_at: firebase.firestore.Timestamp.fromDate(now),
	};

	form.reset();

	db.collection('recipes')
		.add(recipe)
		.then(() => {
			console.log('recipe added');
		})
		.catch((err) => console.log(err));
});

//deleting data
list.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const id = e.target.parentElement.getAttribute('data-id');
		db.collection('recipes')
			.doc(id)
			.delete()
			.then(() => {
				console.log('recipe deleted');
			});
	}
});

//unsubscribe from listening changes
button.addEventListener('click', () => {
	unsub();
	console.log('unsubscribed from collection changes');
});
