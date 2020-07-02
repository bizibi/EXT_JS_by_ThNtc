"use strict";

function MotorShip(name, power, material) {
  Ship.call(this, name, power, material);
  this.type = "motor";
  this.power = enginePower;
  this.material = material;
}

MotorShip.prototype = Object.create(Ship.prototype);
