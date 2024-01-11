let globalVar = "I'm global!"; // Global scope

function checkScope() {
  let localVar = "I'm local!"; // Local scope
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

checkScope();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function outerFunction() {
  let count = 0; // this variable is outside the inner function, but it can be accessed by the inner function
  function innerFunction() {
    count++;
    console.log(count);
  }
  return innerFunction;
}

const counter = outerFunction();
counter(); // Outputs: 1
counter(); // Outputs: 2

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Outputs: Hello, Alice

// Demonstrating how the context of `this` can change
const greetFunction = person.greet;
greetFunction(); // Outputs: Hello, my name is undefined (because `this` now refers to the global object)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " barks!");
  }
}

const dog1 = new Dog("Max");
dog1.bark(); // Outputs: Max barks!

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(this.name + " says meow!");
  }
}

const cat1 = new Cat("Whiskers");
cat1.meow(); // Outputs: Whiskers says meow!

class Car {
  constructor(model) {
    this.model = model;
  }
  showModel() {
    console.log("This car is a " + this.model);
  }
}

const myCar = new Car("Toyota");
myCar.showModel(); // Outputs: This car is a Toyota
