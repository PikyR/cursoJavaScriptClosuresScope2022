// ambito lexico 
const global = 0;

function myFunc() {
  const num = 11;
  console.log(global);

  function parent() {
    const innerNum = 22;
    console.log(num, global);

    function child() {
      console.log(innerNum, num, global);
    }

    return child()
  }

  return parent()
}

myFunc();