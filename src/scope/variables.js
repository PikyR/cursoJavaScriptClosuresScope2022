// VAR
var name;
name = "pky"; 
name; // pky

var lastName = 'coso';
lastName = 'coso 2';
lastName; // coso 2

var otherName = 'PK';
var otherName = 'P!kY';
otherName; // P!kY

// LET
let variable = 'var'; 
variable = 'varNew';
// let variable = 'coso'; // SyntaxError: Identifier 'variable' has already been declared
variable; // varNew

// CONST
const constant = 'constant';
// constant = 'new constant'; //TypeError: Assignment to constant variable.
// const constant = 'error'; // SyntaxError: Identifier 'constant' has already been declared
constant; // constant

/* CONST y arreglos */
const arreglo = [];
arreglo.push('🥇');
arreglo; // [ '🥇' ]

arreglo.pop();
arreglo; // []