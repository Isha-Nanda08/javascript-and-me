// array *************

// array in js are resizable
// array in js are 0 indexed
// array in js can store multiple data types
// array in js are mutable
// array in js are iterable
// array in js are objects
// array in js create shallow copy (reference)

const myarr = [0,2,3,4,"isha"];
const myarr2=new Array(1,2,3,4);
console.log(myarr[0]);
console.log(myarr.length);
console.log(myarr[myarr.length-1]);
// array methods

myarr.push(2);
myarr.pop();
myarr.unshift(9); // will shift all the elements and insert 9 at 0th index
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newarr=myarr.join();
console.log(myarr); 
console.log(newarr); // type of this will be string

// slice , splice

console.log("A ",myarr); // will print A then array
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log(myarr); // original array will not change

const myn2=myarr.splice(1,3);
console.log(myn2);
console.log(myarr); // changes in original array

const marvel_heros=["thor","ironman","spiderman"];
const dc=["superman","flash"];

marvel_heros.push(dc);
console.log(marvel_heros); // we will get array within the array
// it considered array as a single element
// to avoid this we use spread operator
//concat return new array while push works on the same array
const all_heros=marvel_heros.concat(dc);
console.log(all_heros); 
//spread oprator
const all_heros2=[...marvel_heros,...dc];
console.log(all_heros2); // it will flatten the array

const anotheraarray=[1,2,3,4,[5,6],7,[6,7,[4,5]]];
// to convert it into single array
const real_another_arry=another_array.flat(Infinity);
console.log(real_another_array);
// Infinity means it will go to any level of nesting
// if we give 1 it will only go to one level of nesting
console.log(Array.isArray("isha")); // will return false as its not an array
console.log(Array.from("isha")); // will create whatever is there into array
console.log(Array.from({name:"isha"})); // will not able to directly convert into array
// will return the empty array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // will return  new the array with the elements

console.log([score1,score2,score3]); // will also return the same result    
// but Array.of is more flexible
console.log(Array.of(1)); // will return [1]
console.log([1]); // will return [1]
