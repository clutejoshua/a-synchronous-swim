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

  // res.end('left'); res.end('right'); res.end('up'); res.end('down');

  if (req.method === 'GET') {
    res.writeHead(200, headers);
  }


  res.end();
  next(); // invoke next() at the end of a request to help with testing!

};

// write a random direction function
let randomDirection = () => {
  let possibleMovesArr = ['down', 'up', 'left', 'right'];
  let randomDirection = possibleMovesArr[Math.floor(Math.random()*4)];
  // SwimTeam.move(randomDirection)
  return randomDirection
}

// this.writeHead = (responseCode, headers) => {
//   this._responseCode = responseCode;
//   this._headers = headers;
// };