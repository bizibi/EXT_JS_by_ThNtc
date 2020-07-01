describe("SailingShipyard", () => {
  let sailingShipyard;

  beforeEach(() => {
    sailingShipyard = new SailingShipyard("SailingShipyard");
  });

  describe("creates sailing shipyard correctly", () => {
    it("returns object", () => {
      assert.isObject(sailingShipyard);
    });
  });

  describe("createSailingShip", () => {
    it("returns instance of SailingShip", () => {
      const ship = sailingShipyard.createSailingShip("SailingShip", 2, 30);
      assert.instanceOf(ship, SailingShip);
    });
  });

  describe("changeBoat", () => {
    it("returns new SailingShip", () => {
      const ship = new SailingShip("SailingShip", 2, 30);
      const newShip = sailingShipyard.changeBoat(ship);
      assert.instanceOf(newShip, SailingShip);
    });
  });

  it("throws an error 'Даная верфь не подходит к этому типу корабля!'", () => {
    const ship = new MotorShip("MotorShip", 100, "carbone");
    assert.throws(
      () => {
        sailingShipyard.changeBoat(ship);
      },
      Error,
      "Даная верфь не подходит к этому типу корабля!"
    );
  });
});
