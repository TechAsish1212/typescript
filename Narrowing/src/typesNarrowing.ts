// Type narrowing means reducing a union type into a more specific type based on some condition.

function printValue(value: string | number) {
    if (typeof value === "string") {  //typeOf --> primitive 
        // narrowed to string
        console.log(value.toUpperCase());
    } else {
        // narrowed to number
        console.log(value.toFixed(2));
    }
}

printValue("asish kumar bera");


function message(msg?: string) {  // ?: -> optional
    if (msg) {
        return `${msg}`;
    } else {
        return `you can do your customize order`;
    }
}

console.log(message());


// exhustive check
function area(kind: 'circle' | 'sphere', radius: number) {
    if (kind == 'circle') {
        return Math.PI * radius ** 2;
    } else {
        return 4 * Math.PI * radius ** 2;
    }
}

console.log(area('circle', 3));


// "instanceof" guard  --> Used with classes.
class cat {
    sound() {
        return `cat sound is meow`;
    }
}

class dog {
    sound() {
        return `dog sound is bark`;
    }
}

function speak(animal: cat | dog) {
    if (animal instanceof cat) {
        return animal.sound();
    } else {
        return animal.sound();
    }
}

const Cat = new cat();
const Dog = new dog();

console.log(speak(Dog));



// Custom Type Guards (User-defined)
// we can create your own type guard using "is".

// syntax
// function isType(value: any): value is Type {
//   return condition;
// }


type chaiOrder = {
    name: string;
    sugar: number;
}

function isChai(value: any): value is chaiOrder {
    return (
        typeof value === "object" &&
        typeof value !== null &&
        typeof value.name === "string" &&
        typeof value.sugar === "number"
    )
}

function serverChai(item: chaiOrder | string) {
    if (isChai(item)) {
        return `serving ${item.name} chai with ${item.sugar} spoon of sugar `;
    }
    return `serving custom chai :: ${item}`;
}

console.log(serverChai({ name: "masala", sugar: 4 }));


// another type
type MasalaChai = {
    type: "masala";
    spicelevel: number;
}

type GingerChai = {
    type: "ginger";
    amount: number;
}

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `You order masala chai`;
            break;
        case "elaichi":
            return `You order elaichi chai`;
            break;
        case "ginger":
            return `You order ginger chai`;
            break; 
    }
}

console.log(MakeChai({type:"masala",spicelevel:5}));