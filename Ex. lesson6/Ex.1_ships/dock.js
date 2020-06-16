"use strict";

function Dock(position) {
  this.position = {
    x: position.x,
    y: position.y,
  };

  this.moor = (ship) => {
    if (
      ship.position.x !== this.position.x ||
      ship.position.y !== this.position.y
    ) {
      throw new Error("Ошибка в координатах корабля");
    }

    if (ship.isAnchorDropped()) {
      throw new Error("Корабль уже пришвартован");
    }

    ship.dropAnchor();
    this.ships.push(ship);
  };

  this.unmoor = (ship) => {
    if (this.ships.includes(ship)) {
      ship.riseAnchor();
      this.ships = this.ships.filter((s) => s !== ship);
    } else {
      throw new Error("Неизвестный корабль");
    }
  };

  this.ships = [];
}
