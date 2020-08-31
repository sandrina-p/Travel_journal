var moment = require('moment'); 

var myDate = new Date();
console.log(myDate);
var dateFormating = moment (myDate).format('LL');