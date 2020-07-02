"use strict";

function SailingShip(name, mastNumber, sailArea) {
  Ship.call(this, name, mastNumber, sailArea);
  this.type = "sailing";
  this.mastNumber = mastNumber;
  this.sailArea = sailArea;
}

SailingShip.prototype = Object.create(Ship.prototype);
