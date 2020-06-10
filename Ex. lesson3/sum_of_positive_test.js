describe("sumOfPositive", () => {
  it("Ввод пустого массива", () => {
    const result = sumOfPositive([]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
  it("Эталонный массив [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58] ", () => {
    const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.deepEqual(result, { count: 5, sum: 357 });
  });
  it("Все положительные", () => {
    const result = sumOfPositive([1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(result, { count: 8, sum: 36 });
  });
  it("Все отрицательные", () => {
    const result = sumOfPositive([-1, -2, -3, -4, -5, -6, -7, -8]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
  it("Все ноли", () => {
    const result = sumOfPositive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
  it("Массив с NaN", () => {
    const result = sumOfPositive([1, 2, 3, NaN, 4, 5, 6, 7, 8]);
    assert.deepEqual(result, { count: 8, sum: 36 });
  });
  it("Массив с Infinity", () => {
    const result = sumOfPositive([1, 2, 3, Infinity, 4, 5, 6, 7, 8]);
    assert.deepEqual(result, { count: 9, sum: Infinity });
  });
  it("Массив с NaN Infinity", () => {
    const result = sumOfPositive([1, "два", 3, Infinity, 4, 5, 6, 7, 8]);
    assert.deepEqual(result, { count: 8, sum: Infinity });
  });
  it("Массив с нулями", () => {
    const result = sumOfPositive([1, 2, 3, 0, 4, 5, 6, 7, 8, 0, 0]);
    assert.deepEqual(result, { count: 8, sum: 36 });
  });
  it("Массив из нолей", () => {
    const result = sumOfPositive([0, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
});
