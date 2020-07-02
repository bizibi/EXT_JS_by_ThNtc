describe("MotorShip", () => {
  let motorShip;

  beforeEach(() => {
    motorShip = new MotorShip("MotorShip", 50, "Iron");
  });

  describe("created motor ship is correctly", () => {
    it("returns object", () => {
      assert.isObject(motorShip);
    });
  });
});
