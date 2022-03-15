// Empty Object
let obj = {};
console.log(obj);

let objOne = {
  name: "Sukhjeet Singh",
  age: 200,
  phoneNo: 999999999,
  lastName: "Singh",
};

console.log(objOne);

let capAmerica = {
  name: "Steve Rogers",
  age: 110,
  friends: ["Bucky", "Tony", "Natasha", "Bruce", "Thor", "Betty"],
  address: {
    city: "Queens",
    state: "New York",
    country: "U.S.A",
  },
  sayHi: function () {
    console.log("Captain America says Hiii");
  },
  sayHi2: function () {
    return "Captain America says Hiii22";
  },
};

console.log(capAmerica);

console.log(capAmerica.name);

console.log(capAmerica.age);

console.log(capAmerica.friends);

console.log(capAmerica.address);

console.log(capAmerica.address.city);

console.log(capAmerica.sayHi2());

capAmerica.sayHi();

console.log("Object before update: ", capAmerica);

// add a key
capAmerica.movies = ["First Avenger", "Winter Soldier", "Civil War", "Endgame"];

console.log("Object after update: ", capAmerica);

// delete a key
delete capAmerica.sayHi2;

console.log(capAmerica);

// Second method to access a key
console.log(capAmerica.name);
console.log(capAmerica["name"]);
console.log(capAmerica["address"]["state"]);
