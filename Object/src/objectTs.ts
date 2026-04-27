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