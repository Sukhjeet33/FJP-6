//move a file

let fs = require("fs");
let path = require("path");

let destPath = path.join(__dirname, "newFolder", "file1.txt");

let srcPath = path.join(__dirname, "file1.txt");

fs.copyFileSync(srcPath, destPath);

fs.unlinkSync(srcPath);
