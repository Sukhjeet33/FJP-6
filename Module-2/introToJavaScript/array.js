// empty array

let arr = [];
console.log(arr);

// array with elements
let eleArr = [1, 2, 3, 4, "string string", "r", 3.5, 9.99];
console.log(eleArr);

console.log("element at 4th place: " + eleArr[4]);

console.log("element at 0th place: " + eleArr[0]);

eleArr[3] = "Hello";

console.log(eleArr);
console.log("\n");
// array methods
// 1.Push method

console.log("Array before Push: ", eleArr);
eleArr.push("push push");
console.log("Array after Push: ", eleArr);

//
console.log("\n");
// 2.Pop Method

console.log("Array before Pop: ", eleArr);
eleArr.pop();
console.log("Array after Pop: ", eleArr);

// 3.Shift Method

console.log("Array before shift: ", eleArr);
eleArr.shift();
console.log("Array after shift: ", eleArr);

// 4.unshift Method

console.log("Array before unshift: ", eleArr);
eleArr.unshift(21);
console.log("Array after unshift: ", eleArr);

// 5. length Method

let len = eleArr.length;
console.log(len);
