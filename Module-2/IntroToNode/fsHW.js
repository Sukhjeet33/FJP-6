let fs = require("fs");
let path = require("path");

// let currentDir = __dirname;
// console.log(currentDir);
let newDir = path.join(__dirname, "fwHWFolder");

// let newDir = currentDir.concat("/fwHWFolder");
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
}

// console.log(fs.readdirSync(newDir));

let newFile = path.join(newDir, "Testing.txt");
fs.writeFileSync(newFile, "testing testing ??!!");

let copyPath = path.join(newDir, "..", "Testing.txt");

fs.copyFileSync(newFile, copyPath);

// if (fs.existsSync(newDir)) {
fs.rmdirSync(newDir, { recursive: true });
// }
// fs.rmdirSync(newDir);
