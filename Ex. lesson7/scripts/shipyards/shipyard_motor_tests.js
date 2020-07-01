describe("MotorShipyard", () => {
  let motorShipyard;

  beforeEach(() => {
    motorShipyard = new MotorShipyard("MotorShipyard");
  });

  describe("creates motor shipyard correctly", () => {
    it("returns object", () => {
      assert.isObject(motorShipyard);
    });
  });

  describe("createMotorShip", () => {
    it("returns instance of MotorShip", () => {
      const ship = motorShipyard.createMotorShip("MotorShip", 100, "steel");
      assert.instanceOf(ship, MotorShip);
    });
  });

  describe("changeBoat", () => {
    it("returns new MotorShip", () => {
      const ship = new MotorShip("MotorShip", 100, "steel");
      const newShip = motorShipyard.changeBoat(ship);
      assert.instanceOf(newShip, MotorShip);
    });
  });

  it("throws an error 'Даная верфь не подходит к этому типу корабля!'", () => {
    const ship = new SailingShip("SailingShip", 2, 30);
    assert.throws(
      () => {
        motorShipyard.changeBoat(ship);
      },
      Error,
      "Даная верфь не подходит к этому типу корабля!"
    );
  });
});
