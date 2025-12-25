//array
// in js  arrays are resizable and contain mix(different dattype)

// array make shallow copies rather than deep copies
//shallow copy=>A shallow copy of an object is a copy whose properties share the same references 
//deep copies=>A deep copy of an object is a copy whose properties do not share the same references 
// reference copy me change karoge to main bhi hoga

// Array declartion
//1.
// const myArr=[0,1,2,3,4,8,5]
// //2.
// const myHeros=["shaktiman","nagraj"]
// //3.
// const myArr2=new Array(1,2,3,4,5)
// console.log(myArr[0]);//0

// // Arrays method

// // //push
// // myArr.push(7)
// // //pop
// // myArr.pop()

// //unshift ==> start me add kre to isse use kr le
// myArr.unshift(9)
// console.log(myArr);//
// // shift==> array me se pahala element delete ho jata hai
// myArr.shift();
// // includes=> bataye present hai to true anaytha false dega
// console.log(myArr.includes(9))
// //indexoff=> konsi index hai ye batayega present ho to bata dega barna -1 dega
// console.log(myArr.indexOf(2));
// //tosorted => array ko sort kr dega
//  console.log(myArr.toSorted());
//  // toReversed()=> array ko reverse kr dega
// console.log(myArr.toReversed());
// // concat do Array ko combine kr dega
// console.log(myArr.concat(myArr2));
// // join => string me convert kr deta hai
// const newArr= myArr.join();
// console.log(newArr);// 0,1,2,3,4,8,5  type string

// focus se barna fas jaoge
// slice=> myArray.slice(1,3)=> index se 1 se index 2 tak element lega bina main myArray ko disturb kare
// const myArray=[0,1,2,3,4,5,6,8,9]
// console.log(myArray.slice(1,3)); // [ 1, 2 ]
// console.log(myArray);//[0,1,2,3,4,5,6,8,9]


// splice => myArray1.splice(1,3).=> index 1 se index se index 3 tak lega pr main array myArray1 ko distrub kr dega matlab splice ki part alag or jo main remaining hi raha jata hai
const myArray1=[0,1,2,3,4,5,6,8,9]
console.log(myArray1.splice(1,3));//[ 1, 2, 3 ]
console.log(myArray1);//[ 0, 4, 5, 6, 8, 9 ]

