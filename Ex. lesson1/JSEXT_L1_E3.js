let input = prompt("Укажите дату в формате ММ/ЧЧ/ГГГГ");
let arrDate = input.split("/");

if (arrDate[0] > 12 || arrDate[1] > 31 || arrDate[2].length < 4) {
  alert("Формат даты указан неверно, попробуйте еще раз");
} else {
  alert(arrDate[1] + "." + arrDate[0] + "." + arrDate[2]);
}
