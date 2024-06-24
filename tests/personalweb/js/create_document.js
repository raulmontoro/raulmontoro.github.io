   "use strict";

   // paragraph
   function createParag() {
        const p = document.createElement("P");
        const textNode = document.createTextNode("Hello World");
        p.appendChild(textNode);
        document.body.appendChild(p);
   }
    
    // returns an integer >=a  and <=b
    function randomInteger(a, b) {
        let c = Math.random();
        c = c*(Math.abs(b-a) + 1);
        c = c + Math.min(a,b);
        c = Math.trunc(c);
        return c;
    }

    let i = 0;
    while (i < 25) {
        let a = randomInteger(5, 25);
        document.write(a);
        document.write("<br>");
        createParag();
        ++i;
    }

