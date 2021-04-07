/* Title: Puzzles in javascript.
 * Author: Sagar Sikchi
 */

console.log("\n############################################################## Puzzle #1 ##############################################################\n");

console.log(`Problem Statement: Alternate String letters in Capital and Small Alphabets.
Example:
String ==> sagar
Result ==> SaGaR
(Even Index - Capital Letter, Odd Index - Small Letter)\n`);

function AlternateCaps(string) {
    let arr = string.split(' ');
    for(var i = 0; i < arr.length; i++) {
        let subArr = arr[i].split('');
        for(var j = 0; j < subArr.length; j++) {
            if(j % 2 == 0) {
                subArr[j] = subArr[j].toUpperCase();
            } else {
                subArr[j] = subArr[j].toLowerCase();
            }
        }
        arr[i] = subArr.join('');
    }
    return arr.join(' ');
}
var string = "This is the Javascript Language";
console.log(`String: ${string}
Result: ${AlternateCaps(string)}`);

console.log("\n############################################################## Puzzle #2 ##############################################################\n");

console.log(`Problem Statement: Calculate Compound Interest.\n`);

function compoundInterest(p, n, r) {
    r = r / 100;
    return p + (p * n * r);
}

let principal = 10000;
let period = 5;
let rate = 10;

console.log(`Principal Amount: ${principal}
Number of Years: ${period}
Rate of Interest: ${rate}
Compund Interest: ${compoundInterest(principal, period, rate)}\n`);

console.log("\n############################################################## Puzzle #3 ##############################################################\n");

console.log(`Problem Statement: Numbers in the Expanded Form.
Example:
Number ==> 12345
Result ==> 10000 + 2000 + 300 + 40 + 5  \n`);

function expandedForm(number) {
    number = number.toString().split('').reverse().join('');
    let array = [];
    for(let i = 0; i < number.length; i++) {
        let temp = parseInt(number.charAt(i)) * Math.pow(10, i);
        if(temp != 0) {
            array.push(temp);
        }
    }
    return array.reverse().join(' + ');
}

console.log("Solution ==>\n");
let number = 123456789;
console.log(`Number ==> ${number}
Expanded Form ==> ${expandedForm(number)}\n`);
number = 5700060;
console.log(`Number ==> ${number}
Expanded Form ==> ${expandedForm(number)}\n`);

console.log("\n############################################################## Puzzle #4 ##############################################################\n");

console.log(`Problem Statement: Check Palindrome String.\n`);

function checkPalindrome(string) {
    let reverseString = string.split('').reverse().join('');
    if(string == reverseString) return "Palindrome...";
    return "Not Palindrome...";
}
console.log("Solution ==>\n");
string = "123456789";
console.log(`String ==> ${string}
Result ==> ${checkPalindrome(string)}\n`);
string = "abcdedcba";
console.log(`String ==> ${string}
Result ==> ${checkPalindrome(string)}\n`);

console.log("\n############################################################## Puzzle #5 ##############################################################\n");

console.log(`Problem Statement: Count Down Timer.\n`);

startTimer(15, "Timer");
function startTimer(seconds, element) {
    let timer = document.getElementById(element); /* Call this function every single second */
    if(seconds < 10) {
        timer.innerHTML = "<h1>00:0" + seconds + "</h1>";
    }
    else {
        timer.innerHTML = "<h1>00:" + seconds + "</h1>";
    }
    if(seconds < 1) {
        timer.innerHTML = "<h1>00:00</h1>";
        clearTimeout(countDown);
    }
    seconds--;
    let countDown = setTimeout(startTimer, 1000, seconds, element);
}

console.log("\n############################################################## Thank You ##############################################################\n");