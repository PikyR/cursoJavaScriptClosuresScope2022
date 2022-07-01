function print() {
  if (true) {
    console.log("primer if");
    if (true) {
      var fruit = "apple"; // function scope
      let fruit1 = "tomatoe"; // block scope
      const fruit2 = "orange"; // block scope

      console.log("let: ", fruit1); // let:  tomatoe
      console.log("const: ", fruit2); // const:  orange
    }
  }

  console.log("var: ", fruit);
  // console.log('let: ',fruit1); // ReferenceError: fruit1 is not defined
  // console.log('const: ',fruit2); // ReferenceError: fruit2 is not defined
}

print();

// console.log(fruit);
