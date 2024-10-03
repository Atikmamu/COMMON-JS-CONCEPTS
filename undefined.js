/**
 *  8 ways to get Undefined 
 *  1. variable that is not initialized will give undefined 
 *  2. function with no return 
 *  3. parameter that is not passed will be undefined 
 *  4. if return has nothing on the right side will return undefined 
 */

// 1. variable that is not initialized will give undefined 
let first ;
console.log(first);


// 2. function with no return 

function second(a, b){
    const total = a + b; 
}

const result = second();
console.log(result);


// 3. parameter that is not passed will be undefined 

function third (a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 4);



//  4. if return has nothing on the right side will return undefined 

function noNegative (a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

const total = noNegative(2, -5);
console.log(total);

