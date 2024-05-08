function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function factorialText(num) {
  if (num === 1) return "1";
  return `${num} x ${factorialText(num - 1)}`;
}

console.log("factorial of 5:", factorial(5));
console.log("factorial of 5:", factorialText(5));

/* function factorialBoth(num){
    if (num === 1) return [1, '1'];
   return [num * factorialBoth(num - 1)[0], `${num} x ${factorialBoth(num - 1)[1]}` ]
  } */

//   console.log ('factorial of 5:', factorialBoth(5))

// return 5 * factorial(4) as first
// 4 * factorial(3)
// 3 * factorial(2)
// 2 * factorial(1)
// 1
