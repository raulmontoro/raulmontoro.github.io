console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( 0 === false )            // === no type conversion

console.log( null === undefined ); // false
console.log( null == undefined ); // true
console.log( undefined > 0 ); // false (1)    undefined should not be compared
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

typeof true // "boolean"



let str = "123";
document.write(typeof str);

let int2 = Number(str);
document.write(typeof int2);


// becomes 0 in castings to integer
let age = null;

// becomes NaN in castings to integer
let age = undefined;        

// "undefined"
typeof undefined 

