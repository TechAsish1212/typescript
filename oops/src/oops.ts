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



