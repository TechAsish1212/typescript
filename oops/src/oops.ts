// class ->A class is a blueprint for creating objects.

class person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello ! My name is ${this.name}, I am ${this.age} years old`)
    }
}

const p1=new person("Asish",21);
p1.greet();



// Access Modifiers
// TypeScript adds access control:
// public (default) → accessible everywhere
// private → only inside the class
// protected → inside class + subclasses

class Chai{
    public flavour:string='Masala';

    private secretIngredients="Cardamom";

    reveal(){
        console.log(this.secretIngredients);
    }

}

// protected
class Shop{
    protected shopName:string='Chai Corner';

}

class Branch extends Shop{
    getName(){
        console.log(this.shopName);
    }
}

// private
class Walet{
    #balance =100;

    getBalance(){
        console.log(this.#balance);
    }
}

const c=new Chai();
c.reveal();

const b=new Branch();
b.getName()

const w=new Walet();
w.getBalance();

// getter and setter
class ModernChai{
    private _sugar=2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value>5) throw new Error ("Too sweet");
        this._sugar=value;
    }
}

const m=new ModernChai();
m.sugar=4;


// static -> static belongs to the class itself, not to the object (instance).

class Person {
    static country: string = "India";

    constructor(public name:string){}
  }
  
  console.log(Person.country); 