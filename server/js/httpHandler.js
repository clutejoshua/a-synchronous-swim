const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  // res.end('left'); res.end('right'); res.end('up'); res.end('down');
  // write a random direction function

  res.end();
  next(); // invoke next() at the end of a request to help with testing!

};

let randomDirection = () => {
  let possibleMovesArr = ['down', 'up', 'left', 'right'];
  let randomDirection = possibleMovesArr[Math.floor(Math.random()*4)];
  // SwimTeam.move(randomDirection)
  return randomDirection
}