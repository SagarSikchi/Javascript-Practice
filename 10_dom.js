/* Title: DOM in javascript.
 * Author: Sagar Sikchi
 */

/* DOM - Document Object Model 
   Document Manipulation with Javascript
   Manipulate HTML and CSS elements dynamically of the web page
*/

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
// With strict mode, you can not, for example, use undeclared variables.
'use strict'

/* Getting elements from HTML into Javascript */
/* getElementById() */
console.log(document.getElementById("h1")); // null
/* Change innerText of HTML element */
let h1 = document.getElementById("h1");
h1.innerText = "Hello from Javascript!";
console.log(h1);
// Alternative - document.getElementById("para").para.innerText = "Hello from Javascript!";

/* getElementsByTagName() */
let p = document.getElementsByTagName("p"); // Array of Elements
console.log(p);
console.log(p[2]);
console.log(p[1]);
console.log(p[0]);
p[1].innerText = "Changed Para2";
console.log(p[1]);

/* getElementsByClassName() */
let c = document.getElementsByClassName("Class");
console.log(c);
c[1].innerText = "Changed Para Again";
console.log(c[1]);

/* CSS query selectors */
let qs = document.querySelector("div.Class");
// console.log(qs);
qs.innerText = "Changed Div";
console.log(qs);

/* innerHTML() */
let div1 = document.getElementById("div1");
console.log(div1);
// div1.innerHTML = "This is the div";
div1.innerHTML = "<p>First</p><p>Second</p>";
console.log(div1);

/* Changing value of HTML attribute */
let link = document.getElementById("link");
console.log(link);
link.href = "https://bing.com";
link.innerText = "Bing";
console.log(link);

/* Changing, Adding, Nullify CSS properties */
link.style.textDecoration = "none";
if(confirm("Do you want to change the color of the link to blue?") == true) {
    link.style.color = "blue";
}
console.log(link);

/* Events and Events handlers in the Javascript */
/* Events - 
   onchange() - activate once a html element has changed, 
   onmouseover() - moved mouse over an element,
   onmouseout() - moved mouse away from element, 
   onkeydown() - presses key on element (any key), 
   onload() - page has finished loading on the browser,
   mouseenter() - mouse pointer enters element,
   mouseleave() - mouse pointer leaves the element,
   keypress() - when an element is pressed by a keyboard key,
   keydown() - when a key is pressing down,
   keyup() - when a key is letting up
*/

function btnClick() {
    alert("Thanks for clicking!");
}
function btnMouseOver() {
    btn1.style.background = "snow";
}
function btnMouseOut() {
    btn1.style.background = "wheat";
}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", btnClick);
btn1.addEventListener("mouseover", btnMouseOver);
btn1.addEventListener("mouseout", btnMouseOut);

function downEvent() {
    mainDiv.style.backgroundColor = "burlywood";
}
function upEvent() {
    mainDiv.style.backgroundColor = "white";
}

let mainDiv = document.getElementById("mainDiv");
mainDiv.addEventListener("mousedown", downEvent);
mainDiv.addEventListener("mouseup", upEvent);
