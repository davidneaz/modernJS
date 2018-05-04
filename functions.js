// Three types of functions: named, anonymous and arrow

// function declaration
function doStuff(x, y) {
  if (x > y) {
    console.log(`${x} is the bigger value`);
  } else {
    console.log(`${y} is the bigger value`);
  }

  return x + y;
}

// function expression
const fx = function(x) {
  if (x instanceof String) {
    console.log(x);
  }

  return x;
};

// default parameters
function someStuff(a, b = 68) {
  console.log(`a: ${a} b: ${b}`);
}
someStuff(32);
someStuff(33, 99);

const af = x => {
  // This arrow function has one parameter: x
  console.log(`This is the body of the function: ${x}`);
};

const bf = () => {
  console.log("This arrow function has no parameters");
};

const cf = (x, y) => {
  console.log(`Arrow function is passed ${x} and ${y}`);
};

// Because functions get this dynamically, in situations like
// this, it would be undefined. 'That' can be found because the
// has access to lexical scope.
var jane = {
  name: "Jane",

  logHello: function(friends) {
    var that = this;
    friends.forEach(function(friend) {
      console.log(that.name + " says hello to " + friend);
    });
  }
};

// The other workaround is to call bind. The problem with
// both of these workarounds is that you need to know when
// you need them
var jane = {
  name: "Jane",

  logHello: function(friends) {
    friends.forEach(
      function(friend) {
        console.log(this.name + " says hello to " + friend);
      }.bind(this)
    );
  }
};

// Arrow function have access to 'this' in lexical scope.
let jane = {
  name: "Jane",

  logHello: function(friends) {
    friends.forEach(friend => {
      console.log(this.name + " says hello to " + friend);
    });
  }
};
