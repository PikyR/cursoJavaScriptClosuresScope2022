function print() {
  let userName = 'pky';

  function printUserName() {
    return `Hola ${userName}`
  }

  return printUserName;
}

const p = print();

console.log(p); // [Function: printUserName]
console.log(p()); //Hola pky