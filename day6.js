//filter

const mynums=[1,2,3,4,5,6];
const newnum=mynums.filter((num)=>{// when we use scope we have to use return keyword
    return num>4
});
console.log(newnum);

// chaining
const newn=mynums.map((num)=>num*2).map((num=>num+1)).filter((num)=>num>6);
console.log(newn);


// reduce

const array1=[1,2,3,4,5];
const initialValue=0;
const sumwithinintial=array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialValue);
console.log(sumwithinintial);


const mytotal=array1.reduce(function(acc,currval){
    return acc+currval;
},initialValue);
console.log(mytotal);







