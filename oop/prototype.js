//constructor function

function ProtoUser(name, email) {
	this.name = name;
	this.email = email;

	ProtoUser.prototype.login = () => {
		console.log(`${this.name} is logged in`);
		return this;
	};

	ProtoUser.prototype.logout = () => {
		console.log(`${this.name} has logged out`);
		return this;
	};
}

function Admin(name, email, title) {
	ProtoUser.call(this, name, email);
	this.title = title;
}

Admin.prototype = Object.create(ProtoUser.prototype);

Admin.prototype.deleteProtoUser = () => {
	//delete a user
};

const pUser1 = new ProtoUser('Canan', 'example@gmail.com');
const pUser2 = new ProtoUser('Elif', 'example2@outlook.com');
const pUadmin = new Admin('hassan', 'hassan@admain.com.tr', 'manager');

console.log(pUser1, pUser2, pUadmin);
pUser1.login().logout();
