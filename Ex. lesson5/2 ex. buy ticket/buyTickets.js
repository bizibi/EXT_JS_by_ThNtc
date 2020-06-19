let buyTickets = document.querySelector("#buy-tickets-form");

buyTickets.addEventListener("submit", buyTicketsSubmitHandler);

function buyTicketsSubmitHandler(event) {
  event.preventDefault();

  let inputData = {
    flightName: buyTickets.elements.flight.value,
    fullName: buyTickets.elements.fullname.value,
    type: buyTickets.elements.type.value,
  };

  let buyTime = timeStamp(inputData.flightName);

  try {
    const ticket = buyTicket(
      world.flights,
      formData.flightName,
      buyTime,
      formData.fullName,
      parseInt(formData.type)
    );
    if (ticket) {
      buyTickets.reset();
    }
    alert("Вы купили билет, номер места: " + ticket.seat);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

function timeStamp(flightName) {
  let flight = world.flights[flightName];

  if (flight) {
    return flightName.registrationStarts;
  } else {
    return Date();
  }
}

function validate() {
  let flightId = document.querySelector("#flightId");
  let userName = document.querySelector("#userName");

  if (!flightId.value) {
    flightId.style.border = "2px solid red";
    alert("Не введен номер рейса!!");
    return false;
  }
  if (!userName.value) {
    userName.style.border = "2px solid red";
    alert("Не введено имя!!");
    return false;
  }
  return true;
}
