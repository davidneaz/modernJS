// Arrays are lists of JavaScript primitives and objects
const arr = [
  32,
  "golf",
  2.343434,
  function() {
    console.log("Haha");
  },
  57
];

// Arrays only use integers in brackets to index
// Not dot notation and not braces {}
console.log(arr[0]);
arr[3];

// Arrays don't have to be dense
const argh = [];
argh[0] = 456456;
argh[66] = "String here!";
console.log(argh);

// Maps are containers for key-value pairs
const newMap = new Map();

// Keys are usually strings but can be anything
const key1 = "lookup";
const key2 = { name: "Why do this?" };
const key3 = function() {
  console.log("Whaaat?!");
};

newMap.set(key1, "Looked up by string");
newMap.set(key2, "Looked up by object?");
newMap.set(key3, "What are you even doing?");

console.log(newMap.get(key1));
console.log(newMap.get(key2));
console.log(newMap.get(key3));
console.log(newMap.get(function() {}));

// Destructuring
const erre = [34, 45, 56, 67, 78];
const [num1, num2, num3] = erre;
console.log(num1);
console.log(num2);
console.log(num3);

// You can skip items too
const [, , anum1, anum2, anum3] = erre;
console.log(anum1);
console.log(anum2);
console.log(anum3);

// Can use ... to say all the rest
const errey = [6, 7, 8, 9, 0];
const [enum1, ...etc] = errey;
console.log(enum1);
console.log(etc);

// Can be used on objects
const obj1 = {
  name: "Phillip J. Fry",
  age: 25,
  family: {
    father: "Yancy, Sr.",
    mother: "Mrs. Fry",
    brother: "Yancy, Jr."
  }
};

const { brother } = obj1.family;
console.log(brother);
