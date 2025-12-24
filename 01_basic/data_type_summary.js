// primitive (Stack Memory use hoti hai)  => isme call by value hote hai => matlab: jo variable declare kara hai uska copy milta hai

// 7 type: String ,Number,Boolean, null,undefined,Symbol,BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId); // output => false

const bigNumber =233443234344345n



//Reference Type(Non Primitive): memory me direct reference alloacted kiya ja skta hai( heap memeoryu use hoti hai)

//Array,Objects,Funtions

const heros =["shkatiman","nagraj","doga"] // Array
let obj={
    name:"yogi",  // object
    age:22,
}

// function
 const myFunction=function(){
    console.log("hello world");
    
 }
 // null => datatype => object
 // array => object(datatype)
 //function=> datatype(object function)

 // *********** Memory*********

 // Stack(Primitive),  Heap(Non Primitive)
 // stack ko samaj
  let original="original"
  
  let copy=original
  console.log(copy); // original

  //
  copy="fake"
  console.log(original);
  console.log(copy);// fake

  // thoda heap me samaj
    let userOne ={
        email:"usergoogle.com",
        upi:"user@ybl"
    }
    let userTwo=userOne
    userTwo.email="yogi@gmail.com"

    console.log(userOne);// dono ko same output milega 
    console.log(userTwo);// dono ko same output milega kyoki dono ek ki ko refer kr rahe hai
    
    
  
  
  // to yaha ab copy me fake aa jayega naki original