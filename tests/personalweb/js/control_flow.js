/*
    repetitions
*/

let i;

i = 0;
while (i < 3) { // shows 0, then 1, then 2
  document.write(i);
  i++;
}


i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

for (;;) {
  // repeats without limits
}


let sum = 0;
while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );





for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}



let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}


let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements, iterables: array, string; collections: lists, sets
for (let fruit of fruits) {
  alert( fruit );
}

for (let char of "test") {
  // triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}




/*
    branching, jumping 
*/

let b = 1000;

if (b < 2015) {
  document.write( 'Too early...' );
} else if (b > 2015) {
  document.write( 'Too late' );
} else {
  document.write( 'Exactly!' );
}
