let cp = require("child_process");
// console.log(cp);

// open calculator using this file
// cp.execSync("calc");
// cp.execSync("open -a Calculator");

let content = cp.execSync("node test.js");
console.log("Output from test.js " + content);
