"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array
const chaiFlavourL = ['masala', 'adrak'];
const chaiPrice = [10, 20];
const rating = [4.5, 3.5, 4.3, 4.9];
const menu = [
    { name: 'Masala', price: 20 },
    { name: "Adrak", price: 25 }
];
menu.push({ name: "ginger", price: 30 });
menu.pop(); // remove from last
menu.unshift({ name: 'plain chai', price: 10 }); // add  at start
menu.shift(); // remove first
console.log(menu);
const cities = ['Kolkata', 'siliguri', 'ranchi', 'chennai'];
// cities.push('mumbai')  // it is not possible  because we declared the array as readonly. => This array cannot be modified after creation.
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(table);
// tuples
// A tuple is a special type of array where:
// Length is fixed (mostly)
// Order matters
// Each position has a specific type
let user;
user = ["Asish", 21]; // correct
// user=[21,"Asish"] // incorrect order matters.
let userInfo = ["Asish", 21, 11930823012, 7.3];
console.log(userInfo);
// optional
let user2;
user2 = ["Ajoy"]; // correct
user2 = ["Ajoy", 21]; // correct
// readonly
let point = [10, 20];
// point[0] = 50; // error
//# sourceMappingURL=arrEnum.js.map