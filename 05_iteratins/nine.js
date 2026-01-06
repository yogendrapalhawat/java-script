//reduce
const array1=[1,2,3,4,5]
//0+ 1+ 2+3 +4
// const intailValue=0
// const sumWithIntaial=array1.reduce((accumulator,currentValue)=>accumulator+ currentValue,intailValue)
// console.log(sumWithIntaial);

const myTotal=array1.reduce(function(accumulator,currentValue){
    console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`);
    return accumulator+currentValue
    
},0)
console.log(myTotal)

const shoppingCart=[
    {
        itemName:"py Courese",
        price:999
    },
    {
        itemName:"mobile Courese",
        price:5999
    },
    {
        itemName:"data scinece Courese",
        price:12999
    }
]

const priceTopay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceTopay);
