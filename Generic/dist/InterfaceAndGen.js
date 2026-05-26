"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const masala = {
    name: "Masala",
    price: 20,
};
const s = {
    id: 1,
    name: "Chai Cafe"
};
const apply50 = (p) => {
    return p * 0.5;
};
const machine = {
    start() {
        console.log("Machine Start");
    },
    stop() {
        console.log("Machine Stop");
    },
};
const ratings = {
    masala: 4.8,
    ginger: 4.5
};
// Generic
// Generics in TypeScript allow you to write reusable and type-safe code.
function identity(value) {
    return value;
}
console.log(identity("Asish"));
function pair(a, b) {
    return [a, b];
}
pair("masala", 20);
pair("ginger", { flavour: "Ginger" });
const numberBox = { content: 10 };
const stringBox = { content: "Apply50" };
console.log(stringBox.content);
//# sourceMappingURL=InterfaceAndGen.js.map