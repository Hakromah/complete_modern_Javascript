function generateSelect() {
	let select = document.createElement('select');
	return select;
}
let select = generateSelect();
document.body.appendChild(select);

function generateOption(text, value) {
	let option = document.createElement('option');
	option.text = text;
	option.value = value;
	return option;
}

let option = generateOption('chose one', '');
select.appendChild(option);

option = generateOption('Turke', 90);
select.appendChild(option);
option = generateOption('Guinea', 224);
select.appendChild(option);
option = generateOption('Liberia', 231);
select.appendChild(option);

select.size = 1;
//select.onchange = doSomething;
