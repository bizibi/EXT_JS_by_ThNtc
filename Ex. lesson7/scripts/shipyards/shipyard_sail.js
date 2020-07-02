"use strict";

function SailingShipyard() {
  Shipyard.call(this);

  this.type = "sailing";

  this.createSailingShip = function (name, mastNumber, sailArea) {
    return new SailingShip(name, mastNumber, sailArea);
  };

  this.changeBoat = function (ship) {
    if (ship.type !== this.type)
      throw new Error("Даная верфь не подходит к этому типу корабля!");

    return new SailingShip(ship.name, ship.mastNumber, ship.sailArea);
  };
}

SailingShipyard.prototype = Object.create(Shipyard.prototype);
