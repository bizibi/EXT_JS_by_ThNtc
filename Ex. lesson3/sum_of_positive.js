/*  Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных элементов массива.
Сигнатура
sumOfPositive(arr: number[]): {count: number, sum: number}
Пример
исходный массив:
[-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
Результат
{
  count: 5,
  sum: 357,
} */

function sumOfPositive(array) {
  let positiveArr = array.filter((num) => num > 0);
  let sum = positiveArr.reduce(function (posSum, i) {
    return posSum + i;
  }, 0);
  return result = { count: positiveArr.length, sum: sum };
}

