console.log(null==undefined);// true both are empty value but types are different

//console.log(a);
//var a=2;  // undefined
// type of undefien
console.log(typeof undefined); // undefine
 // type of null
 console.log(typeof null); // object

 //
//  const a={}
//  a.key="yogi"
//  const b={
//     ...a
//  }
//  b.key="sahu"
//  console.log(a.key);// yogi
 
  const a={}
 a.key="yogi"
 const b=a;
 b.key="sahu"
 console.log(a.key);// sahu

// JavaScript me object reference ka concept hai. Object copy hota nahi, reference pass hota hai.

// 🔹 Case 1: Spread operator (...) use kiya
// const a = {};
// a.key = "yogi";

// const b = {
//   ...a
// };

// b.key = "sahu";

// console.log(a.key); // yogi

// 🧠 Kya hua yaha?

// a ek object hai → { key: "yogi" }

// ...a ka matlab: a ke andar ke values copy kar do

// b ek naya object ban gaya

// 👉 Memory me:

// a → { key: "yogi" }
// b → { key: "yogi" }


// Jab tum b.key = "sahu" karte ho

// Sirf b change hota hai, a same rehta hai

// ✅ Output:

// yogi

// 🔹 Case 2: Direct assignment (=) kiya
// const a = {};
// a.key = "yogi";

// const b = a;
// b.key = "sahu";

// console.log(a.key); // sahu

// 🧠 Kya hua yaha?

// const b = a; ka matlab:
// ❌ naya object nahi bana
// ✅ same object ka address (reference) copy hua

// 👉 Memory me:

// a ─┐
//    └──> { key: "yogi" }
// b ─┘


// b.key = "sahu"

// Matlab usi object ka data change ho gaya

// Kyunki a aur b dono same jagah point kar rahe hain

// ✅ Output:

// sahu

// 🔑 Short Trick yaad rakhne ke liye
// Code	Result
// const b = a	Same object (reference)
// const b = {...a}	New object (copy)



// 👉 Call Stack kya hota hai?

// Call Stack JavaScript ka ek memory stack hota hai jisme
// functions ka record rakha jata hai — kaunsa function call hua, kaunsa chal raha hai, aur kaunsa khatam ho gaya.

// 👉 Ye LIFO rule follow karta hai
// LIFO = Last In, First Out

// 🧠 Simple Example
// function one() {
//   two();
// }

// function two() {
//   three();
// }

// function three() {
//   console.log("Hello");
// }

// one();

// 🔄 Step-by-step Call Stack

// 1️⃣ one() call hua → stack me gaya
// 2️⃣ one() ke andar two() call hua → stack me gaya
// 3️⃣ two() ke andar three() call hua → stack me gaya
// 4️⃣ console.log() chala → print hua
// 5️⃣ three() khatam → stack se bahar
// 6️⃣ two() khatam → stack se bahar
// 7️⃣ one() khatam → stack se bahar

// 📦 Stack ka flow:

// | three() |
// | two()   |
// | one()   |
// -----------

// 🔁 Stack Empty ho jata hai

// Jab saare functions execute ho jate hain, Call Stack empty ho jata hai.

// ⚠️ Stack Overflow kya hota hai?

// Jab function khud ko baar-baar call karta rahe aur rukta na ho.

// function fun() {
//   fun();
// }
// fun();


// ❌ Output:

// RangeError: Maximum call stack size exceeded


// 👉 Matlab stack bhar gaya.

// 🧩 Important Points (Exam / Interview)

// JavaScript single-threaded hai

// Ek time par sirf ek function execute hota hai

// Call Stack synchronous code handle karta hai

// Async code (setTimeout, promise) Call Stack me direct nahi jata

// 🧠 One-Line Definition

// Call Stack JavaScript ka mechanism hai jo function calls ko LIFO order me manage karta hai.


// what is first order
//A first order function is a function that does not accept another function as an argument and does not return a function.
// 🧠 Simple Example
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // 5

// 🔍 Explanation:

// add function:

// number leta hai

// number return karta hai

// ❌ koi function input me nahi

// ❌ koi function return nahi

// ➡️ Isliye ye First Order Function hai ✅

// ❌ Ye First Order Function nahi hai
// function operate(fn) {
//   return fn(2, 3);
// }


// ❌ Kyunki:

// function ko argument (fn) ke roop me le raha hai

// 👉 Ye Higher Order Function hai

// 🔥 Real Life Example

// First Order → Calculator ka add button

// Higher Order → Calculator ka “custom formula” mode