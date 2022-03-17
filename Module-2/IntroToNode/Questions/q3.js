//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let srcPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "Module-1",
  "project",
  "index.html"
);
console.log(srcPath);
let destPath = path.join(__dirname, "..", "..", "index.html");
console.log(destPath);

fs.copyFileSync(srcPath, destPath);
