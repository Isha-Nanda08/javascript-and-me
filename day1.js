console.log("isha");
const a=10;
var b="ishan";
let c=19;
console.table([a,b,c]);


    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2

    let y= 1;
  
    if (true) {
      let y= 2;
      console.log(y); // will print 2
    }
  
    console.log(y); // will print 1
  

    // avoid using var as it does not care about functionality scope
  "use strict"; // treat all js code as newer version but nowadays all js cvodes are considered newer versions but still it can be seen at many places 
//   alert("hello"); // will give us pop up in browser but not here for this we have different syntax
// we are using node js not browser
let name="isha"; //string
let age=19;
let isboll=true;
let state=null;
//bigint
//string=>""
//number=>10
//boolean=>true/false
//null=>standalone value(empty value)
//undefined=>variable is declared but not initialized
//symbol=>unique


//object

console.log(typeof "isha");
console.log(typeof null); // will give object
console.log(typeof undefined); // will give undefined


let score="33";
console.log(typeof score);
//to gaurantee that score shoukd be number
let valueInnumber=Number(score);
console.log(typeof score);

//;but if value in string is not number then also it will return NaN which is not a number

// let score1="A123";
// let score1=null; //will convert it to 0
let score1=undefined // it will also give NaN
//for boolean will give 1 for true and 0 for false
let value=Number(score1);
console.log(value);
console.log(typeof value);
// "33"=>33
//"33acs"=>NaN
//null=>0
//undefined=>NaN
//true=>1
//false=>0
//string=>NaN

///// to convert into string 
let e=33;
let value1=String(e);
console.log(typeof value1);

/// **************** Operations *********************

console.log("2"+2); //2
console.log(2+"2");; //22
console.log(2+2+"2"); //42
console.log("2"+2+2); //222
console.log("2"-2); //0
console.log("2"*2);//4
console.log("2"/2);//1
console.log(+true);// will give 1
// console.log(true+);//error

console.log(+"");// will give 0

let num1, num2,num3;
num1=num2=num3=3;

///***********comparison */

console.log("2">1);
//here generally we dont have comparable and predictable results thats why used typescript
console.log(null>0); // return true
console.log(null>=0); // false 
// as comparisons convert null to number

/// strict check === // checks datatype also

console.log(1==='1');