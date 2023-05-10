//Date & Time
// const now = new Date();
// console.log(now);
// console.log(typeof now);

// //get year, manth, day, and time
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth() + 1);
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// //Timestomps represent the number of milsecond generated since 00:00 01.01.1970 and allow us to compare two dates together
// console.log('timestamps:', now.getTime());

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// //get the date in the past
// const before = new Date('November 23 2014 4:30:30 AM');
// const now1 = new Date();

// console.log(now1.getTime(), before.getTime());
// const diff = now1.getTime() - before.getTime();
// console.log(`${diff} difference`); //difference in millisecond

// // change the (diff )to minutes, hours, & day

// const mins = Math.round(diff / 1000 / 60);
// console.log(`${mins}: mins`);

// const hours = Math.round(mins / 60);
// console.log(`${mins} mins, & ${hours} hours`);

// const day = Math.round(hours / 24);
// console.log(`${mins} mins, ${hours} hours, ${day} days`);

// console.log(`I have been in Turkey for ${day} days.`);

// //convert timestamp to date object
// const timestamp = now.getTime();
// const timesTampConverted = new Date(timestamp);
// console.log(timesTampConverted);

const clock = document.querySelector('.clock');

// create a digital clok
const tick = () => {
	const now = new Date();

	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();

	const html = `
   <span>${h}:</span>
   <span>${m}:</span>
   <span>${s}</span>
   `;
	clock.innerHTML = html;
};
setInterval(tick, 1000);

const isim = prompt('Hello')
console.log(isim);  
