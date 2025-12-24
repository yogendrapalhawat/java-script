const score=400
const balance= new Number(100)
// console.log(score)// 400
// console.log(balance); // [Number: 100]

// //toString()
// console.log(balance.toString().length);//3
// // toFixed
// console.log(balance.toFixed(2))// 100.00

const otherNumber1=23.8966

const otherNumber2=123.8966
const otherNumber3=1123.8966
// console.log(otherNumber1.toPrecision(3));// 23.9
// console.log(otherNumber2.toPrecision(3));// 124
// console.log(otherNumber3.toPrecision(3));// 1.12e+3

//toLocaleString()
const hundred=1000000
// console.log(hundred.toLocaleString());// 1,000,000
// console.log(hundred.toLocaleString('en-IN'));//10,00,000

//+++++++++++ Maths ++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));// means roundoff
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,2,7));
console.log(Math.max(4,3,2,7));
console.log(Math.random());// value 0 or 1 ke beech me aati hai
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10))+1);

//trick
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
// ab value 10 or 20 ke me hi hogi