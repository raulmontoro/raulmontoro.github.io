/* number */
const let bool1 = true;
const let bool2 = true;
const let bool3 = false;
const let int1 = 100;
const let bigint1 = 1234567890123456789012345678901234567890n;  
const let float1 = 12.345;

/* string */
var str1 = "Hello";
var str2 = "World";
let str3 = "Bye";
let str4 = 'World';
let conc = `Hello ${str2}, ${str3 + str4}, ${1 + 2}` 


/* special numeric values */
let special1 = Infinity;
let special2 = -Infinity;
let special3 = NaN;


/* casting */
let str = String(bool1); // now value is a string "true"


typeof 0 // "number"
typeof 10n // "bigint"


document.write(typeof bool1); // boolean
document.write(typeof int1);
document.write(typeof str); // string




typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
