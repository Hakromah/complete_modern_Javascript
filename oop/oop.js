class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.score = 0;
	}
	logIn() {
		console.log(`${this.name} just loged in`);
		return this;
	}
	logedOut() {
		console.log(`${this.name} is loged out`);
		return this;
	}
	incScore() {
		this.score += 1;
		console.log(`${this.name} has scored ${this.score}`);
		return this;
	}
}

class Admin extends User {
	constructor(name, email, title, company) {
		super(name, email);
		this.title = title;
		this.company = company;
	}
	deleteUser(user) {
		users = users.filter((u) => u.name !== user.name);
	}
}

const userOne = new User('hassan', 'example@gmail.com');
const userTwo = new User('amara', 'example2@gmail.com');
const admin = new Admin('oumar', 'example3@gmail.com', 'manager', 'prestij');

console.log(userOne, userTwo, admin);
let users = [userOne, userTwo, admin];
console.log(users);

admin.deleteUser(userTwo);
console.log(users);

userOne.incScore().incScore().logedOut(); // to chain several methods on the object like this, you have to return the methods with "this keyword"
userTwo.logedOut();
admin.incScore();
