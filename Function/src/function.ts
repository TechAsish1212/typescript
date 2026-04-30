function makeChai(type:string,cups:number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Lemon Tea",2);

function getChaiPrice():number{
    return 25;
}

function makeOrder(order:string){
    if(!order)
        return null;
    return order;
}

function logChai():void{
    console.log("Chai is ready");
}


function createChai(order:{
    type:string;
    suger:number;
    size:"samll"|"large";
}):number{
    return 4;
}