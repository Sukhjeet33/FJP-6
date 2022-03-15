console.log("Swagat hai aap sabhi logo ka!!!");

// Variables in JS and data types

let num = 10;
console.log(num);

let char = "a";
console.log(char);

let str = "I am string";
console.log(str);

let bool = true;
console.log(bool);

// loops in JS

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

count = 10;
while (count > 0) {
  console.log(count);
  count--;
}

let n = 13;
let flag = 1;
// let flag = true;
// for (let i = 2; i * i <= n; i++) {
//   if (n % i == 0) {
//     flag = false;
//   }
// }
for (let i = 2; i * i <= n; i++) {
  if (n % i == 0) {
    flag = 10;
  }
}
if (flag) {
  console.log("Number is prime ");
} else {
  console.log("Number is non prime");
}
