// union
let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus='success'

let airlineSeat:'aisle'|'window'|'middle'='middle'

airlineSeat='aisle'


const orders=['12','32','21','42'];

let currentOrder:string | undefined;

for(let order of orders){
    if(order==='42'){
        currentOrder=order;
        break
    }
    currentOrder='11'
}

console.log(currentOrder);