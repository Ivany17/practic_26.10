'use strict';

function createCounter(){
    let i=0;
    return function counter(){
        return ++i;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();