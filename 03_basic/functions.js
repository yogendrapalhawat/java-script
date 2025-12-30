function sayMyName(){
    console.log("Y");
    console.log("O");
    console.log("G");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
    
}
// sayMyName --> ye refernece hai
//sayMyName() --> ye function hai
//sayMyName()

// make function add two number
// function addTwoNumbers(number1,number2){  // function me jo variable hote unko kahate parameter or jin call karte time dete hai unko argumenet
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4)//7  isme ye 3,4  hai ye argument hai
// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,null)//3


// function addTwoNumbers(number1,number2){  // function me jo variable hote unko kahate parameter or jin call karte time dete hai unko argumenet
//     console.log(number1+number2);
    
// }
//  const result=addTwoNumbers(3,4)
//  console.log(result);// undefine
 
function addTwoNumbers(number1,number2){
    // let result= number1+ number2
    // return result
    return number1 +number2
}
const result=addTwoNumbers(3,4)
//console.log(result);// 7

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage("yogi") // no output
// //console.log(loginUserMessage("yogi"));//yogi just logged in
// console.log(loginUserMessage(""));//  just logged in
// console.log(loginUserMessage());//undefined just logged in

 
// function loginUserMessage(username){
//     if(!username){  // (username===undefined) ye or !username ek hi baat hai
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());// please enter a username

// username="sam" agar ese value dedi to !username jayega hi nhi by defalut sam le lelega
// function loginUserMessage(username=" sam"){
//     if(!username){  // (username===undefined) ye or !username ek hi baat hai
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());// sam just logged in

//
function calculareCartPrice(num1){
    return num1;
}
console.log(calculareCartPrice(200,300,400));// 200

// rest operator ...
function calculareCartPrice(...num1){
    return num1;
}
console.log(calculareCartPrice(200,300,400,500));//[ 200, 300, 400, 500 ]


//
function calculareCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculareCartPrice(200,300,400,500));// 400, 500 ] val1 me gayi 200 val2 me gayo 300 bake rest operator


// object ko function me kiase pass kiya jata hai
const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)// username is hitesh and price is 199

handleObject({
    username:"yogi",
    price:299
})
//username is yogi and price is 299


// Array ke pass kete hai function me
const myNewArray=[200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1];
}
// console.log(returnSecondvalue(myNewArray));// 400
console.log(returnSecondvalue([200,400,100,600]));// 400