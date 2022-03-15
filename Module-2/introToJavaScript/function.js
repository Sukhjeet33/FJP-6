// function without parameter and return type
function sayHello() {
  console.log("Hello from function");
}

sayHello();

// function with parameter

function sum(num1, num2) {
  console.log("Addition of 2 numbers " + (num1 + num2));
}

sum(3, 6);

// function with return type
function multiply(num1, num2) {
  return num1 * num2;
}

let ans = multiply(12, 78);
console.log(ans);

// functions are first class citizens in JS
let a = function sub(num1, num2) {
  return num1 - num2;
};
console.log(a(14, 8));

// IIFE -> Immediatily Invoked function expression
(function () {
  console.log("Hello from IIFE");
})();

// IIFE with Parameters
(function (num1, num2) {
  console.log(num1 / num2);
})(35, 7);
