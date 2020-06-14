function makeTime(hours, minutes) {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
  BH118: {
    name: "BH118",
    seats: 28,
    businessSeats: 4,
    registrationStarts: makeTime(10, 0),
    registartionEnds: makeTime(15, 0),
    tickets: [
      {
        id: "BH118-B50",
        flight: "BH118",
        fullName: "Ivanov I. I.",
        type: 0,
        seat: 18,
        buyTime: makeTime(2, 0),
        registrationTime: null,
      },
    ],
  },
};

/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 *
 * Гарантирует что найдет свободное место нужного типа или вернет null
 *
 * @param {Flight} flight
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
  let exists;
  let seat;
  let seatsOfType = 0;

  switch (type) {
    case 0: // standart
      const availableSeats = [];

      for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
        if (!flight.tickets.find((item) => item.seat === i))
          availableSeats.push(i);

      if (availableSeats.length === 0) return null;

      const index = Math.floor(Math.random() * availableSeats.length);
      return availableSeats[index];
    case 1: // business
      for (let i = 1; i <= flight.businessSeats; i++)
        if (!flight.tickets.find((item) => item.seat === i)) seatsOfType++;

      if (seatsOfType === 0) return null;

      do {
        seat = Math.floor(Math.random() * flight.businessSeats) + 1;
        exists = flight.tickets.find((item) => item.seat === seat);
      } while (exists);

      return seat;
    default:
      throw new Error(`Unknown type`);
  }
}

/**
 * Покупка билета на самолет
 *
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 *
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
  const flight = flights[flightName];

  if (!flight) throw new Error("Flight not found");

  if (flight.tickets.length >= flight.seats)
    throw new Error("No seats available");

  if (buyTime > flight.registartionEnds) throw new Error("Time away");

  const seat = findAvailableSeat(flight, type);
  if (!seat)
    throw new Error(
      `No seats of type ${type} available. You can choose another type`
    );

  let id;
  do {
    id = flight.name + "-" + Math.random().toString().substr(2, 3);
    exists = flight.tickets.find((item) => item.id === id);
  } while (exists);

  /**
   * @type {Ticket}
   */
  const ticket = {
    id,
    flight: flight.name,
    buyTime,
    fullName,
    registrationTime: null,
    type,
    seat,
  };

  flight.tickets.push(ticket);

  // return Object.assign({}, ticket);
  return {
    ...ticket,
  };
}

const a = buyTicket("BH118", makeTime(5, 10), "Petrov I. I.");
console.log(a);

function displayFlights() {
  console.log("*** List of all flights ***");
  console.table(flights);
}

function flightDetails(flightName) {
  console.log(`*** Details of flight ${flightName} ***`);
  const flight = flights[flightName];
  if (!flight) {
    console.warn("Flight not found");
    return;
  }

  console.table(flight);
  console.table(flight.tickets);
}

//====================================================================================================================//
//4. Для системы контроля авиабилетов, рассмотренной на занятии. Добавить функцию для получения отчета по рейсу//
/**
 * Отчет о рейсе на данный момент
 *
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

/**
 * Функция генерации отчета по рейсу
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */

function flightReport(flight, nowTime) {
  let flightObject = flights[flight];

  if (!flight) {
    console.log("Такого перелёта не существует");
    return false;
  }

  let registration =
    flightObject.registrationStarts < nowTime &&
    flightObject.registartionEnds > nowTime;
  let complite = nowTime > flightObject.registartionEnds;
  let countOfSeats = flightObject.seats;
  let reservedSeats = flightObject.tickets.length;
  let registeredSeats = 0;

  flightObject.tickets.forEach((ticket) => {
    if (ticket.registrationTime !== null) {
      ++registeredSeats;
    }
  });

  let report = {
    flight: flight,
    registration: registration,
    complete: complite,
    countOfSeats: countOfSeats,
    reservedSeats: reservedSeats,
    registeredSeats: registeredSeats,
  };

  return report;
}

/*
//========================================================================================================================//
//3. Для системы контроля авиабилетов, рассмотренной на занятии. Добавить функцию прохождения электронной регистрации//
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */

function eRegistration(ticket, fullName, nowTime) {
  //узнаем номер рейса, отделив его его из идентификатора билета по дефису//
  let flightName = ticket.split("-")[0];
  //получаем новый массив из номера рейса//
  let flight = flights[flightName];
  //проверяем что купленный билет есть в массиве всех проданных билетов и что имя пассажира совпадает//
  let customerTicket = flight.tickets.find((boughtTicket) => {
    boughtTicket.id === ticket && boughtTicket.fullName === fullName;
  });

  if (!customerTicket) {
    console.log("Билет не найден");
    return false;
  }

  if (
    flight.registrationStarts < nowTime &&
    flight.registartionEnds > nowTime
  ) {
    customerTicket.registrationTime = nowTime;
    return true;
  } else {
    return false;
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
/*  Реализовать функцию flightDetails(flightName) которая принимает объект рейса и будет выводить в контейнер <div id=”flight-details”></div> отчет по 
рейсу и отображать список купленных билетов: номер билета, место, полное имя пассажира, прошел ли регистрацию на рейс. */

function flightDetails(flightName) {
  let flight = flights[flightName];
  bordingPass(flight);

  if (flight.tickets) {
    ticketsTemplate(flight.tickets);
  }
}

function ticketsTemplate(tickets) {
  const ticketsOutput = document.querySelector("#tickets");
  tickets.forEach(function (ticket) {
    let ul = document.createElement("ul");
    let ticketForms = [
      `number: ${ticket.id}`,
      `seat: ${ticket.seat}`,
      `full name: ${ticket.fullName}`,
      `registartion: ${ticket.registartionTime !== null ? true : false}`,
    ];

    ticketForms.map(function (text) {
      let li = document.createElement("li");
      text = document.createTextNode(text);
      li.append(text);
      ul.append(li);
    });
    ticketsOutput.append(ul);
  });
}

function bordingPass(flight) {
  const outputFlDiv = document.querySelector("#flight-details");
  let ul = document.createElement("ul");
  for (let [key, value] of Object.entries(flight)) {
    if (key !== "tickets") {
      let li = document.createElement("li");
      let text = document.createTextNode(key + " : " + value);
      li.append(text);
      ul.append(li);
    }
  }
  outputFlDiv.append(ul);
}
flightDetails("BH118");
