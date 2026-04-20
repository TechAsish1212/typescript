// Inference
// Type inference means TypeScript automatically guesses the type.

let name = "Asish"  // infered as string

let count = 12; // inferred
count = 20; // ok 
// count='Asish'; // Error

let age = Math.random() > 0.5 ? 18 : '20'



// Annotation
// Type annotations mean we manually specify the type.
let username:string;
username="Asishkumar";

let rollNumber:number;
rollNumber=12;

function add(a:number,b:number){
    return a+b;
}

console.log(add(21,32));

function great(currentName:string){
    return `Welcome ${currentName} of our company `;
}

console.log(great("Asish kumar Bera"))