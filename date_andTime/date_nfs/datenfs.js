const now = new Date();
//console.log(dateFns.isToday(now));

//formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

//comparing dates
const before  = new Date('February 1 2023 12:00:00')
console.log('about', dateFns.distanceInWords(now, before, {addSuffix: true}));
