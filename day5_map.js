const coding=["js","ruby","java","python"];

const values=coding.forEach((item)=>{
    // console.log(item);
    return item
})
console.log(values); //undefined
//return manually --- still undefined

const mynums=[1,2,3,4,5,6];
const newnums=mynums.filter((num)=> num>4 );
// or filter((num)=>{
    // return num>4
// })
console.log(newnums); // [5,6]

const nums=[];
mynums.forEach((num)=>{
    if(num>4){
        nums.push(num);
    }
})

console.log(nums);

const newNums=mynums.map( (num)=>num+10);
console.log(newNums);


// chaining 
const x=mynums
        .map((num)=> num*10)
        .map((num)=> num +1)
        .filter((num)=> num>=20);


// reduce 

const number=[1,2,3,4];

const total=number.reduce(function(acc,currval){
    console.log(`acc : ${acc} and currval: ${currval}`);
    return acc+currval;
},0)
console.log(total); //10

// using arrow functions 
const myTotal=number.reduce((acc,currval)=>  acc+currval,0)
console.log(myTotal); //10

