//move a file

let fs = require("fs");
let path = require("path");

let movePath = fs.path(__dirname);

let srcPath = fs.path(__dirname,"newFolder","newFile.txt");

fs.copyFileSync