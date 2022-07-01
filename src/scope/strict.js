"use strict";

pi = 3.1416; // ReferenceError: pi is not defined
console.log(pi);

// Se puede utilizar dentro de funciones
function func() { 
  "use strict";
  i = 'item'; //ReferenceError: i is not defined
  console.log(i);
}

func();