/* 
  instance of operator
*/

class Person {
  static className = "Person";
  static PI = 3.1416;

  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  get name() {
    console.log("Like a property but it's call behind the seen function!");
    return this._name.toUpperCase();
  }

  set name(value) {
    if(value.toLowerCase() === "amin") return; 
    this._name = value;
  }

  print() {
    console.log("ClassName = Person, " + this + "");
    console.log(this);
  }

  toString() {
    return `Name: ${this._name}, Email: ${this._email}`;
  }

  static isValid(age) {
    return age >= 18;
  }

  static equal(user01, user02) {
    if(user01.name !== user02.name) return false;
    if(user01.email !== user02.email) return false;

    return true;
  }
}

const amin = new Person("Amin", "amin@amin.com");
const alAmin = new Person("Amin", "amin@amin.com");
const nafis = new Person("Nafis", "nafis@nafis.com");
const habib = new Person("Habib", "habib@habib.com");

const test = { _name: "Test", _email: "test@2test.com" };

console.log(amin instanceof Person);
console.log(test instanceof Person);

console.log(Person.PI);

const testUser = { 
  name: "Test Name", 
  email: "test@gmail.com", 
  age: 18,
  // age: 15,
};

let p5 = null;
if(Person.isValid(testUser.age)){
  p5 = new Person(testUser.name, testUser.email);
}
console.log(p5);

console.log(Person.equal(amin, nafis));
console.log(Person.equal(amin, alAmin));
console.log(amin === alAmin);