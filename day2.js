// primitive data type *******(call by value)
// 7 categories
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (new in ES6) // used to make value unique
// 7.BigInt


// declaring symbol
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId); // will return false
// because symbol is unique even if the value is same
// it is used to make value unique
// it is used in object property to make it unique


const bigint=123456783464n;
console.log(bigint); // will return 123456783464n
// n is used to specify that it is a big int
// it is used to handle large integer value


/////JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


// Reference type (non-primitive)
// 1. Object
// 2. Array
// 3. Function

// array
const heros=["shaktiman","naagraj","doga"];

console.log(heros); // will return ["shaktiman","naagraj","doga

// objects (use { } these braces)(seaprated by ,)
let myObj={
    name:"isha",
    age:20,
    occupation:"student"
}// take care of the syntax

// in js we can treat function as a variable


const myFunc= function(){
    console.log("hello world");
}

myFunc(); // will return hello world
// here function is treated as a variable
// we can pass function as an argument to another function
// we can return function from another function
// we can store function in an array or object
// we can even assign function to a property of an object

// console.log(typeof bigint);

// generally the return type of non primituve data types is object
// even the type of function is object function
console.log(typeof myFunc); // will return function(actually object function)

////************************ */


// stack(primitive) , Heap(non-primitive)

let myYoutubename="isha"; // this variable will go in stack
let anothername=myYoutubename;
anothername="aryan";
console.log(anothername); // will return aryan
console.log(myYoutubename); // will return isha

let user={
    email:"isha@gmail",
    password:"12345"
}
let userTwo=user;

userTwo.email="aryan@gmail";
console.log(userTwo.email); // will return aryan@gmail
console.log(user.email); // will return aryan@gmail
// here both user and userTwo are pointing to the same object in heap

////// use of backticks
let name="isha";
let repocount=8;
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// string is a object


const gameName= new String("isha");
console.log(gameName[2]); // will return value at 2 index
console.log(gameName.__proto__);

console.log(gameName instanceof String); // will return true
console.log(gameName instanceof Object); // will return true
console.log(gameName.length);
console.log(gameName.toUpperCase()); // however the original value does not changes
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0)); // will return first character
console.log(gameName.charCodeAt(0)); // will return ascii value of first character
console.log(gameName.concat("arya")); // will return concatenated string
console.log(gameName.includes("isha")); // will return true
console.log(gameName.indexOf("s")); // will return index of first occurrence
console.log(gameName.lastIndexOf("isha")); // will return index of last occurrence
console.log(gameName.match("isha")); // will return array of matches
console.log(gameName.replace("isha","aryan")); // will return replaced string
const newString=gameName.substring(0,3);
console.log(newString);// if provided -ve values will ignore
const anotherString=gameName.slice(-8,4)
console.log(anotherString); // for -ve it will start from reverse
const newStringone="   ishaaa"
console.log(newStringone.trim()); // will remove leading and trailing spaces
// only works with white spaces
console.log(newStringone);

console.log(newStringone.split("a")); // will return array of strings
console.log(newStringone.split("")); // will return array of each character
console.log(newStringone.split()); // will return array with single element
console.log(newStringone.split("isha")); // will return array with two elements

// to dedicately define  element as any type eg number use this syntax
const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));// will add decimal 2

