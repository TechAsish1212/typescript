// In TypeScript (TS), an interface is used to define the structure (shape) of an object. It tells TypeScript what properties an object should have and their types.

type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

class masalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface cupSize {
    size: "small" | "large";
}

class chai implements cupSize {
    size: "small" | "large" = "small";
}

// optional (?)
interface user{
    username:string;
    bio?:string;
}

// Readonly 
interface config {
  readonly appName: string;
  version: number;
}

const cfg:config={
    appName:"Portfolio",
    version:1
}

// cfg.appName="uq"  -> not possible because it is readonly property
