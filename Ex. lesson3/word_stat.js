/* Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой
word: само слово
code: сумма кодов всех символов слова
Словом можно считать символы между пробелами
Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию, на нее так же написать тесты
Сигнатура
wordStat(text: string): {word: string: code: number}[]
Пример
исходный текст:
 
Lorem ipsum dolor sit amet.
 
результат:
[
  { word: 'Lorem', sum: 511 },
  { word: 'ipsum', sum: 558 },
  { word: 'dolor', sum: 544 },
  { word: 'sit', sum: 336 },
  { word: 'amet.', sum: 469 }
] */

//=====================Функция подсчета кодов символов========================//

function sumCharCodes(word) {
  return word.split("").reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
}

//=====================Функция слова в массив(wordStat)================================//

function wordStat(text) {
  let words = text.split(" ").filter((word) => word.length);
  return words.map((word) => {
    return { word: word, sum: sumCharCodes(word) };
  });
}
