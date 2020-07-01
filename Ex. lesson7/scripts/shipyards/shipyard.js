"use strict";

function Shipyard() {
  this.type = "";
  this.shipRepaint = function (ship, color) {
    ship.color = color;
  };

  this.shipRepair = function (ship) {
    if (ship.type !== this.type)
      throw new Error("На этой верфи не ремонтируют корабли данного типа!");

    ship.hitPoints = 100;
  };
}
