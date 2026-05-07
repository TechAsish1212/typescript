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
//# sourceMappingURL=oops.js.map