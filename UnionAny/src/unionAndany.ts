// Union Types (|)
// A union type means a value can be one of several specific types.


let id: string | number = "Asish123";
// id=true // error , here type is boolean but declared is string | number
console.log(id);

let apiReqStatus: 'pending' | 'success' | 'error' = 'pending'
apiReqStatus = 'success'
console.log(apiReqStatus);

//uses  
// When value has limited possible types
// APIs, inputs, props


// Any 
// any means "disable TypeScript checking"
let data: any;
data = "Asish Kumar Bera";
console.log(data);
