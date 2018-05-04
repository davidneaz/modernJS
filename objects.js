const obj = {
  name: "default name",
  title: "Senior Doofus 4",
  age: 32,
  startDate: new Date(2006, 6, 1),
  daysOfService: function() {
    return (Date.now() - this.startDate) / (1000 * 60 * 60 * 24);
  },
  yearsOfService() {
    return this.daysOfService() / 365;
  }
};

console.log(obj.yearsOfService());
