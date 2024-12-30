function myFunction(a, b) {
  // Explicit type conversion
  return a + Number(b);
}

console.log(myFunction(5, '10')); // Output: 15