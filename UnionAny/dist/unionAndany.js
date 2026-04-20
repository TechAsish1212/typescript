"use strict";
// Union Types (|)
// A union type means a value can be one of several specific types.
Object.defineProperty(exports, "__esModule", { value: true });
let id = "Asish123";
// id=true // error , here type is boolean but declared is string | number
console.log(id);
let apiReqStatus = 'pending';
apiReqStatus = 'success';
console.log(apiReqStatus);
//uses  
// When value has limited possible types
// APIs, inputs, props
// Any 
// any means "disable TypeScript checking"
let data;
data = "Asish Kumar Bera";
console.log(data);
//# sourceMappingURL=unionAndany.js.map