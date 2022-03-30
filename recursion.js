function factorial(n) {
    if (n === 0 || n < 0) return 1;
    else return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  
  const array = [1, 2, 3, 4];
  
  function recursionLinearSearch(array, length, target, i) {
    if (i > length) return 'NOT FOUND';
    if (array[i] === target) return i;
    if (i <= length && array[i] !== target)
      return recursionLinearSearch(array, length, target, i + 1);
  }
  
  console.log(recursionLinearSearch(array, array.length, 4, 0));
  