// Array
const chaiFlavourL: string[] = ['masala', 'adrak']
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 3.5, 4.3, 4.9];

type chai = {
    name: string;
    price: number
}

const menu: chai[] = [
    { name: 'Masala', price: 20 },
    { name: "Adrak", price: 25 }
]

menu.push({ name: "ginger", price: 30 })
menu.pop(); // remove from last
menu.unshift({ name: 'plain chai', price: 10 }) // add  at start
menu.shift() // remove first


console.log(menu)

const cities: readonly string[] = ['Kolkata', 'siliguri', 'ranchi', 'chennai'];
// cities.push('mumbai')  // it is not possible  because we declared the array as readonly. => This array cannot be modified after creation.

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(table);



// tuples
// A tuple is a special type of array where:

// Length is fixed (mostly)
// Order matters
// Each position has a specific type


let user: [string, number];
user = ["Asish", 21];  // correct
// user=[21,"Asish"] // incorrect order matters.

let userInfo: [name: string, age: number, roll: number, marks: number] = ["Asish", 21, 11930823012, 7.3];
console.log(userInfo);


// optional
let user2: [string, number?];
user2 = ["Ajoy"];       // correct
user2 = ["Ajoy", 21];   // correct

// readonly
let point: readonly [number, number] = [10, 20];

// point[0] = 50; // error



// enum
// An enum (enumeration) is a way to define a set of named constants.
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2 
    Right // 3
}

const move = Direction.Right;
console.log(move); // 3

// numeric enum
enum status {
    success = 200,
    notFound = 404,
    serverError = 500,
}

let res: status = status.notFound;

console.log("status: " + res);

// string enum
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let role: Role = Role.Admin;

console.log(role);

// function enum
enum Role1 {
    Admin = "ADMIN",
    User = "USER"
}

function checkAccess(role: Role1) {
    if (role === Role1.Admin) {
        console.log("Full access");
    }
    else {
        console.log('Use the platform');
    }
}

checkAccess(Role1.User);

// const enum
const enum Color {
    Red,
    Green,
    Blue
}

let c = Color.Red;

console.log(c)





// complete