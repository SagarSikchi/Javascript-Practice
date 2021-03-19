/* Title: Strings in javascript.
 * Author: Sagar Sikchi
 */

'use strict'
let s;
s = `"Hello there! How are you?", said by John`;
console.log(s);
s = "'Hello there! How are you?', said by John";
console.log(s);
s = '"Hello there! How are you?", said by John';
console.log(s);
s = "\"Hello there! How are you 'Jerry'?\", said by John"; // backslash is an Escaping character
console.log(s);
let a = 10, b = 20, c = a + b;
console.log(`${a} + ${b} = ${c}`);

let x = new String("HI");
let z = new String("HI");
let y = "HI";
console.log(x == y);   // true
console.log(x == z);   // false
console.log(x === y);  // false
console.log(x === z);  // false
console.log(typeof x); // Object
console.log(typeof y); // string
console.log(typeof z); // Object
console.log(s.length); // 49 ==> length

// s = "\'Honey'";
// console.log(s.length); // 'Honey' ==> 7

console.log(s.indexOf("Jerry")); // Starting index of "Jerry" ==> 27
console.log(s.indexOf("Sagar")); // not found index of "Sagar" ==> (-1)
console.log(s.indexOf("H"));     // 1 - first occurrence
console.log(s.lastIndexOf("H")); // 14 - last occurrence
console.log(s.indexOf("n"));     // 48 - first occurrence
console.log(s.lastIndexOf("n")); // 48 - last occurrence
console.log(s.indexOf("a", 20)); // 38 - first occurrence after index 20
console.log(s.indexOf("a"));     // 18 - first occurrence

//  S   a   g  a  r  S  i  k  c  h  i
//  0   1   2  3  4  5  6  7  8  9  10
// -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
console.log("SagarSikchi".lastIndexOf("i", 8));  // 6 - last occurrence from index 8 in backward direction
console.log("SagarSikchi".lastIndexOf("i"));     // 10 - last occurrence
console.log("SagarSikchi".search("i"));          // 6 - similar to indexOf() method, but don't have second parameter - used for regular expressions
console.log("SagarSikchi".search("z"));          // -1

// Slicing in Strings
// Slicing won't affect original string - slice will be duplicated and if needed, placed in a new variable
x = "SagarSikchi";
y = x.slice(5, 11);    // 5 - includes; 11 - excludes
console.log(x.length); // 11
console.log(x);        // SagarSikchi
console.log(y);        // Sikchi
z = x.slice(0, -6);    
console.log(z);        // Sagar - excludes -6

// substring - similar to slice method
// slice - accept negative values
// substring - not accept negatives values
// substr - accept negative values
y = x.substring(5, 11);    // 5 - includes; 11 - excludes
console.log(y);            // Sikchi
y = x.substr(0, 5);        // 0 - includes; 5 - excludes
console.log(y);            // Sagar
y = x.substr(5);           // 5 - includes; till last
console.log(y);            // Sikchi
y = x.substr(-6);          // -6 - includes; till last
console.log(y);            // Sikchi

// replace - replaced string should be stored in new variable
x.replace("rS", "rOmprakashS");
console.log(x);                         // no change - SagarSikchi
x = x.replace("rS", "rOmprakashS");
console.log(x);                         // SagarOmprakashSikchi
y = x.replace("rS", "rOmprakashS");
console.log(x);                         // SagarOmprakashSikchi

// To replace every occurrence ==> use regular expressions and the g flag - global search
s = "this this this this";
console.log(s);                  // this this this this
s = s.replace(/this/i, "That");  // i - case insensitive
console.log(s);                  // This this this this
s = s.replace(/this/ig, "That"); // i - case insensitive and g - global(all)
console.log(s);                  // That That That That

s = s.toLowerCase();
console.log(s);         // that that that that
s = s.toUpperCase(s);
console.log(s);         // THAT THAT THAT THAT
s = "Sagar ".concat("Sikchi");
console.log(s);                  // Sagar Sikchi
s = "Sagar ".concat("Omprakash ", "Sikchi");
console.log(s);                  // Sagar Omprakash Sikchi
console.log(s.endsWith("i"));    // true
console.log(s.endsWith("s"));    // false
console.log(s.startsWith("S"));  // true
console.log(s.startsWith("i"));  // false

// trim() - Trims extra spaces from either side of the string
x = "   This     This!     ";
console.log(x.trim());  // This     This!
console.log(x);         // "   This     This!     "

// charAt() - no negative values
console.log(s.charAt(6)); // O
y = s.charAt(-1);
console.log(y);           // no output

// charCodeAt() - get ASCII values
y = s.charCodeAt(6);
console.log(y);           // 79

// split() and join() ==>
s = "Sagar Omprakash Sikchi";
y = s.split();
console.log(y);  // ["Sagar Omprakash Sikchi"]
y = s.split(' ');
z = y;
console.log(z);  // (3) ["Sagar", "Omprakash", "Sikchi"]
console.log(y);  // (3) ["Sagar", "Omprakash", "Sikchi"]
y = s.split('S');
console.log(y);  // (3) ["", "agar Omprakash ", "ikchi"]
z = z.join(" ");
console.log(z);  // Sagar Omprakash Sikchi