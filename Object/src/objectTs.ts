const chai={
    name:"masala chai",
    price:20,
    isHot:true
}

// declaring object type
let tea:{
    name:string;
    price:number;
    isHot:true;
}

tea ={
    name:"Masala chai",
    price:20,
    isHot:true
}

// alias object
// A type alias lets you give a name to an object structure.
type Tea={
    name:string;
    price:number;
    ingredients:string[],
}

// Using the alias
const adarkChai:Tea={
    name:"Adrak chai",
    price:20,
    ingredients:["Ginger","tea leaves"]
}

// Structural Typing or duck typing
// Type compatibility is based on the structure (shape) of the object, not the type name.
// If an object has the required properties, it can be assigned.

type Cup={
    size:string;
}

let smallCup:Cup={
    size:"200ml",
}

let bigCup={
    size:"500ml",
    material:"steel",
}

smallCup=bigCup;


// another ex;
type Brew={
    brewType:number;
}

const cofee={
    brewType:5,
    beans:"Arabic"
}

const chaiBrew:Brew=cofee