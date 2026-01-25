# do javacrict really have classses ?
JavaScript does have class, but under the hood it’s still prototype-based, not truly class-based like Java.

1️⃣ Before ES6: No class keyword

Old JavaScript had no classes. Everything was done using functions + prototypes.

# OOPS

# Objects
collections of properties(variable , constant) and method(function)
-- toLowercase
-- new key word

# why use OOP


# parts of OPP
# 1. object literals

// objects literals
const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails :function (){
        //console.log(`username ${this.username}`);
        
        //console.log("Got user details from database");
        // console.log(this); // cureent contest batata hai
        // {
        //     username: 'hitesh',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this)



--Constructor function

// --Constructor function
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

-- protypes
--classes
--Instances(new ,this)

# 4 pillers
Abstraction
Encapuslation
Inhertance
Polymorphism