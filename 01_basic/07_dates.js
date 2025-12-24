//Dates
let myDates=new Date()
console.log(myDates);//2025-12-24T12:43:33.340Z
console.log(myDates.toDateString()); //Wed Dec 24 2025
console.log(myDates.toLocaleString()); //12/24/2025, 12:44:39 PM
console.log(myDates.toLocaleDateString()); //12/24/2025
console.log(myDates.toTimeString());// 12:46:27 GMT+0000 (Coordinated Universal Time)

// let myCreateDate= new Date(2023,0,23)

//console.log(myCreateDate.toDateString()); //Mon Jan 23 2023

// let myCreateDate= new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString());// 1/23/2023, 5:03:00 AM


let myCreateDate= new Date("2023-12-01")
console.log(myCreateDate.toLocaleString());//1/14/2023, 12:00:00 AM

//timestamp
let myTimeStamp=Date.now()
console.log(myTimeStamp);// 1766580922181(mili sec value)
console.log(myCreateDate.getTime());//1701388800000

console.log(myCreateDate.getTime());//1701388800000

console.log(Date.now());// 1766581141151(comparision hamesa mili sec me karna generally)
console.log(Math.floor(Date.now()/1000));// 1766581212 convert in sec

let newDate=new Date()
console.log(newDate.getDate());//24
console.log(newDate.getDay());//3
console.log(newDate.getMonth()+1);//12

//
newDate.toLocaleString('default',{
      weekday:"narrow",
      timeZone:'AM'
})