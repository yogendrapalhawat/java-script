 // promise ek object hai
 // how to create promise

//  const promiseOne=new Promise(function(resove,reject){
//     //Do an async task
//     //DB calls,cryptography , network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resove()
        
//     },1000)
//  })

//  //consume promise
//  //then ka relation resolve se hai
//  promiseOne.then(function(){
//     console.log("Promised consumed");
    
//  })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task2");
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolve");
    
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@example,com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//     if(!error){
//         resolve({username:"yogendra",password:"1233"})
//     }
//     else{
//         reject('ERROR:Something went wrong')
//     }
//     },1000)
// })
// promiseFour.then((user)=>{
// console.log(user);
// return user.username;

// }).then((username)=>{
//     console.log(username);
    

// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=>console.log("The promise is either resolved or rejected"))


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"javascipt",password:"123"})
//         }
//         else{
//             reject('EEEOR: JS went wrong')
//         }
//     },1000)
// });

// // 🔹 Interview ke liye one-liners 🧠

// // async function promise return karta hai

// // await promise resolve hone tak wait karta hai

// // await sirf async ke andar hota hai

// // try/catch async error handle karta hai

// async function consumePromiseFive() {
//  try {
//     const  response= await promiseFive
//     console.log(response);
    
//  } catch (error) {
//     console.log(error);
    
    
//  }
  

// }
// consumePromiseFive();

// async function getAllUser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E",error);
        
        
//     }
// }
// getAllUser()



// “A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). 
//     A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.
//     status properties.”





fetch('https://jsonplaceholder.typicode.com/users').then((Response)=>{
    return Response.json();
}).then((data)=>{
    console.log(data);
    
}).catch((error)=> console.log("E",error)
).finally("reject or accecpted")