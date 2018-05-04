// Spread operator is used to apply an array

// Copying an array
const oldArray = [23, 67, 54, 98, 222, 33];
const newArray = [...oldArray];

// Concatenating arrays together
const twoArray = ["Man-Bat", "Martian Manhunter", "Killer Croc"];
const mergedArr = [...oldArray, ...twoArray];
console.log(mergedArr);

// Can also concatenate individual elments with the array
const anotherArr = ["Killer Moth", ...twoArray, "Rainbow Raider"];
console.log(anotherArr);

// Spread an array over function parameters. Does not have to match in number
function takeThree(a, b, c) {
  console.log(`Got three: ${a} ${b} ${c}`);
}

const perfectSize = [45, "Blue Snowman", 88];
takeThree(...perfectSize);
takeThree(oldArray);
takeThree(22, oldArray);

// Can also be applied to objects for copying and merging
const obj1 = {
  name: "Martian Manhunter",
  age: 357
};

const obj2 = {
  name: "Rainbow Raider",
  stripes: 7
};

const clonedObj = { ...obj1 };
console.log(clonedObj);
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
