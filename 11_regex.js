/* Title: Regex in javascript.
 * Author: Sagar Sikchi
 */

let string = "This is the Javascript String";
let regex1 = /Javascript/;
let regex2 = /javascript/;
let regex3 = /is/;

/* Test and Match Methods */
/* regex.test(string) */
/* string.match(regex) */
console.log("regex1.test(string): " + regex1.test(string));
console.log("regex2.test(string): " + regex2.test(string));
console.log("string.match(regex1): " + string.match(regex1));
console.log("string.match(regex2): " + string.match(regex2));
console.log("string.match(regex3): " + string.match(regex3));

/* Expression Modifiers - Flags */
/* g - global
   i - case-insensitive
   m - multiline flag
*/
regex3 = /is/g;
console.log("string.match(regex3): " + string.match(regex3));
regex2 = /javascript/i;
console.log("regex2.test(string): " + regex2.test(string));
regex1 = /Javascript/gim;
string = `This is the Javascript Language.
I like javascript language because it has Regular expressions.
Javascript is used in web development. Javascript #1 popular language.`;
console.log("String:\n" + string + "\n");
console.log("string.match(regex1): " + string.match(regex1));
regex1 = /Javascript/gm;
console.log("string.match(regex1): " + string.match(regex1));

/* Search Method - string.search(regex) */
console.log("string.search(regex1): " + string.search(regex1));
/* Replace Method - string.replace(old_string, new_string) */
regex1 = /Javascript/gim;
console.log("string.replace(regex1):\n" + string.replace(regex1, "Typescript"));

