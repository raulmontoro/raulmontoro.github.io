"use strict";


let a = "Hello World";
document.getElementById("p1").innerHTML = a;


document.write("aaa <br> bbb <br>");
document.write(a, "<br>");
document.write(a, "<br>");
document.write(a, "<br>");

window.alert(a);
console.log(a);


window.alert("hello");


let b = prompt('How old are you?', 100);
let c = prompt("Test", ''); // <-- for IE
let d = confirm("Are you the boss?"); // isBoss true if OK is pressed


document.write(`You are ${b} years old!`); // You are 100 years old!

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
