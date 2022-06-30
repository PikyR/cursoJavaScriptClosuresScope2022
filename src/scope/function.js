// Function scope
function print(){
  const userName = 'ana';

  console.log(userName);

  if (userName === 'ana') {
    console.log(`Hola ${userName}`);
  }
}

print();
userName; // ReferenceError: userName is not defined