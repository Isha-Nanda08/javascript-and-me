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


 
