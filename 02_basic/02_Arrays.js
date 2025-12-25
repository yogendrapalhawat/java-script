const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// array kisi type ka entries data lele te hai isne Array ko bhi le liya
//console.log(marvel_heros[3][0]);// superman
// push exiting array pr work krta hai
// concat
// JavaScript में concat() original array को modify नहीं करता
//यह एक नया array return करता है जिसमें दोनों arrays के elements होते हैं

const combine=marvel_heros.concat(dc_heros)
console.log(combine);// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spead  ...
// kinte bhi combine kr skte hai
const all_heros=[...marvel_heros, ...dc_heros]// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(all_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//.falt=> ek me la leta hai      or isme depth ka role hota hai jitna tak simple karna ho utne tak kr skte hai
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);//[1,2,3,4,5,6,7,6,7,4,5]


//
console.log(Array.isArray("Yoggendra"));// false
//convert into array
console.log(Array.from("Yogendra"));//['Y', 'o', 'g','e', 'n', 'd','r', 'a']

//
console.log(Array.from({name:"Yogendra"}));// [] empty array dega kyoki isko batan padega ki key karna hia ya value 

//
let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]
