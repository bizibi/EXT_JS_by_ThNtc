let input = prompt("Введите число");
let intermResult = 0;
let i = 0;

for (i = 0; input != ""; i++) {
  intermResult += parseFloat(input);
  alert("Промежуточный результат: " + intermResult);
  input = prompt("Вводите число");
}

alert(
  "Итоговая сумма: " +
    intermResult +
    "\nКоличество чисел: " +
    i +
    "\nСреднее арифметическое: " +
    intermResult / i
);
