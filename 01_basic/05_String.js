const name="yogi"
const repoCount=50
//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('yogendra-pal')

console.log(gameName[0])// y
console.log(gameName.__proto__)

console.log(gameName.length); // 8
console.log(gameName.toUpperCase)
console.log(gameName.charAt(2)) //g

console.log(gameName.indexOf('g'));// 2

const newString= gameName.substring(0,4)// subtring me -ve se start nhi kr skte hai
console.log(newString); //yoge

const anotherString=gameName.slice(2,4)
const anotherString1=gameName.slice(-7,4)
console.log(anotherString);// ge

//trim
const newStringOne="    yogi     "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url ="https://hitesh.com/hitesh%20chaoudhary"
console.log(url.replace('%20','-'));// https://hitesh.com/hitesh-chaoudhary
// includes ==> for finding
console.log(url.includes('hitesh'));//true
console.log(url.includes('yogi'));//false

//split
console.log(gameName.split('-'));// [ 'yogendra', 'pal' ]
