 

  // if(true){
  // let a=10;
  // const b=20
  // var c=10;
  // }
  // console.log(a);// ReferenceError: a is not defined
  // console.log(b);//ReferenceError: b is not defined
  //console.log(c);// 10
  
  //
//   var c=100
//   if(true){
//   let a=10;
//   const b=20
//  // var c=10;
//   c=10;
//   }
//   console.log(c);// 10
  
// 
// let a=300
// if(true){
//   let a=10
//   const b=20;
//   console.log("inner :", a);
  
// }
// console.log(a);// inner : 10  and 300

//
// function one(){
//   const username="hitesh"
//   function two(){
//     const website="youtube"
//     console.log(username);
//   }
//   //console.log(website); scope ke bahar call kiya to error dega or age bhi koi nhi chaega kyoki line byu line code chalata hai
//    two()
  
// }
// one()// hitesh

//
// if(true){
//   const username="hitesh"
//   if(username==="hitesh"){
//     const website ="youtube"
//     console.log(username + website);
    
//   }
// }
// output hiteshyoutube

// if(true){
//   const username="hitesh"
//   if(username==="hitesh"){
//     const website ="youtube"
//     console.log(username + website);
    
//   }
//  //console.log(website);// website is not defined 
  
// }
// console.log(username); // username is not defined


//++++++++++++++++++++++ Interesting +++++++++++++++

// function addone(num){
//   return num+1;
// }
// addone(5)

// const addTwo= function(num){   // ye bhi ek function pr ise addTwo ko kabhi kabar express bhi bol diya jata hai
//   return num+2
// }
// addTwo(5)

//
// console.log(addone(5));//6

// function addone(num){
//   return num+1;
// }


// 
//console.log(addTwo(5));// ReferenceError: Cannot access 'addTwo' before initialization

const addTwo= function(num){   // ye bhi ek function pr ise addTwo ko kabhi kabar express bhi bol diya jata hai
  return num+2
}
