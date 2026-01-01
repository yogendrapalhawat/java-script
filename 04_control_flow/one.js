// if
// const isUserloggedIn =true
// if(isUserloggedIn){

// }
//<,>,<=,>=,==, !=,===
//
// if(2=="2"){
//     console.log("executed");
    
// }
// output => excecuted kykoi == only value hi check karta hai
// if(2==="2"){
//     console.log("executed");
    
// }
// else{
//     console.log("not executed");
    
// }
// output => not excuted kyiko   ===  value and type both checked

// // scope problem create power doed not use outside of scope
// const score= 200
// if(score> 100){
//     const power ="fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);

// agar var ka use krte hai to scope ke bahar bhi us kr sakte hai
// const score= 200
// if(score> 100){
//     var power ="fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);

//implicit scope
// const balance =1000
// if(balance >500) console.log("test");
// if(balance >500) console.log("test"),
// console.log("tset2");


// nested
// const balance =1000
// if(balance<500){
//     console.log("less than");
    
// }
// else if(balance<750){
//     onsole.log("less than 750");

// }
// else if(balance<900){
//     onsole.log("less than 900");

// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn= true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmai=true
if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmai){
    console.log("user loged in");
    
}