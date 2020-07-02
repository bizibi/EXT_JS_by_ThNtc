"use strict";

function MotorShipyard() {
  Shipyard.call(this);

  this.type = "motor";

  this.createMotorShip = function (name, power, material) {
    return new MotorShip(name, power, material);
  };

  this.changeBoat = function (ship) {
    if (ship.type !== this.type)
      throw new Error("Даная верфь не подходит к этому типу корабля!");

    return new MotorShip(ship.name, ship.mastNumber, ship.sailArea);
  };
}

MotorShipyard.prototype = Object.create(Shipyard.prototype);
