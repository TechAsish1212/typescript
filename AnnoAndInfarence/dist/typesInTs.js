"use strict";
// Inference
// Type inference means TypeScript automatically guesses the type.
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Asish"; // infered as string
let count = 12; // inferred
count = 20; // ok 
// count='Asish'; // Error
let age = Math.random() > 0.5 ? 18 : '20';
// Annotation
// Type annotations mean we manually specify the type.
let username;
username = "Asishkumar";
let rollNumber;
rollNumber = 12;
function add(a, b) {
    return a + b;
}
console.log(add(21, 32));
function great(currentName) {
    return `Welcome ${currentName} of our company `;
}
console.log(great("Asish kumar Bera"));
//# sourceMappingURL=typesInTs.js.map