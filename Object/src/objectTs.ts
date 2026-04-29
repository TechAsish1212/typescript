const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

// declaring object type
let tea: {
    name: string;
    price: number;
    isHot: true;
}

tea = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// alias object
// A type alias lets you give a name to an object structure.
type Tea = {
    name: string;
    price: number;
    ingredients: string[],
}

// Using the alias
const adarkChai: Tea = {
    name: "Adrak chai",
    price: 20,
    ingredients: ["Ginger", "tea leaves"]
}

// Structural Typing or duck typing
// Type compatibility is based on the structure (shape) of the object, not the type name.
// If an object has the required properties, it can be assigned.

type Cup = {
    size: string;
}

let smallCup: Cup = {
    size: "200ml",
}

let bigCup = {
    size: "500ml",
    material: "steel",
}

smallCup = bigCup;


// another ex;
type Brew = {
    brewType: number;
}

const cofee = {
    brewType: 5,
    beans: "Arabic"
}

const chaiBrew: Brew = cofee

// type composition
// This is Type Composition in TypeScript, where complex types are built using smaller reusable custom types
type Item = {
    name: string;
    quantity: number;
}

type Address = {
    street: string;
    pin: number;
}

type Order = {
    id: string;
    items: Item[];
    addresses: Address
}


// Partial<T> is a built-in TypeScript utility type that makes all properties of a type optional.
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => { // Partial<Chai>--->It converts all properties of Chai into optional properties.
    console.log("updating chai with:: ", updates);
}

updateChai({ price: 30 })


// Required<T> is a TypeScript utility type that makes all optional properties of a type mandatory.

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})

// Pick<T, K> is a TypeScript utility type that creates a new type by selecting specific properties from an existing type.

type Chaika = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string;
}

type BasicChaiInfo = Pick<Chaika, "name" | "price">; // Take only name and price from Chaika

const chaiInfo: BasicChaiInfo = {
    name: "Lemon tea",
    price: 25
}

// Omit<T, K> is a TypeScript utility type that constructs a new type by removing specified keys from an existing type.

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type publicChai = Omit<ChaiNew, "secretIngredients">; // Remove secretIngredients from ChaiNew

