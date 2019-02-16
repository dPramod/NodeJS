console.log("Hello World !");

//Using OS Module
const os = require('os');
var user = os.userInfo();
console.log(user);

// Calling a export from user exports
const fn = require('./functions.js');
console.log(`Addition of two numbers 5 and 4 is ${fn.add(5,4)}`);