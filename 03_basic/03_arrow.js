const user ={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);// this current contest banata hai
        //console.log(this);
        
        
    }
}
// user.welcomeMessage() //hitesh , welcome to website
// user.username="sam"
// user.welcomeMessage()// sam , welcome to website
//console.log(this);// {}

// 
// function chai(){
//     console.log(this);
    
// }
// chai()
// output
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/


// 
// function chai(){
//     let username="yogi"
//     console.log(this.username);
    
// }
// chai()// undefined ye this object ke andar kam karega but fuction me nhi krega

//++++++++ arrow declartion+++++++

// const chai=()=>{
//     let username="yogi"
//     console.log(this.username);
    
// }
// chai()//undefined


// const addTwo=(num1,num2)=>{
//     return num1 +num2;

// }
//console.log(addTwo(3,4));//7

// implicit return => return karne ki jarurat nhi hai
// const addTwo=(num1,num2)=>num1 +num2;
// const addTwo=(num1,num2)=>(num1 +num2);
// console.log(addTwo(3,4));// 7


// object ko implicit me return
// const addTwo=(num1,num2)=>{username:"yogi"}
// console.log(addTwo());// undefined

const addTwo=(num1,num2)=>({username:"yogi"})
console.log(addTwo());{ username: 'yogi' }


