function sum(...args) {

  function recSum(num) {
    return sum(...args, num)
  }

  recSum.valueOf = function() {
    return args.reduce((acc, n) => acc + parseInt(n, 10), 0)
  };

  return recSum;
}

function sum2 (n) {
  const value = parseInt(n, 10);

  if (sum2.accum) {
    sum2.accum += value;
  } else {
    sum2.accum = value;
  }

  sum2[Symbol.toPrimitive] = () => {
    const result = sum2.accum;
    sum2.accum = 0; // Very important to reset value

    return result;
  };

  return sum2;
}

console.assert(+sum(1)(2) === 3, 'should return sum of arguments equal to 3');
console.assert(+sum2(1)(2) === 3, 'should return sum of arguments equal to 3');

console.assert(+sum(1)(2)(3)(4) === 10, 'should return sum of arguments equal to 10');
console.assert(+sum2(1)(2)(3)(4) === 10, 'should return sum of arguments equal to 10');

console.assert(+sum(1)(2)("10") === 13, 'should transform strings to numbers and return 13');
console.assert(+sum2(1)(2)("10") === 13, 'should transform strings to numbers and return 13');
