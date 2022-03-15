// "/Users/Sukhi/pepCoding/DevFolder/FJP-6/Module-2/introToNode/path.js"

const { dirname } = require("path");
let path = require("path");
console.log(path);

let extentionName = path.extname(
  "/Users/Sukhi/pepCoding/DevFolder/FJP-6/Module-2/introToNode/path.js"
);
console.log(extentionName);

let baseName = path.basename(
  "/Users/Sukhi/pepCoding/DevFolder/FJP-6/Module-1/css_selector_questions/q1.html"
);
console.log(baseName);

console.log(__dirname);

console.log(__filename);

let newFilePath = path.join(__dirname, "testt.js");
console.log(newFilePath);
