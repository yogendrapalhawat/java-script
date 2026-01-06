//const coding=["js","ruby","java","python","cpp"]
// foreach return nhi karta
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values);
// filter ka use
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNUms=myNums.filter((num)=>num>4)
//console.log(newNUms);

// const newNUms=myNums.filter((num)=>{
//     return num>4;
// })
// console.log(newNUms);

// agara for each hi use karana hai to
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);


//
const books = [
  {
    title: 'Book One',
    genre: 'Fiction',
    publish: 1981,
    edition: 2004,
    author: 'John Smith',
    price: 299,
    rating: 4.2
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008,
    author: 'Robert Brown',
    price: 399,
    rating: 4.0
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007,
    author: 'Emily Clark',
    price: 349,
    rating: 4.5
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010,
    author: 'Michael Lee',
    price: 279,
    rating: 3.8
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014,
    author: 'Sarah Johnson',
    price: 499,
    rating: 4.6
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publish: 1987,
    edition: 2010,
    author: 'David Miller',
    price: 320,
    rating: 4.1
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996,
    author: 'Anna White',
    price: 250,
    rating: 3.9
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2018,
    author: 'Chris Green',
    price: 550,
    rating: 4.8
  },
  {
    title: 'Book Nine',
    genre: 'Technology',
    publish: 2015,
    edition: 2021,
    author: 'Kevin Adams',
    price: 699,
    rating: 4.7
  },
  {
    title: 'Book Ten',
    genre: 'Self-Help',
    publish: 2018,
    edition: 2022,
    author: 'Laura Wilson',
    price: 450,
    rating: 4.3
  }
];

//const userbooks=books.filter((bk)=>bk.genre=='History')
const userbooks=books.filter((bk)=>bk.publish>=1999 && bk.genre==='History')
console.log(userbooks);

