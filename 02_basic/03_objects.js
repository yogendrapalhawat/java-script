// singleton => constructor se banaoge to hamesa singleton banega
// literals ki tarah declare krte hai to => singleton nhi banata

// objects literals

// object declare
//object.create ==> ye banat hai i sinleton ke through=> isi ko bolle 

//
const mySym= Symbol("key1");

const JsUser ={
    name :"Yogendra",
    "full name":"Yogendra Palhawat",// ise . (dot se excess nhi kr skte) jiase ki JsUser.full name   pr ese kr skte hai JsUser["full name"]
    age:18,
    //mySym:"myKey1", // ese use karoge to ye string ki tarah use hogi naki synbol //type String
    [mySym]:"myKey1", // pr ab ye Symbol ki tarah use hai // type Symol
    location:"jaipur",
    email:"yogendra@gmail.com",
    isLoggedIn:false,
    listLoginDays:["monday","saturday"]
}
// object ko acess kaise krte hai 
console.log(JsUser.email);// yogendra@gmail.com
//console.log(JsUser[email]);// ye error dega kyoki kyoki email string me hai to usme ["email"]
console.log(JsUser["email"]);// yogendra@gmail.com
console.log(JsUser["full name"]);//Yogendra Palhawat

// Symbol ko object me lekar print kaise krte hai
console.log(JsUser[mySym]);// myKey1 type Symbol

// value kaise change krte hai
JsUser.email="yogi@gmail.com"

// koi value change na kr sake to  //use freeze
// stntax  => object.freeze(Jsuser)
//Object.freeze(JsUser)

// object me funstion ko add
JsUser.greeting =function(){
    console.log("hello js user");
    
}
// refernce kare valye ko
JsUser.greetingTwo =function(){
    console.log(`hello js user, ${this.name}`);
    
}
// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting());//hello js user
                               //undefined

//                               
console.log(JsUser.greeting());// hello js user
console.log(JsUser.greetingTwo());// hello js user, Yogendra

