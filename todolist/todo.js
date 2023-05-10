const addForm = document.querySelector('.add');
const addUl = document.querySelector('ul');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
	// if (!addForm.add.value) {
	// 	return;
	// } this will stop empty form submition

	let html = `
   <li class="list-group-item d-flex text-light justify-content-between align-items-center">
      <span>${todo}</span> <ion-icon style="cursor: pointer" name="trash-outline" class="delete"></ion-icon>
   </li> `;

	addUl.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim(); // trim() will remove all the empty spaces

	if (todo.length) {
		generateTemplate(todo);
		//to call the todo inside this if function, will prevent empty form submition.
	}
	addForm.add.value = ''; //reset the input field
});

// delete todos
addUl.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// SEARCH AREA
const filterTodos = (element) => {
	Array.from(addUl.children)
		.filter((todo) => !todo.textContent.toLocaleLowerCase().includes(element))
		.forEach((todo) => todo.classList.add('filtered'));

	Array.from(addUl.children)
		.filter((todo) => todo.textContent.toLocaleLowerCase().includes(element))
		.forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
	const element = search.value.trim().toLowerCase();

	filterTodos(element);
});
