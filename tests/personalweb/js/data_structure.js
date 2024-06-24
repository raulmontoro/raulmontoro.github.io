/*  OBJECT
    associative array
    key-value
    not ordered

    data structure
    collection
    heterogeneous
    square bracket notation allows use of variables as key
    copied and stored by reference


    an object
    by key "name" store value "John"
    by key "age" store value 30
    multiword property name must be quoted
    
*/


// "object constructor" syntax
let user = new Object();

// "object literal" syntax
let user = {};  



let var1 = {     
  name: "John",  
  age: 30,        
  "likes birds": true,  
};


var1["likes birds"] = false;



document.write(var1.name); // John
document.write(var1.age); // 30
document.write(var1["likes birds"]); // false 

let key = "likes birds";
document.write(user[key]); // false 


delete user.age;
delete user["likes birds"];
