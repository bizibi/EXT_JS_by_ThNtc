/*2. Написать функцию, которая принимает текст, и возвращает массив объектов со структурой
word: само слово
code: сумма кодов всех символов слова
Словом можно считать символы между пробелами*/

/*function textToArray(text) {
  //проверка что вводится текст
  if (!text) throw new Error("Вы не ввели текст");

  let wordsArr = [];
  let words = text.split(" ");

  words.forEach((word) => {
    let i = 0;

    word.split("").map(function (char) {
      i += char.charCodeAt();
    });

    wordsArr[wordsArr.length] = { word: word, sum: i };
  });

  console.log(wordsArr);
}

console.log(textToArray("Это простой текст бла бла бла"));*/

function textToArray(text) {
  //проверка что вводится текст
  if (!text) throw new Error("Вы не ввели текст");

  let wordsArr = [];
  let words = text.split(" ");

  words.map((word) => {
    let i = 0;

    word.split("").map((char) => (i += char.charCodeAt()));

    wordsArr[wordsArr.length] = { word: word, sum: i };
  });

  console.log(wordsArr);
}

console.log(textToArray("Это простой текст бла бла бла"));
