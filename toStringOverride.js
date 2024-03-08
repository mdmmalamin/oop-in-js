/*
  toString Override

  #Polymorphism doing manly two work in OOP
    - method override
      • console.log(amin); Person { _name: 'Amin', _email: 'amin@amin.com' }
        it's means toString method
      • we customize this method in the class & method name toString(){}
      • console.log don't call toString() method
      • if need to concatenation in the class then call toString() 
    - method overload ( overloading not possible in javascript )
*/

class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  print() {
    console.log("ClassName = Person, " + this + "");
    console.log(this);
  }

  toString() {
    return `Name: ${this._name}, Email: ${this._email}`;
  }
}

const amin = new Person("Amin", "amin@amin.com");
const nafis = new Person("Nafis", "nafis@nafis.com");
const habib = new Person("Habib", "habib@habib.com");


amin.print();
console.log(amin);