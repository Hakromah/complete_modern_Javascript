//Object literals notation

const user = {
	name: 'crystal',
	age: 30,
	email: 'kkhh12@gmail.com',
	location: 'Istanbul',
	blogs: [
		{ title: 'blog 1: why mac & cheese rules', likes: 40, postDate: 2022 },
		{
			title: 'blog 2: 10 things to make with marmite',
			likes: 60,
			postDate: 2020,
		},
	],

	login() {
		console.log('the user logged in');
	},

	logout() {
		console.log('The user logged out');
	},

	logBlogs() {
		console.log('This user has written the following blogs');
		user.blogs.forEach((blog) => {
			console.log(
				`${blog.title} has ${blog.likes} likes, and was pubished in ${blog.postDate}`
			);
		});
	},
};

user.login();
user.logout();
user.logBlogs();
