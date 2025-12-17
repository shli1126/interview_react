"use strict";

const arr = [1, 2, 3, 4, 5];
const [a, _, c] = arr;
console.log(a);
console.log(c);

const obj = {
  user_name: "alice",
  user_age: 25,
};

const { user_name: userName, user_age: userAge } = obj;

console.log(userName);
console.log(userAge);

const { user_name, user_age = 40 } = obj;
console.log(user_name);
console.log(user_age);

const user = {
  name: "alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

const greet = (name = "guest") => {
  return console.log(`hello, ${name}`);
};
greet();

const calculate = (a, b) => a + b;

console.log(calculate(2, 3));

(function () {
  console.log("IIFE");
})();

setTimeout(() => {
    console.log("Hi Print")
}, 1000)




const add1 = (a, b, c) => a + b + c;
const add2 = a => b => c => a + b + c;