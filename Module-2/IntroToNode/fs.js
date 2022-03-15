let fs = require("fs");
// console.log(fs);

let path = require("path");

let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// CRUD
// create
fs.writeFileSync(filePath, "Writing on existing file!!!!!!");

// read
let content = fs.readFileSync(filePath, "utf-8");
console.log(content);

// update

fs.appendFileSync(filePath, "\nAdding more content??!!!");

console.log(fs.readFileSync(filePath, "utf-8"));

// delete

fs.unlinkSync(filePath);
