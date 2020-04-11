// brings the code up
cat (file name)

// runs the code
node (file name)

// ??
let http = require('http');

// find url location
let path = require('path');

// helps parse url
let url = require('url');

// uses underscore methods after you 'npm install underscore'
let _ = require('underscore');

_.each([1,2,3], (item) => console.log(item));

// fs = fileSync
let fs = require('fs');

// going to read the file contents
let fileContents = fs.readFileSync('hello.txt');
console.log(fileContents.toString())

// readFile takes in a file and a callback (which takes in an error and the file)
let retVal = fs.readFile('hello.txt', (err, fileContents) => {
  console.log(fileContents.toString())
})

// vi => visual editor





/////////////authoring a module///////////////
let greeting = "Ahoy-hoy";
let myNumber = '867-5309';

let answer = function() {
  console.log(greeting);
}

let dial = function(number) {
  console.log('calling ' + number);
}

exports.myNumber = myNumber;
exports.answer = answer;
exports.dial = dial;

/// can also use

function(module) {
  let exports = module.exports = {};

  let greeting = "Ahoy-hoy";
  let myNumber = '867-5309';

  let answer = function() { ... }

  let dial = function(number) { ... }

  module.exports.myNumber = myNumber;
  module.exports.answer = answer;
  module.exports.dial = dial;

  return module.exports;
}

/////////////using module///////////////
// require -> exposed functionality available to other modules
let telephone = require('./phone');

console.log(telephone.myNumber);
telephone.answer();
telephone.dial('634-5789');

//// ajax request in console
// only understands up down left right
$.get('http://localhost:3001', (command) => console.log(command));
$.get('http://localhost:3001', (command) => SwimTeam.move(command));



// spending time in client (js)and server side(https)

// binary file is a picture (not readable to humans)
od-tcx1 background.jpg | head -n 50