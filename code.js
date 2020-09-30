
function multiply( number , times ) {
  for (let i=1; i<=times ; i++){
    console.log(`${number} x ${i} = ${number * i}`);
  }
  return;
};

module.exports = multiply;
