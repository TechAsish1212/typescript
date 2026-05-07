"use strict";
// class ->A class is a blueprint for creating objects.
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ! My name is ${this.name}, I am ${this.age} years old`);
    }
}
const p1 = new person("Asish", 21);
p1.greet();
// Access Modifiers
// TypeScript adds access control:
// public (default) → accessible everywhere
// private → only inside the class
// protected → inside class + subclasses
class Chai {
    flavour = 'Masala';
    secretIngredients = "Cardamom";
    reveal() {
        console.log(this.secretIngredients);
    }
}
// protected
class Shop {
    shopName = 'Chai Corner';
}
class Branch extends Shop {
    getName() {
        console.log(this.shopName);
    }
}
// private
class Walet {
    #balance = 100;
    getBalance() {
        console.log(this.#balance);
    }
}
const c = new Chai();
c.reveal();
const b = new Branch();
b.getName();
const w = new Walet();
w.getBalance();
//# sourceMappingURL=oops.js.map