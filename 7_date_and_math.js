/* Title: Date and Math in javascript.
 * Author: Sagar Sikchi
 */

/* Date Object - displays the date and time based on user's browser */
/* Displays the date in a string in the time zone of the user's browser */

let default_date = new Date(); /* Date constructor - gives current date */
console.log("Default date                     : " + default_date);

/* In javascript, month starts from 0 */
/* Customized Date: Date(year, month, day, hours, minutes, seconds, milliseconds) */
let customized_date = new Date(2020, 2, 7, 14, 57, 60, 117);
console.log("Date(2020, 2, 7, 14, 57, 60, 117): " + customized_date);
customized_date = new Date(2000, 2, 7, 14);
console.log("Date(2000, 2, 7, 14)             : " + customized_date);
customized_date = new Date(2010, 5);
console.log("Date(2010, 5)                    : " + customized_date);
customized_date = new Date(10, 5);
console.log("Date(10, 5)                      : " + customized_date);
customized_date = new Date(2020); /* One parameter will be considered as milliseconds */
console.log("Date(2020)                       : " + customized_date);

/* Math Object - Predefined Functions and Properties */
console.log("PI Value: " + Math.PI);

/* Round off -
    if n >= 0.5 - highest
    if n < 0.5 - lowest
*/
console.log(`Math.round(55.78)          : ${Math.round(55.78)}
Math.round(55.48)           : ${Math.round(55.48)}
Math.round(55.5)            : ${Math.round(55.5)}
Math.ceil(55.18)            : ${Math.ceil(55.18)}
Math.ceil(55)               : ${Math.ceil(55)}
Math.floor(55)              : ${Math.floor(55)}
Math.floor(55.98)           : ${Math.floor(55.98)}
Math.pow(55, 2)             : ${Math.pow(55, 2)}
Math.pow(55, 0.2)           : ${Math.pow(55, 0.2)}
Math.pow(4, 200)            : ${Math.pow(4, 200)}
Math.sqrt(55)               : ${Math.sqrt(55)}
Math.sqrt(4)                : ${Math.sqrt(4)}
Math.trunc(55.98)           : ${Math.trunc(55.98)}
Math.trunc(55.000)          : ${Math.trunc(55.000)}
Math.trunc(0.98)            : ${Math.trunc(0.98)}
Math.abs(20)                : ${Math.abs(20)}
Math.abs(-20)               : ${Math.abs(-20)}
Math.abs(20.10)             : ${Math.abs(20.10)}
Math.abs(-20.10)            : ${Math.abs(-20.10)}
Math.log(10)                : ${Math.log(10)}
Math.log(Math.sin(60))      : ${Math.log(Math.sin(60))}
Math.log(Math.cos(30))      : ${Math.log(Math.cos(30))}
Math.log(Math.tan(45))      : ${Math.log(Math.tan(45))}
Math.min(10, 20, 30, 40)    : ${Math.min(10, 20, 30, 40)}
Math.max(10, 20, 30, 40)    : ${Math.max(10, 20, 30, 40)}
Math.random()               : ${Math.random()}
Math.random()               : ${Math.random()}
Math.random()               : ${Math.random()}
Math.ceil(Math.random()*10) : ${Math.ceil(Math.random()*10)}
Math.ceil(Math.random()*100): ${Math.ceil(Math.random()*100)}
Math.floor(Math.random()*10): ${Math.floor(Math.random()*10)}
Math.floor(Math.random()*100): ${Math.floor(Math.random()*100)}
Math.ceil(Math.random()*10) : ${Math.ceil(Math.random()*10)}
Math.ceil(Math.random()*100): ${Math.ceil(Math.random()*100)}
Math.floor(Math.random()*10): ${Math.floor(Math.random()*10)}
Math.floor(Math.random()*100): ${Math.floor(Math.random()*100)}`);