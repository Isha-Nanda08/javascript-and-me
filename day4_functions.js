function add(num,num2){
    console.log(num+num2);
}
// add(2,"a");
const result=add(2,4);
console.log(result); // will give us undefined
// because add function does not return anything
// so it will return undefined
// if we want to return something we need to use return keyword
function add(num,num2){
    return num+num2;
    }
    const result1=add(2,4);
    console.log(result1); // will give us 6
    // because we are returning the result of num+num2
    // and we are storing it in result1 variable
    // and then we are logging it to the console
    // so it will give us 6
    // if we want to return multiple values we can use array or object
    function add(num,num2){
        return [num+num2,num-num2,num*num2];
    }
    function login(username){
        if(username==undefined){
            console.log("please enter a username");
            return;
        }
        return `${username} just log in`;
    }
console.log(login());//undefined first then will give just logged in
console.log(login(""));
function calculate(...num1){ //(val1,val2,...add.num1)
    return num1;
}
console.log(calculate(200,100,300)); // will get the array of objects

const user ={
    username:"isha",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user); // will give us username is isha and price is 199
// we can also use destructuring
function handleObject({username,price}){
    console.log(`username is ${username} and price is ${price}`);
    }
    handleObject(user); // will give us username is isha and price is 199
     handleObject({
        username:"ihgjh",
        price:987
    })



// arrow function
// arrow function is a concise way to write function
// it is used when we have a single line of code
// it is used when we have a single argument
// it is used when we have a single return statement
// it is used when we have a single expression
// it is used when we have a single statement
const usere={
    username:"ishae",
    price:23,
    welcome:function(){
        console.log(`${this.username} welcome to website`);
    }
}
usere.welcome();
usere.username='isha';
usere.welcome();

// const chai=function(){
//     console.log(this);
// }
// chai();

// const chai=function(){
//     let username="isha";
//     console.log(this.username);// will give undefined
// }
// chai();

const chai=()=>{
    let username="isha";
    console.log(this);// will give empty parenthesis
}
chai();


const add2=(num1,num2)=>{
    return num1+num2;
}

// can implicitly return that is remove parenthesis
//also no need to write return
const add1=(num1,num2)=>  num1+num2;
const add3=(num1,num2)=>  (num1+num2); // cant use curly braces
// to return the object we to wrap it into parenthesis
const add4=(num1,num2)=>  ({sum:num1+num2}); // to

// const myarry=[1,2,3,3]
// myarry.forEach();


/// Immediately Invoked Function Expressions (IIFE)
// kuch functions hume immediatley invoke krvane padte h 
// hume kyu chahiye aise functions jo immediately invoke ho jaaye

(function chai(){
    console.log("isha");
})(); // needs to be ended with the semicolon
// sometimes because of global scope pollution creates problem to remove this remove iife
// (function defination)(excecution call)
(()=>{
    console.log("isha");
})()
