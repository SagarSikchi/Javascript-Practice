/* Title: Numbers in javascript.
 * Author: Sagar Sikchi
 */

// 'use strict'

/*
1. In javascript, precision for integers is 16 digits.
2. In javascript, precision for floating numbers is 17 digits.
3. After this, you will get junk values.
*/

console.log("\n");
let x = 1234567890123456;
console.log("x [1234567890123456]\t:" + x);
let y = 12345678901234567;
console.log("y [12345678901234567]\t:" + y);

let a = 0.1234567890123456;
console.log("a [0.1234567890123456]\t:" + a);
let b = 0.12345678901234567;
console.log("b [0.12345678901234567]\t:" + b);
console.log("\n");

/* Larger value */
let large = 5e10; // 5 followed by 10 zero - (50000000000)
let _large = 5e-6; // .5 zeros and 5 - (0.0000005)

console.log("5e10: " + large);
console.log("5e-6: " + _large);

/* Floating point arithmetic is not accurate */
let f = (0.1 * 10 + 0.2 * 10) / 10; // Floating 
let d = (1 * 10 + 2 * 10) / 10;     // Integer

console.log("(0.1 * 10 + 0.2 * 10) / 10: " + f);
console.log("(1 * 10 + 2 * 10) / 10    : " + d);

/* + with strings and numbers - concatenation of two strings */
console.log("Hello + 5: " + ("Hello" + 5));
console.log("10 + 10 + Hello + 5: " + (10 + 10 + "Hello" + 5));
console.log("10 + 10 + Hello + 5 + 10: " + (10 + 10 + "Hello" + 5 + 10));
console.log("10 + 10 + '60' + 5 + 10: " + (10 + 10 + "60" + 5 + 10));
console.log("\n");

/* -, *, /, %, ** with strings and numbers - arithmetics */
console.log("'5' * 5: " + ("5" * 5));
console.log("Hello * 5: " + ("Hello" * 5)); // NaN
console.log("10 + 10 / '60' ** 5 + 10: " + (10 + 10 / "60" ** 5 + 10));
console.log("typeof NaN: " + typeof NaN);
console.log("\n");

/* isNaN() method - return true or false */
console.log("isNaN('4'): " + isNaN("4"));
console.log("isNaN(2 * '4'): " + isNaN(2 * "4"));
console.log("isNaN('Hi' - '4'): " + isNaN("Hi" - "4"));
console.log("isNaN(NaN + 5): " + isNaN(NaN + 5));
console.log("isNaN(NaN + '5'): " + isNaN(NaN + "5"));
console.log("isNaN(NaN + 'Hi'): " + isNaN(NaN + "Hi"));
console.log("\n");

/* Hexadecimal Number - starts with 0x */
let hex = 0x5760;
console.log("hex [0x5760]: " + hex);

/* Octal Number - starts with 0 */
let oct = 05760;
console.log("oct [05760] : " + oct);
console.log("\n");

/* Infinity - positive, negative and type is number */
let p_infinity = 10 / 0;
let n_infinity = -10 / 0;
console.log("Positive Infinity [10 / 0] : " + p_infinity);
console.log("Negative Infinity [-10 / 0]: " + n_infinity);

console.log("10 % Infinity: " + 10 % p_infinity);
console.log("10 % -Infinity: " + 10 % n_infinity);
console.log("10 ** Infinity: " + 10 ** p_infinity);
console.log("10 ** -Infinity: " + 10 ** n_infinity);
console.log("\n");

/* Loop for Infinity */
a = 5;
let count = 0;
console.log("Initial Value of a: " + a);
while(a != Infinity) {
    console.log("a (count: " + ++count + ")==> " + a);
    a *= 5;
}
console.log("a (count: " + ++count + ")==> " + a);
console.log("\n");

/* Number as an Object */
let num1 = new Number(57);
let num2 = new Number(57);
let num3 = 57;

console.log(`
let num1 = new Number(57);
let num2 = new Number(57);
let num3 = 57;`);

console.log("num1 == num2 ==> " + (num1 == num2));
console.log("num1 == num3 ==> " + (num1 == num3));
console.log("num2 == num3 ==> " + (num2 == num3));
console.log("num1 === num2 ==> " + (num1 === num2));
console.log("num1 === num3 ==> " + (num1 === num3));
console.log("num2 === num3 ==> " + (num2 === num3));

console.log("typeof num1 ==> " + typeof num1);
console.log("typeof num2 ==> " + typeof num2);
console.log("typeof num3 ==> " + typeof num3);
console.log("\n");

/* Conversion of Numbers into Strings */
/* Base of:
    Decimal - 10
    Hexadecimal - 16
    Octal - 8
    Binary - 2;
*/
let num = 10;
let decimal = num.toString(10); // 10 is base
let hexadecimal = num.toString(16); // 16 is base
let octal = num.toString(8); // 8 is base
let binary = num.toString(2); // 2 is base
let base_3 = num.toString(3); // 3 is base
let base_7 = num.toString(7); // 7 is base
let base_9 = num.toString(9); // 9 is base

