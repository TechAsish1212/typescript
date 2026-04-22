
// type assertion 

let response:any="Asish";

let resLength:number=(response as string).length;

console.log("Length:: ",resLength);


// ----
type Book={
    name:string;
}

let bookString='{"name":"who moved my cheese"}';

let bookObjet=JSON.parse(bookString) as Book;

console.log(bookObjet.name);


// DOM
// let inputElement=document.getElementById("email") as HTMLInputElement
// console.log(inputElement.value)

// unkown
let value:unknown;
value="Asish kumar Bera";
value=[1,2,3];
value=12.3;
if(typeof value==="string"){
    value=value.toUpperCase();
}

console.log(value);


// try catch
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("error: " ,error);
}



let data:unknown = "Hii Asish";
let strData:string=data as string;



// never type
type Role="admin"|"user"|"superAdmin";

function redirectBasedFunction(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting Admin dashboard");
        return ;
    }
    if(role==="user"){
        console.log("Redirect to login page");
        return;
    }
    role;

}

function neverReturn():never{
    while(true){}
}