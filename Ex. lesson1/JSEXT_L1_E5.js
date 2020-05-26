//считываем ввод, убираем пробелы//
let input = prompt("Введите текст на английском языке").replace(/ /g, "");

let arrVowel = "AEIOUaeiou";
let vow = 0;
let cons = 0;

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (char.toLowerCase() === char.toUpperCase()) {
    continue;
    //если true, пропускаем оставшуюся часть
  }
  if (arrVowel.indexOf(char) !== -1) {
    vow++;
  } else {
    cons++;
  }
}

alert("Гласных букв: " + cons + "\nСогласных: " + vow);
