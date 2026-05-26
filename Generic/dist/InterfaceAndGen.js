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
console.log(apply50(100));
const machine = {
    start() {
        console.log("Machine Start");
    },
    stop() {
        console.log("Machine Stop");
    },
};
machine.start();
const ratings = {
    masala: 4.8,
    ginger: 4.5
};
console.log(ratings);
//# sourceMappingURL=InterfaceAndGen.js.map