// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let unorganisedPathName = path.join(__dirname, "..", "unorganised");

let nameArr = fs.readdirSync(unorganisedPathName);
// console.log(typeof nameArr);

let extArr = [];

for (let i = 0; i < nameArr.length; i++) {
  //   console.log(nameArr[i]);
  //   extArr.push(path.extname(nameArr[i]));
  extArr[i] = path.extname(nameArr[i]);
}

console.log(extArr);
