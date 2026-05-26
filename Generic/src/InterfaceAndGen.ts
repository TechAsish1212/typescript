interface Chai {
    name: string,
    price: number,
    milk?: boolean,
}

const masala: Chai = {
    name: "Masala",
    price: 20,
}

interface Shop {
    readonly id: number,
    name: string,
}

const s: Shop = {
    id: 1,
    name: "Chai Cafe"
}

// TypeScript interface defines a function type.
interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => {
    return p * 0.5;
}

// console.log(apply50(100));


interface TeaMachine {
    start(): void,
    stop(): void,
}

const machine: TeaMachine = {
    start() {
        console.log("Machine Start");
    },
    stop() {
        console.log("Machine Stop");
    },
}

// machine.start()


// index signature
interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.8,
    ginger: 4.5
}

// console.log(ratings);


interface A {
    a: string,
}
interface B {
    b: string,
}

interface C extends A, B {

}


// Generic
// Generics in TypeScript allow you to write reusable and type-safe code.

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Asish"))



function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("masala", 20);
pair("ginger", { flavour: "Ginger" })

// interface generic
interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 };
const stringBox: Box<string> = { content: "Apply50" };

console.log(stringBox.content);

