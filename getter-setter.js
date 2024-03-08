class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  // Like a property but it's call behind the seen function! 
  get name() {
    console.log("Like a property but it's call behind the seen function!");
    return this._name.toUpperCase();
  }

  set name(value) {
    if(value.toLowerCase() === "amin") return; 
    this._name = value;
  }

  print() {
    console.log(this);
  }
}

const amin = new Person("Amin", "amin@amin.com");
const nafis = new Person("Nafis", "nafis@nafis.com");
const habib = new Person("Habib", "habib@habib.com");

amin.name = "New Name";
// amin.nam = "Somethings";
console.log(amin)
console.log(amin.name);