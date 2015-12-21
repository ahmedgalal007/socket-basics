var moment = require('moment');

var now = moment();
moment.locale('ar');

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf('MMM Do h:mma'));

var timestamp = 1450687768023;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));
//console.log(timestampMoment.format('DD Do MMM, YYYY'));


// console.log(now.format('MMM Do h:mma'));

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMM D YYYY, h:mma'));
