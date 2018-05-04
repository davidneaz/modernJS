Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const smallOne = [3, 5, 7];
smallOne.foo = "hello";

let index = 0;
while (index < smallOne.length) {
  console.log(smallOne[index]);
  index += 1;
}

// logs 0, 1, 2, "foo", "arrCustom", "objCustom"
for (const i in smallOne) {
  console.log(i);
}

// logs 0, 1, 2, "foo"
for (const i in smallOne) {
  if (smallOne.hasOwnProperty(i)) {
    console.log("i");
  }
}

// logs 3, 5, 7
for (const i of smallOne) {
  console.log(i);
}
