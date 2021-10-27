'use strict';

// function createCounter(){
//     let i=0;
//     return function counter(){
//         return ++i;
//     }
// }

// const counter1 = createCounter();
// const counter2 = createCounter();


const createAdder = (n) => (m) => (n += m);
const adder1 = createAdder(10);