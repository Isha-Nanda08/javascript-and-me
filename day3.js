const number=1112.3387687;
console.log(number.toPrecision(3));// will return a string

const humdereds=100000000;
console.log(humdereds.toLocaleString());// will return a string with commas

////******************Maths */

console.log(Math);
console.log(Math.abs(-4));// change the sign to +ve
console.log(Math.ceil(4.2));// round up
console.log(Math.floor(4.8));// round down
console.log(Math.round(4.5));// round to nearest
console.log(Math.round(3.5));// round to nearest
console.log(Math.max(1,2,3,4,5,6,7,8));
console.log(Math.min(1,2,3,4,5,6,7,8));
console.log(Math.pow(2,3));// 2 to the power of 3
console.log(Math.sqrt(16));// square root
console.log(Math.PI);
console.log(Math.random());// random number between 0 and 1
console.log(Math.random() * 10);// random number between 0 and 10
console.log((Math.random() * 10) + 1);// random number between 1 and 10
console.log(Math.trunc(4.8));// remove decimal part
console.log(Math.sign(-4));// return -1 if negative, 1 if positive, 0
console.log(Math.sin(3.14));// sine of an angle

// random number between min and max
const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// date and time 
let myDate=new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON()); // returns date object as a string formatted as a json date
console.log(myDate.toISOString());
// type of date is object
console.log(typeof myDate);

// let myCreateDAte=new Date(2023,0,23,5,3); // months in js starts from 0
let myCreateDAte=new Date("2024-06-11"); // here month start from 1
console.log(myCreateDAte.toDateString);
let myTimeStamp=Date.now(); // will give value in ms
// console.log(myTimeStamp);
// console.log(myCreateDAte.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert in sec without decimal value
let newdate=new Date();

newdate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    
})



