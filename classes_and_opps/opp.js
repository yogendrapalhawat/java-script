// objects literals
// const user={
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails :function (){
//         //console.log(`username ${this.username}`);
        
//         //console.log("Got user details from database");
//         // console.log(this); // cureent contest batata hai
//         // {
//         //     username: 'hitesh',
//         //     loginCount: 8,
//         //     signedIn: true,
//         //     getUserDetails: [Function: getUserDetails]
//         //   }
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// // --Constructor function
// // function user(username,logedCount,isLoggedIn){
// //     this.username=username;
// //     this.logedCount=logedCount;
// //     this.isLoggedIn=isLoggedIn;
// //     return this;
// // }
// // const userOne= user("Yogendra",7,true);
// // const userTwo=user("chaiOrCode",12,false); // ise print nhi kiya fir bhi ye value aayegui kyoki ye override kr jayega na
// // console.log(userOne);



// // new key come   new -> new keyword har bar naya instance deta hai
// //  step 1:jab new kayword likte hai empty object create hota hai(jisko instance bola jata hai)
// // step 2:constuctor function call hota hai new kwy word ki wajah se(jo argument unko usme pack karta hai)
// // step 3:this keywoed me ye argument inject ho jate hai
// // step 4: function ke anadar mil jate hai
// function user(username,logedCount,isLoggedIn){
//     this.username=username;
//     this.logedCount=logedCount;
//     this.isLoggedIn=isLoggedIn;
//    // return this;
//    // method bhi likh skte hai
//    this.greeting=function(){
//     console.log(`welcome ${this.username}`);
    
//    }
// }
// const userOne= new user("Yogendra",7,true);
// const userTwo= new user("chaiOrCode",12,false); 
// // console.log(userOne);
// console.log(userOne.constructor);
// //console.log(userTwo);


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car("Honda", "Accord", 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  