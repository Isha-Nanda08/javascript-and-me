// control flow

//if
if(2=="2"){
    console.log("true"); // will get executed
}

// use strict equal to ===
let a=3;
if(true){
    a=2;
}
console.log(a);
// switch

const month=3;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");
}

const value="";
if(value){
    console.log("value is truthy");
}
else{
    console.log("value is falsy"); // executed
    }
    // falsy values
// if taken value as array empty then it would have retured truthy value
// if taken value as null then it would have retured falsy value
// if taken value as undefined then it would have retured falsy value
// if taken value as 0 then it would have retured falsy value
// if taken value as "" then it would have retured falsy value
// if taken value as NaN then it would have retured falsy value
// if taken value as false then it would have retured falsy value
// if taken value as {} then it would have retured truthy value
// if taken value as [] then it would have retured truthy value
// if taken value as function then it would have retured truthy value
// if taken value as object then it would have retured truthy value
// if taken value as string then it would have retured truthy value
// if taken value as number then it would have retured truthy value
// if taken value as boolean then it would have retured truthy value
// if taken value as symbol then it would have retured truthy value
// if taken value as bigint then it would have retured truthy value
// if taken value as async function then it would have retured truthy value
// if taken value as generator function then it would have retured truthy value

// Nullish coalescing Operator (??) :null undefined

let val;
// val=5 ?? 10;
val=null ?? 10;
console.log(val);

// terniary operator

let age=18;
let result=age>=18?"You are eligible to vote":"You are not eligible to vote";
console.log(result);

// high order array loops

const arr=[1,2,3,4,5]
// for iof
// can be applied to string, objects

for(const i of arr){
    console.log(i);
}

// maps (stores key value pairs) 
// keys can be of any data type
// keys are unique
// order of keys is not guaranteed
// maps are iterable
// maps are mutable
// maps are not arrays


const map=new Map();
map.set('In',"India")
map.set('Us',"USA")
map.set('Uk',"United Kingdom")

console.log(map);

for(const [key] of map){
    console.log(key,value);
}

const myobj={
    'game1':'NFS',
    'game2':'PUBG',
    'game3':'GTA'
}

// for(const [key,value] of myobj ){
//     console.log(key,value);
// } 
// obj is iteratable in this way


// use for in for objects

for(const key in myobj){
    console.log(myobj[key]);
}

for(const key in arr){
    console.log(arr[key]);
}

for(const key in map){
    console.log(map[key]);
}

// can directly iterate to the array
const coding =["js","ruby","java","python"];
coding.forEach( function (item){ // callback function taks every elemnt of array as parameter
    console.log(item);
})

// arrow function
coding.forEach((item)=>{
    console.log(item);
    })


function printMe(item){
    console.log(item);
}
coding.forEach(printMe); // give reference so not use printMe()

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    })

const mycoding=[
    {
        languagename:"js",
        languageFile:".js"
    },
    {
        languagename:"java",
        languageFile:".java"
    },
    {
        languagename:"c++",
        languageFile:".cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename,item.languageFile);
})