console.log(`Decimal: ${decimal}
Hexadecimal: ${hexadecimal}
Octal: ${octal}
Binary: ${binary}
Base_3: ${base_3}
Base_7: ${base_7}
Base_9: ${base_9}`
);
console.log("\n");

console.log(`typeof Decimal: ${typeof decimal}
typeof Hexadecimal: ${typeof hexadecimal}
typeof Octal: ${typeof octal}
typeof Binary: ${typeof binary}
typeof Base_3: ${typeof base_3}
typeof Base_7: ${typeof base_7}
typeof Base_9: ${typeof base_9}`
);
console.log("\n");

/* Conversion of Numbers into Exponentials */
num = 50.4578;
console.log("num: " + num);
let exp = num.toExponential(2); // round off 2 decimal points
console.log("num.toExponential(2): " + exp);
exp = num.toExponential(3); // round off 3 decimal points
console.log("num.toExponential(3): " + exp);
exp = num.toExponential(12); // round off 12 decimal points
console.log("num.toExponential(12): " + exp);
console.log("typeof num.toExponential(12): " + typeof exp);
console.log("\n");

/* toFixed() - decimal number has been reduced to the specified number of decimal points - returns string */
/* num.toFixed(number of decimal points) */
/* Rounded off - 0.578 to 0.58 */
console.log("num: " + num);
// console.log("num.toFixed(-1): " + num.toFixed(-1)); // Error
console.log("num.toFixed(): " + num.toFixed());
console.log("num.toFixed(0): " + num.toFixed(0));
console.log("num.toFixed(1): " + num.toFixed(1));
console.log("num.toFixed(2): " + num.toFixed(2));
console.log("num.toFixed(3): " + num.toFixed(3));
console.log("num.toFixed(4): " + num.toFixed(4));
console.log("num.toFixed(5): " + num.toFixed(5));
console.log("\n");

/* toPrecision() - returns a string */
/* Number is written in a specified length */
/* Can give the entire number's length */
num = 57.60117;
console.log("num: " + num);
// console.log("num.toPrecision(0): " + num.toPrecision(0)); // Error
console.log("num.toPrecision(): " + num.toPrecision());
console.log("num.toPrecision(1): " + num.toPrecision(1));
console.log("num.toPrecision(2): " + num.toPrecision(2));
console.log("num.toPrecision(3): " + num.toPrecision(3));
console.log("num.toPrecision(4): " + num.toPrecision(4));
console.log("num.toPrecision(5): " + num.toPrecision(5));
console.log("num.toPrecision(6): " + num.toPrecision(6));
console.log("num.toPrecision(7): " + num.toPrecision(7));
console.log("num.toPrecision(9): " + num.toPrecision(9));
console.log("\n");
/* String to Number Conversion */
let string = "55";
console.log("5 + '55': " + (5 + Number(string)));
console.log("\n");

/* Date to Number Conversion */
let date = new Date("2021-03-20"); // After 1970-01-01
let _date = new Date("1969-01-01"); // Before 1970-01-01
console.log("Number(date): " + Number(date)); // miliseconds
console.log("Number(_date): " + Number(_date)); // -miliseconds

/* parseInt() and parseFloat() methods */
/* parses a given string into whole/decimal number */
console.log("\nparseInt()");
console.log("parseInt('2.5552'): " + parseInt("2.5552"));
console.log("parseInt('2.9952'): " + parseInt("2.9952"));
console.log("parseInt('22'): " + parseInt("22"));
console.log("parseInt('22 33 44'): " + parseInt("22 33 44"));
console.log("parseInt('Hi 44'): " + parseInt("Hi 44"));
console.log("parseInt('44 Hi'): " + parseInt("44 Hi"));
console.log("parseInt('    44  '): " + parseInt("    44  "));
console.log("\nparseFloat()");
console.log("parseFloat('2.5552'): " + parseFloat("2.5552"));
console.log("parseFloat('2.9952'): " + parseFloat("2.9952"));
console.log("parseFloat('22'): " + parseFloat("22"));
console.log("parseFloat('22 33 44'): " + parseFloat("22 33 44"));
console.log("parseFloat('Hi 44'): " + parseFloat("Hi 44"));
console.log("parseFloat('44 Hi'): " + parseFloat("44 Hi"));
console.log("parseFloat('    44  '): " + parseFloat("    44  "));

/* Max and Min values in Javascript */
console.log(`\nMax Value in Javascript: ${Number.MAX_VALUE}
Min Value in Javascript: ${Number.MIN_VALUE}
Max Safe Integer in Javascript: ${Number.MAX_SAFE_INTEGER}
Min Safe Integer in Javascript: ${Number.MIN_SAFE_INTEGER}
Positive Infinity in Javascript: ${Number.POSITIVE_INFINITY}
Negative Infinity in Javascript: ${Number.NEGATIVE_INFINITY}
(Not works on variables - variable.MAX_VALUE): ${num.MAX_VALUE}\n`);

/* isFinite() and isInteger() */
console.log(`isFinite(100): ${isFinite(100)}
isFinite(Infinity): ${isFinite(Infinity)}
Number.isInteger(100): ${Number.isInteger(100)}
Number.isInteger(10.0): ${Number.isInteger(10.0)}
Number.isInteger(10.25): ${Number.isInteger(10.25)}\n`);
