import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
	query,
	where,
	orderBy,
	serverTimestamp,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCmtWyTHHDyBLnP2Zydc2ANJircyxpzbP4',
	authDomain: 'fir-9-hsk.firebaseapp.com',
	projectId: 'fir-9-hsk',
	storageBucket: 'fir-9-hsk.appspot.com',
	messagingSenderId: '193613357485',
	appId: '1:193613357485:web:07c657b8cc8915a96c8124',
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth(); // will be used for login/logout ...

//collection ref
const collectRef = collection(db, 'books');

// queries
const q = query(collectRef, orderBy('createdAt'));

// real time collection data
const unsubColl = onSnapshot(q, (snapshot) => {
	let books = [];
	snapshot.docs.forEach((doc) => {
		books.push({ ...doc.data(), id: doc.id });
	});
	console.log(books);
});

// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
	e.preventDefault();

	addDoc(collectRef, {
		title: addBookForm.title.value,
		author: addBookForm.author.value,
		createdAt: serverTimestamp(),
	}).then(() => {
		addBookForm.reset();
	});
});

// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const docRef = doc(db, 'books', deleteBookForm.id.value);
	deleteDoc(docRef).then(() => {
		deleteBookForm.reset();
	});
});

// get a single document
const docRef = doc(db, 'books', 'gkNJNEOt57u5koSsn5Hd');
const unsubDoc = onSnapshot(docRef, (doc) => {
	console.log(doc.data(), doc.id);
});

// update a document
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const docRef = doc(db, 'books', updateForm.id.value);

	updateDoc(docRef, {
		title: 'updated title',
	}).then(() => {
		updateForm.reset();
	});
});

// signing users up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = signupForm.email.value;
	const password = signupForm.password.value;

	createUserWithEmailAndPassword(auth, email, password)
		.then((cred) => {
			//console.log('user created:', cred.user);
			signupForm.reset();
		})
		.catch((err) => console.log(err.message));
});

// logout
const logoutForm = document.querySelector('.logout');
logoutForm.addEventListener('click', () => {
	signOut(auth)
		//.then(() => console.log('the user signed out'))
		.catch((err) => console.log(err.message));
});

// Signin
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = loginForm.email.value;
	const password = loginForm.password.value;

	signInWithEmailAndPassword(auth, email, password)
		//.then((cred) => console.log('user login:', cred.user))
		.catch((err) => console.log(err.message));
});

// user state change
const unsubAuth = onAuthStateChanged(auth, (user) => {
	console.log('user satus changed:', user);
});

// unsubscribing from db/auth changes
const unsubForm = document.querySelector('.unsubscribe');
unsubForm.addEventListener('click', () => {
	console.log('unsubscribing');
	unsubColl();
	unsubDoc();
	unsubAuth();
});
