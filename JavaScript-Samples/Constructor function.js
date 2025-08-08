//Constructor function: need to add the first letter of each word as capital
function Human(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.greet = function () {
    alert(`Hi name is ${this.name}`);
  };
}
//we can call the constructor function to create object
var human1 = new Human("Vishnu", 25, "Male");
//we can call the method:
human1.greet();