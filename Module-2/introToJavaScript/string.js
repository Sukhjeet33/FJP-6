let str = "I am a string";
console.log(str);

// length method
let len = str.length;
console.log(len);

// slice method
let slicedStr = str.slice(2, 6);
console.log(slicedStr);

// replace method
let replacedStr = str.replace("am", "was");
console.log(replacedStr);

// uppercase
let upperCase = str.toUpperCase();
console.log(upperCase);

// lowercase
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concat

let firstName = "Sukhjeet";
let lastName = " Singh";

// let fullName = firstName.concat(lastName);
// console.log(fullName);

// or

let fullName = firstName + lastName;
console.log(fullName);

// split

let splitString = str.split(" ");
console.log(splitString);

// trim

let trimString = str.trim(" ");
console.log(trimString);
