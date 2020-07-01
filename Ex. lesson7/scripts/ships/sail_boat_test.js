describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship();
  });

  describe("creates ship", () => {
    it("returns object", () => {
      assert.isObject(ship);
    });
  });

  describe("isAnchorDroped", () => {
    it("returns false", () => {
      const anchorState = ship.isAnchorDroped();
      assert.equal(anchorState, false);
    });

    it("returns true", () => {
      ship.dropAnchor();
      const anchorState = ship.isAnchorDroped();
      assert.equal(anchorState, true);
    });
  });

  describe("dropAnchor", () => {
    it("throws an error 'Скорость должна быть ровна 0 узлов'", () => {
      ship.speed = 10;
      assert.throws(
        () => {
          ship.dropAnchor();
        },
        Error,
        "Скорость должна быть ровна 0 узлов"
      );
    });

    it("returns true", () => {
      ship.dropAnchor();
      assert.equal(ship.isAnchorDroped(), true);
    });
  });

  describe("riseAnchor", () => {
    it("isAnchorDropped() returns false", () => {
      ship.riseAnchor();
      assert.equal(ship.isAnchorDroped(), false);
    });
  });

  describe("moveTo", () => {
    let position = { x: 14, y: 5 };

    it("throws an error 'Вы должны поднять якорь'", () => {
      ship.dropAnchor();
      assert.throws(
        () => {
          ship.moveTo(position);
        },
        Error,
        "Вы должны поднять якорь"
      );
    });

    it("changes position", () => {
      ship.moveTo(position);
      assert.deepEqual(ship.position, position);
    });
  });

  describe("move", () => {
    it("throws an error 'Вы должны поднять якорь'", () => {
      ship.dropAnchor();
      assert.throws(
        () => {
          ship.move("w");
        },
        Error,
        "Вы должны поднять якорь"
      );
    });

    it("Увеличить дистанцию на Восток на единицу, координата х должна также увеличиться на единицу", () => {
      assert.increasesBy(
        () => {
          ship.move("e");
        },
        ship,
        "distance",
        1
      );
      assert.deepEqual(ship.position, { x: 1, y: 0 });
    });

    it("Увеличить дистанцию на Запад на единицу, координата х должна также увеличиться на минус единицу", () => {
      assert.increasesBy(
        () => {
          ship.move("w");
        },
        ship,
        "distance",
        1
      );
      assert.deepEqual(ship.position, { x: -1, y: 0 });
    });

    it("Увеличить дистанцию на Север на единицу, координата y должна также увеличиться на единицу", () => {
      assert.increasesBy(
        () => {
          ship.move("n");
        },
        ship,
        "distance",
        1
      );
      assert.deepEqual(ship.position, { x: 0, y: 1 });
    });

    it("Увеличить дистанцию на Юг на единицу, координата y должна также увеличиться на минус единицу", () => {
      assert.increasesBy(
        () => {
          ship.move("s");
        },
        ship,
        "distance",
        1
      );
      assert.deepEqual(ship.position, { x: 0, y: -1 });
    });
  });
});
