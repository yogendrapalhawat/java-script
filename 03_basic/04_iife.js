// Immediately Invoked Function Expressions (IIFE)
// kyo use krte hai=> global scope ya polution se hoti problem global variable ki problem se hatane ke liye hota hai use

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })()// DB CONNECTED// 


// agar ise use kr rahe hai to semicolon(;) ye last me jarur lagaye barana pta hi nhi chalega end ka karna hai
// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })()
// // GIVE error kyoki use end hi nhi kiya hai

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
    
// })

//
(function chai(){ // name iife hai ye kyoki iska naam diya hai
    console.log(`DB CONNECTED`);
    
})();
// GIVE no error kyoki use end hi  kiya hai

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
    
})();// DB CONNECTED TWO

// also represent arrow function just like that
((name)=>{// unname iife
    console.log(`DB CONNECTED THREE ${name}`);
})('yogi');// DB CONNECTED THREE yogi

