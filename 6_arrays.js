/* Title: Arrays in javascript.
 * Author: Sagar Sikchi
 */

'use strict'

/* Array - store multiple values in the single variable */
let A = new Array(); /* A is an Array */
A = [1, 2, 3, 4, 5]; /* Values are separated by the comma in the square brackets */
console.log();

/* Accessing array elements - indexing starts from 0 */
console.log("A[0]: " + A[0]);
console.log("A[1]: " + A[1]);
console.log("A[2]: " + A[2]);
console.log("A[3]: " + A[3]);
console.log("A[4]: " + A[4]);
console.log();

/* Adding new element at the last */
A[5] = 6;
console.log("A[5]: " + A[5]);
A[6] = 7;
console.log("A[6]: " + A[6]);
console.log();

/* Type of Array is an object */
let B = ['one', 'two', 'three'];
console.log("B: " + B);

let C = new Array(1, 2, 3, 4, 5);
console.log("C: " + C);
C[0] = 'a';
C[1] = 'a';
C[2] = 'a';
C[3] = 'a';
C[4] = 'a';
console.log("C: " + C);
console.log(C);

console.log(`typeof A: ${typeof A}
typeof B: ${typeof B}
typeof C: ${typeof C}`);

console.log(`A instanceof Array: ${A instanceof Array}
B instanceof Array: ${B instanceof Array}
C instanceof Array: ${C instanceof Array}`);
console.log();

/* Looping through an array */
var sum = 0;
for(var i = 0; i < A.length; i++) {
    console.log("A[i]: " + A[i]);
    sum += A[i];
}
console.log("Sum of A: " + sum);
console.log();

/* Array methods and properties */
/* array.length = gives length of the length 
   array.push(elements) = add elements at the end of the array 
   array.pop() = remove last element 
   array.join(parameter) = join the elements of the array in a string form
*/
console.log(`A.length: ${A.length}
A.push('10', Infinity, NaN): ${A.push("10", Infinity, NaN)}
A.length: ${A.length}
A.pop(): ${A.pop()}
A.length: ${A.length}
A: ${A}`);
console.log();
for(var i = 0; i < A.length; i++) {
    console.log(`A[i]: ${A[i]} and typeof A[i]: ${typeof A[i]}`);
}
C = [1, 1, 1, 1, 1, 1, 1, 1];
console.log("\nC.join(':'): " + C.join(':'));
console.log(`typeof C.join(:): ${typeof C.join(':')}`);
console.log();
for(var i = 0; i < C.length; i++) {
    console.log(`C[i]: ${C[i]} and typeof C[i]: ${typeof C[i]}`);
}
console.log();

/* 2-Dimensional Array */
B = [1, 'one', true, 'a', 1.0, [1, 2, 3], A];
console.log("B: " + B);
console.log(B);
console.log();
for(var i = 0; i < B.length; i++) {
    console.log(`B[i]: ${B[i]} and typeof B[i]: ${typeof B[i]}`);
}
console.log();
console.log("B[6][8]: " + B[6][8]);
console.log("\nB.join('---'): " + B.join('---'));
console.log("\nB[B.length-1].join('---'): " + B[B.length-1].join('---'));
console.log();

