"use strict";

function Ship(name) {
  let _isAnchorDroped = false;
  this.type = "";
  this.hitPoints = 100;
  this.color = "Белый";
  this.name = name;
  this.position = { x: 0, y: 0 };
  this.speed = 0;
  this.distance = 0;
  this.moveTo = function (position) {
    if (_isAnchorDroped) throw new Error("Вы должы поднять якорь");

    this.distance += this._calculatePassedDistance(this.position, position);

    this.position = {
      x: position.x,
      y: position.y,
    };
  };

  this.isAnchorDroped = function () {
    console.log("isAnchorDroped", this);
    return _isAnchorDroped;
  };

  this.dropAnchor = () => {
    if (this.speed !== 0) throw new Error("Скорость должна быть ноль узлов");

    _isAnchorDroped = true;
  };

  this.riseAnchor = () => {
    _isAnchorDroped = false;
  };

  this.move = function (direction) {
    if (this._isAnchorDroped) {
      throw new Error("Вы должны поднять якорь");
    }
    if (this._speed === 0) {
      throw new Error("Скорость должна быть не ноль узлов");
    }

    let { x, y } = this.position;

    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
    }

    this.moveTo({ x, y });
  };

  this._calculatePassedDistance = function (currentPosition, newPosition) {
    return Math.round(
      Math.sqrt(
        Math.pow(newPosition.x - currentPosition.x, 2) +
          Math.pow(newPosition.y - currentPosition.y, 2)
      )
    );
  };
}
