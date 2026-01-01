// const userEmail="yogendr@gmail.ai"
// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("don't have user email");
    
// }
// // output =>got user email


// empty string  denote false

// const userEmail=""
// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("don't have user email");
    
// }
// output =>don't have user email

// empty array denote true
// const userEmail=[]
// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("don't have user email");
    
// }
// output =>got user email

// falsy value
//false , 0, -0,BigInt 0n, "",null,undefine,NaN   iska alawa baki true hoti hai 

// truthy value
//"0","false"," ",[],{},function(){}

// aaray ko ese hi check krna
// const array=[]
// if(array.length===0){
//     console.log("array is empty");
    
// }
// object ko kaise dekhe  // Object.keys() => ye ese array bn jata hai
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
    
// }

// false ==0 (true)
// false=''(true)
// 0==''(true)

// Nullish Coaleshing Operator(??): null undefine

// kabhi kabar database call karenge chance hai  directly response na mile

// let val1;
// val1 =5 ?? 10
// console.log(val1); // 5

// let val1;
// val1 =null ?? 10
// console.log(val1); // 10

// let val1;
// val1 =undefined ?? 10
// console.log(val1); // 10


// let val1;
// val1 =null ?? 15 ?? 20
// console.log(val1); // 15

// terniary operator
// syntax   => condition ? true:false

const iceTeaPrice=100
iceTeaPrice >=80 ?console.log("less than 80") :console.log("more than 80");

