// insted of 'class' we can use function
// that has constructures like class obj.
function Kullanıcı(name, email) {
	this.name = name;
	this.emwil = email;
	this.login = () => {
		console.log(`${this.name} is loged in`);
	};
}

const user1 = new Kullanıcı('Canan', 'example@gmail.com');
const user2 = new Kullanıcı('Elif', 'example2@outlook.com');
console.log(user1, user2);

user1.login();
