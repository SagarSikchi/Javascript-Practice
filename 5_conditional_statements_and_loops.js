/* Title: Conditional Statements and Loops in javascript.
 * Author: Sagar Sikchi
 */

for(var i = 0; i < 31; i += 2) {
    var number = i;
    if(number % 3 == 0 && number % 5 == 0) {
        console.log(`Number ${number} is divisible by both 3 and 5.`);
    } else if(number % 3 == 0) {
        console.log(`Number ${number} is divisible by only 3.`);
    } else if(number % 5 == 0) {
        console.log(`Number ${number} is divisible by only 5.`);
    } else {
        console.log(`Number ${number} is neither divisible by 3 nor 5.`);
    }
}

switch(number % 2) {
    case 0:
        console.log("Number is even.");
        break;
    case 1:
        console.log("Number is odd.");
        break;
    default:
        console.log("Invalid number...!");
        break;
}

console.log("\n");
number = 0;

do {
    if(number % 3 == 0) {
        console.log("Number is divisible by 3, hence skipped...");
        number++;
        continue;
    }
    if(number % 20 == 0) {
        console.log("Number is divisible by 20, hence break...");
        break;
    }
    console.log("Number is : " + number);
    number++;
} while(true);