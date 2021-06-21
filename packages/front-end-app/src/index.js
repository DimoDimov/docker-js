const greet = (name) => {
  let a = 3;
  a = 4;
  console.log(a);
  return `Hello, ${name}`;
};

console.log(greet('Ben327111'));

exports.greet = greet;
