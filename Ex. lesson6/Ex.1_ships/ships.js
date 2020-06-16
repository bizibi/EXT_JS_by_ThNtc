"use strict";

function Ship(name) {
  let _isAnchorDroped = false;
  this.name = name;
  this.position = { x: 0, y: 0 };
  this.speed = 0;
  this.moveTo = function (position) {
    if (_isAnchorDroped) throw new Error("You need to rise anchor");

    this.position = {
      x: position.x,
      y: position.y,
    };
  };

  this.isAnchorDroped = function () {
    console.log("isAnchorDroped", this);
    return _isAnchorDroped;
  };

  /**
   * @param {boolean} droped
   */
  this.dropAnchor = () => {
    if (this.speed !== 0) throw new Error("Speed must be 0");

    _isAnchorDroped = true;
  };
}

const ship = new Ship("Best ship");
ship.moveTo({ x: 10, y: 10 });
console.log(ship);

ship.dropAnchor();

ship.moveTo({ x: 20, y: 20 });
console.log(ship);

const ship2 = new Ship("Good ship 2");

// console.log(ship);
// console.log(ship.getAnchorDroped());
// // ship._isAnchorDroped = true; Так нельзя
// console.log(ship);
// console.log('  after 1 try', ship.getAnchorDroped());
// ship.speed = 0;
// ship.setAnchorDroped(true);
// console.log(ship);
// console.log(ship.getAnchorDroped());

// const car = {
//     model: 'Model X',
//     seats: 4,
// }

// dropAnchor(ship);
// dropAnchor(car);

// function dropAnchor(ship) {
//     console.log(ship);
//     console.log(typeof ship);

//     if (!(ship instanceof Ship))
//         throw new Error('Not a Ship');

//     ship.isAnchorDroped = true;
// }

// Save it

// const arr = {
//     '0': 'a',
//     '1': 'b',
//     length: 2,
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// Array.from(arr)
//      .forEach(item => console.log(item))

this.move = function (sideOfTheWorld) {
  switch (sideOfTheWorld) {
    case "u":
      this.position.y++;
      break;

    case "e":
      this.position.y--;
      break;

    case "w":
      this.position.x++;
      break;

    case "s":
      this.position.x--;
      break;

    default:
      throw new Error("Нет такой стороны света, используйте только W E N S!");
  }

  this.distance++;
  return true;
};

this.isAnchorDropped = function () {
  console.log("isAnchorDropped", this);
  return _isAnchorDropped;
};

this.dropAnchor = () => {
  _isAnchorDropped = true;
};

this.riseAnchor = () => {
  _isAnchorDropped = false;
};
