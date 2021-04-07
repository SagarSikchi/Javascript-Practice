/* Title: Functions in javascript.
 * Author: Sagar Sikchi
 */

'use strict'

/* Definition of function -
    function functionName(parameters) {
        code...
    }
*/
function printHello() {
    console.log("Hello!");
}

/* Calling function -
    functionName(arguments);
*/
printHello();

/* Funtion that adds two numbers and print result */
function addition(x, y) {
    console.log("x + y: " + (x + y));
}
addition(10, 20);

/* return multiplication of two numbers and print it */
/* functions have only one return value */
function multiply(x, y) {
    return x * y;
}
console.log("x * y: " + multiply(10, 20));

/* Calling function multiple times */
for (var i = 0; i < 5; i++) {
    console.log(`${i} * ${i + 10} = ${multiply(i, i + 10)}`);
}

/* Global and Local Scope */
let num = 5; // global number
function printNum(num) {
    console.log("Global: " + num);
    num = 15; // local number
    console.log("Local: " + num);
}
printNum(num);
console.log("Global: " + num);

/* Default parameters */
function DefaultParameters(num1 = 5, num2 = 10) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
DefaultParameters();
DefaultParameters(10);
DefaultParameters(10, 20);

/* Function Expressions/Anonymous Functions */
let age = function (age_ = 21) {
    console.log("Age: " + age_);
};
console.log("age: " + age);
console.log("age(30): " + age(30));
age();
age(40);

let age2 = age;
console.log("age2: " + age2);
console.log("age2(30): " + age2(30));
age2();
age2(50);

/* Difference between Function Declaration and Function Expression ==>
    1.  In Function Declaration, CALL can be done before/after DEFINITION. 
        While in Function Expression, CALL must be done after DEFINITION.
    2.  In Function Declaration, CALL and DEFINITION must be in same block(if, for, while, etc).
        While in Function Expression, it is not necessary.
*/

/* Self-invoking Functions - Only for Function Expressions, not for Function Definitions */

/* Case 1: With and Without a Function Name */
(function () {
    console.log("\nThis is the self-invoking function without function name!");
})();

(function functionName() {
    console.log("This is the self-invoking function with function name!");
})();

/* Case 2: Use of Function Expression */
var hello = function () {
    console.log("Say Hello! - From the Self-invoking Function Expression.\n");
}();

/* Arrow Functions -
   ES6 - ECMAScript 2015 Update
   Fat Arrow =>
   Shorten the Function Definition of Function Expression
*/
/* Example of Above One-Liner Function Expression in an Arrow Function Form */
var short_hello = () => console.log("Say Hello! - From the Arrow Function Expression.");
short_hello(); /* Function Call */

var short_add = (a, b) => a + b;
console.log(`short_add(57, 60): ${short_add(57, 60)}`);

/* Only for One Parameter */
var short_mult = m => m * 60;
console.log(`short_mult(57): ${short_mult(57)}\n`);

/* Arguments Objects -
    Store all the arguments that you send via your function call - in the form of an array. 
*/
function ArraySum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let Array_Sum = ArraySum(10, 20, 30, 40, 50, 60, 70, 80, 90);
console.log(`ArraySum(): ${Array_Sum}`);

/* Recursion - Recursive Functions */
let Recursive_Sum = function RecursiveSum(n) {
    if (n == 1) return 1;
    return (n + RecursiveSum(n - 1));
}
console.log(`RecursiveSum(10): ${Recursive_Sum(10)}\n`);

/* Spreading an array into function arguments */
function separateArray(num1, num2, ...num3) {
    console.log(`num1: ${num1}
num2: ${num2}
num3: ${num3}`);
}
let arr = [57, 60, 117, 20, 30, 40];
separateArray(...arr);
let arr1 = [10, 20, 30];
let arr2 = [50, 60, 70];
console.log(`Math.max(...arr1, ...arr2) ==> ${Math.max(...arr1, ...arr2)}`);
console.log(`[100, ...arr, ...arr1, ...arr2, 1000] ==> ${[100, ...arr, ...arr1, ...arr2, 1000]}`);

/* Rest Parameters */
console.log(`\nRecursiveSum(10, 20, 30): ${Recursive_Sum(10, 20, 30)}`);
console.log(`separateArray(...arr):`);
separateArray(...arr);
console.log();

/* Scheduling Function Executions -
    User-defined, Pre-defined
    - Run after a delay - keep running after timed delays
    - setTimeout(functionName, delay in milliseconds, optional parameters) - call a function after a delay
    - setInterval() - keeps calling the function (indefinitely) after very timed delay
*/
function say(name) {
    console.log("Hello there! " + name);
}
setTimeout(say, 1000, "Javascript");

/* Cancel Timeout & Clear Interval */
let timer = setTimeout(say, 1000, "Javascript");
timer = setTimeout(say, 1000, "Javascript");
timer = setTimeout(say, 1000, "Javascript");
// console.log(`timer: ${timer}`);
clearTimeout(timer);
let tr = setInterval(say, 2000, "Javascript");
// console.log("Timer: " + tr);
setTimeout(() => { clearInterval(tr), console.log("Stopped") }, 10000);

