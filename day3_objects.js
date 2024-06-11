// singleton : apne tarah ke ek hi object h baaki objects ke kai instances bn jaate h 
// sinleton is formed by constructor
// objects can be declared thru literals as well as constructor

//singleton
//Object.create() // here object is being created with the help of the constructor


// object literals (keys: value)

const mySym = Symbol("key1");

const Jsuser={
    name:"Rahul",
    age:20,
    mySym:"myKeyone", // will not work
    "full name":"rahul v", // cant be accessed by . operator , use square notation
    email:"isha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday"]
}

// how to acces the object values

console.log(Jsuser.email);
// console.log(Jsuser[email]); // wil give error as key values are read in the form of string

console.log(Jsuser["email"]); // now it will work
console.log(Jsuser["full name"]);// we cant access full name with . operator now