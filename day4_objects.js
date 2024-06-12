// functions in objects

const Jsuser={
    name:"Rahul",
    age:20,
    // [mySym]:"myKey1", // will not work
    "full name":"rahul v", // cant be accessed by . operator , use square notation
    email:"isha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday"]
}

Jsuser.greetings=function(){
    console.log("Hello, "+this.name);
}
Jsuser.greetings();
console.log(Jsuser.greetings()); 
console.log(Jsuser.greetings); //will give us a function return back that is function is not executed its reference is used
Jsuser.greet=function(){
    console.log(`Hello ${this.name}`);
}

// singleton objects

const tinderUser=new Object();
console.log(tinderUser); // will give us the empty object
tinderUser.name="isha";
tinderUser.age=20;
tinderUser.greet=function(){
    console.log(`Hello ${this.name}`);

}
tinderUser.greet();
console.log(tinderUser);
const regularUser={
    email:"isha@gmail.com",
    fullname:{
        userfullname:{
            firstname:"isha",
            lastname:"nanda"
        }     
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// merging objects
const user1={1:"a",2:"b"};
const user2={3:"c",4:"d"};
// const user3={obj1,obj2};//same as array problem
const mergedUser={...user1,...user2}; // will use mostly
const user3=Object.assign({},user1,user2); // this will work

// when we get the values from database we generally get the array of objects
const users=[
    {
        id:1,
        email : "wlsf"
    },
    {
        id:1,
        email:"wlsf"
    }
]
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // will give both keys and values
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js",
    price:"free",
    rating:4.5,
}
const {coursename}=course;
console.log(coursename);
// destructuring
const {coursename:name}=course;
console.log(name);

// destructuring with default value

//json
// {
//     "name":"siah",
//     "iln":"js",
//     "price":"free"
// }