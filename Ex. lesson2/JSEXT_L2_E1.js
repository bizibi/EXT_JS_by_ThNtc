function arrSumFunction(arr) {
  let negativeArr = arr.filter((i) => i < 0);
  let count = negativeArr.length;
  let sum = negativeArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return { count, sum };
}

console.log(arrSumFunction([1, -3, -9, 11, 10, -15, -100, 12, -500]));
