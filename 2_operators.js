/* Title: Operators in javascript.
 * Author: Sagar Sikchi
 */

'use strict';

let a = 2, b, c;
console.log("a: " + a); // 2
a = 10;
console.log("a: " + a); // 10
b = 50;
c = a + b;
console.log("a: " + a + " b: " + b + " c: " + c); // 10 50 60
c = a - b;
console.log("a: " + a + " b: " + b + " c: " + c); // 10 50 -40
c = a * c;
console.log("a: " + a + " b: " + b + " c: " + c); // 10 50 -400
c = 100 / b;
console.log("a: " + a + " b: " + b + " c: " + c); // 10 50 2
c = c / 3;
console.log("c: " + c); // 0.666...
c = b % 3;
console.log("c: " + c); // 2
c = c**c;
console.log("c: " + c); // 4
c = c**256;
console.log("c: " + c); // 1.3407...
c = 4;
c = c**c**c;
console.log("c: " + c); // 1.3407...
c = c**(1/c);
console.log("c: " + c); // 1

// string concatenation - expression is calculated from left to right
let s = 1 + "string" + 2; // int(1) --> string(string) == string(1string) --> int(2) == string(1string) + string(2) == string(1string2)
console.log("s: " + s);   // 1string2
s = 1 + 2 + "3" + 4 + 5;  // int(1) + int(2) = int(3) + string(3) = string(33) + int(4) = string(334) + int(5) = string(3345)
console.log("s: " + s);   // 3345
s += "000";
console.log("s: " + s);   // 3345000
s -= "111";
console.log("s: " + s);   // 3344889

// comparison operators
a = 2, b = 2;
console.log(a == b);  // compare only values - true
console.log(a === b); // compare data type also - true
console.log(a == 3);  // false
b = "2";
console.log(a === b); // false
console.log(a == b);  // true
console.log(a !== b); // true
console.log(a != b);  // false
a = "Javascript";
b = "javascript";
console.log(a !== b); // true - ASCII comparison
console.log(a == b);  // false
console.log(a <= b);  // true
a = 2, b = 3;
// console.log(a <== b); // error
console.log(a <= b);  // true

console.log("Hello" <= "5");  // NaN <= 5 - false
console.log(true <= "5");     // true >= 5 - true
console.log(true <= 5);       // true >= 5 - true
console.log(false < "");      // false
console.log(false > "");      // false
console.log(false == "");     // true
console.log(2 > a);     // 2 > a - false
console.log(2 < a);     // 2 < a - false
console.log(a == 2);    // a == 2 - true

// ternary operation
/* General Rule ==>
   a ? b : c
   Or
   variable = (comparison) ? valueOn_true : valueOn_false
*/
let age = prompt("What's your age?");
let output = (age < 5) ? "You are a Toddler" : "You are now Grown up";
alert(output + "!");

/* 
Precision rule ==>
   () --> multiplication --> division --> modulus --> addition --> subtraction --> assignment 
*/
console.log("(15 + 13 * 5) * 3 % 2 / 3 + 6 - 1 ==> " + [(15 + 13 * 5) * 3 % 2 / 3 + 6 - 1]); // 5




