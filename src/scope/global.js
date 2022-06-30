// variables 

var a;
var b = 'b';
b = 'bb';
var a = 'aa'; // reasignación

// Global Scope
var fruit = 'Apple';

function print(){
  console.log(fruit);
}

print(); // Apple

// Ejemplos

function countries() {
  country = "ARG";
  console.log('func: ',country);
}

countries();
console.log('Global Scope: ',country)