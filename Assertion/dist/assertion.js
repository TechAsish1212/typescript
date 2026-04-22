"use strict";
// type assertion 
Object.defineProperty(exports, "__esModule", { value: true });
let response = "Asish";
let resLength = response.length;
console.log("Length:: ", resLength);
let bookString = '{"name":"who moved my cheese"}';
let bookObjet = JSON.parse(bookString);
console.log(bookObjet.name);
// DOM
// let inputElement=document.getElementById("email") as HTMLInputElement
// console.log(inputElement.value)
// unkown
let value;
value = "Asish kumar Bera";
value = [1, 2, 3];
value = 12.3;
if (typeof value === "string") {
    value = value.toUpperCase();
}
console.log(value);
//# sourceMappingURL=assertion.js.map