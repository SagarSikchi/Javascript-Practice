/* Title: Basics of javascript - Variables, data types, type conversion, etc.
 * Author: Sagar Sikchi
 */

/* Check all the outputs in the console */
'use strict';
let fruit = "This is an apple!" // string
let num = 5;                    // number - whole
let fractionDecimal = 1/2;      // number - fraction or decimal
let isBoolean = true;           // boolean - true or false
const PI = 3.1459;              // const - unchangable

console.log(`String: ${fruit}`);
console.log("Number: " + num);
console.log("Fraction: " + fractionDecimal);
console.log("Boolean: " + isBoolean);
console.log("Const: " + PI);

// Infinity and NaN datatypes
let infinity_ = 1/0;                      // sticky - infinity
console.log("Infinity_1: " + infinity_);

infinity_ += infinity_;
console.log("Infinity_2: " + infinity_);  // Infinity

infinity_ *= 0;
console.log("NaN_1: " + infinity_);       // NaN

let NaN_ = "Sagar" / 1;                   // NaN - not a number
console.log("NaN_2: " + NaN_);

// Use of backticks
console.log("Hello!\nGood Morning.\nHope your are doing well.");
console.log(`Hello!
Good Morning.
Hope you are doing well.`);
console.log(`1 + 2 = ${1+2}`);

// Arrays and Objects
let myArray = [1, "isString", 2.0, true]
console.log("Array: " + myArray);

let myObject = {
    name: "John",
    age: 25,
    isStudent: true
}
console.log("Object: " + myObject);

// typeof 
let number = 10;
console.log("Number: " + number);
console.log("typeof number: " + typeof number);
console.log("typeof(number): " + typeof(number));
console.log("typeof number + 10: " + typeof number + 10);
console.log("typeof (number < 10): " + typeof (number < 10));

// undefined
let notDefined;
console.log("notDefined: " + notDefined);               // undefined
console.log("typeof notDefined: " + typeof notDefined); // undefined
console.log('typeof "": ' + typeof "");                 // string
console.log("typeof myArray: " + typeof myArray);       // object
console.log("typeof myObject: " + typeof myObject);     // object
let null_ = null;
console.log("typeof null_: " + typeof null_);           // object - null object

// null and undefined are equal in values but different in types
/* Summary:
        Primitive datatypes - numbers, strings, booleans, undefined
        Complex datatypes - arrays and objects
*/

// type Conversion
myArray = Object(myArray);      
console.log(myArray);           // nothing changes
myObject = Array(myObject);
console.log(myObject);          // changes to array having first element as whole object; length = 1

number = String(number);
console.log(typeof number);     // string

number = "12345";               // string
console.log(number);
console.log(typeof number);
number = Number(number);
console.log(number);            // number
number = "1234 5";
number = Number(number);
console.log(number);            // NaN - not a number

num = 1;
console.log(Boolean(num));      // true
isBoolean = Number(isBoolean);
console.log(isBoolean);         // 1 - true

console.log("1 + 2 = " + (1 + 2)); // 1 + 2 = 3
console.log("1 + 2 = " + 1 + 2);   // 1 + 2 = 12

// Intermediate outputs/testing - console.log()
// Actual outputs that users can see - alert()
// Outputting directly to the page - DOM
// Prompt box - prompt for values from the users; always assign it to a variable
// Confirm box - used to get yes or no answers

// let name = prompt("What's your name?"); // accepts empty or non-empty string; null on cancel
// console.log(name);
// let age = confirm("Is your age less than 20?");
// console.log(age);  // true on ok; false on cancel