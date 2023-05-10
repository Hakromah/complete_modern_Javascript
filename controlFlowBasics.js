// for (let i = 0; i < 5; i++) {
// 	console.log('in loop', i);
// }
// console.log('loop finished');

const names = ['Alieu', 'Aisha', 'Matthew'];
for (let i = 0; i < names.length; i++) {
	//console.log(names[i]);

	let html = `<div>${names[i]}</div>`;
	console.log(html);
}

//while loop
let i = 0;
while (i < 5) {
	console.log('in loop', i);
	i++; // if you don't add increment i (i++), it will be infint loop
}

let user = false;
if (!user) {
	console.log(user);
}

//break && continue to stop the loop

const scores = [50, 25, 30, 0, 100, 10, 60];

for (let i = 0; i < scores.length; i++) {
	if (scores[i] === 0) {
		continue; //this will omit the 0
	}
	console.log('your score is:', scores[i]);

	if (scores[i] === 100) {
		console.log('congrates, you got the top score');
		break;
	}
}

// switch statement

const grade = 'D';

switch (grade) {
	case 'A':
		console.log('you got an A!');
		break;
	case 'B':
		console.log('you got a B!');
		break;
	case 'C':
		console.log('you got a C!');
		break;
	case 'D':
		console.log('you got a D!');
		break;
	case 'E':
		console.log('you got an E!');
		break;
	case 'F':
		console.log('you got an F!');
	default:
		console.log('not a valid grade');
}
