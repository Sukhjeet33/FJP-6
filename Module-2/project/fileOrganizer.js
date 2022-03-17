// let inputArr = process.argv;
// console.log(inputArr);

// let input = process.argv[2];
// console.log(input);

let fs = require("fs");

let folderPath = process.argv[2];

let folderExists = fs.existsSync(folderPath);

if (folderExists) {
  let files = fs.readdirSync(folderPath);
  console.log(files);
} else {
  console.log("Enter a valid Path !!!");
}
