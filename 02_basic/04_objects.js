//const tinderUser= new Object() // ye ek singleton object
//const tinderUser={}// ye non single object hai pr dono hi object declaration hai
// const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false
//console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"yogi",
//             lastname:"pal"
//         }
//     }
// }

// console.log(regularUser.fullname);// { userfullname: { firstname: 'yogi', lastname: 'pal' } }
// console.log(regularUser.fullname.userfullname.firstname);// yogi

//object combine
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4={5:"e", 6:"f"}
// //const obj3={obj1,obj2}// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// // const obj3=Object.assign(obj1,obj2)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// //const obj3=Object.assign(obj1,obj2,obj4)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// // ise use kiya karo({}=> target, ,,, baki sorce)
// //const obj3=Object.assign({},obj1,obj2,obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// // generally use sprade  ...
// const obj3={...obj1,...obj2,...obj4}// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj3)

// // database se value aaye jab
// // const users=[
  
// //     {
// //         id:1,
// //         email:"some@gmal"
// //     },
// //      {
// //         id:1,
// //         email:"some@gmal"
// //     },
// //      {
// //         id:1,
// //         email:"some@gmal"
// //     },
// //      {
// //         id:1,
// //         email:"some@gmal"
// //     },
// //      {
// //         id:1,
// //         email:"some@gmal"
// //     }

// // ]

// // users[1].email

// const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false
// console.log(tinderUser);// { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser ));// [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));// [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// // present dekhene ke liye use karte 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true


// destructuring 
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// method 1
//course.courseInstructor;

// method 2
// const {courseInstructor}=course
const {courseInstructor: instructor}=course
// console.log(courseInstructor);// hitesh
console.log(instructor);//hitesh

// json
// {
//     "name":"yogi",
//     "coursename":,"js in hindi",
//     "price":free
// }

// [
//     {},
//     {},
//     {}
// ]