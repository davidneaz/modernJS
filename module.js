
// Going to make modules with some exported symbols

export function makeABigString(starter) {
  if (!starter) {
    starter = 'YouForgot';
  }

  return `${starter}-${starter}-${starter}-${starter}`;
}

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }
}

function unavailable() {
  console.log('This tremendous function is not exported');
}
