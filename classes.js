class MyPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY = () => this.y;

  static nonsense() {
    console.log("This is nonsense");
  }
}

class ThreeMyPoint extends MyPoint {
  constructor(x, y, z) {
    super(x, y);

    this.z = z;
  }

  getZ = () => this.z;
}

const iPt = new MyPoint(6, 7);
console.log(iPt.getX());
console.log(iPt.getY());

const zPt = new ThreeMyPoint(3, 4, 5);
console.log(zPt.getX());
console.log(zPt.getY());
console.log(zPt.getZ());
