"use strict";
const sum = ({ a, b }) => {
    return a + b;
};
// const result = sum({ a: 4, b: 4 });
// console.log(result);
const namedData = { a: 5, b: 5, name: 'red' };
console.log(sum(namedData));

const me = {
    i: () => console.log('jesu mbo')
}
me.i();

