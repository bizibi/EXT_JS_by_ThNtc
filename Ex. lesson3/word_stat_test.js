describe("sumCharCodes", () => {
  it("Отведайте", () => {
    const result = sumCharCodes("Отведайте");
    assert.equal(result, 9691);
  });
  it("этих .хру", () => {
    const result = sumCharCodes("этих .хру");
    assert.equal(result, 7714);
  });
  it("ничего не ввели", () => {
    const result = sumCharCodes("");
    assert.equal(result, 0);
  });
});
describe("wordStat", () => {
  it("Эталонный текст", () => {
    const result = wordStat("Lorem ipsum dolor sit amet.");
    assert.deepEqual(result, [
      { word: "Lorem", sum: 511 },
      { word: "ipsum", sum: 558 },
      { word: "dolor", sum: 544 },
      { word: "sit", sum: 336 },
      { word: "amet.", sum: 469 },
    ]);
  });

  it("Только пробелы", () => {
    const result = wordStat("                            ");
    assert.deepEqual(result, []);
  });
  it("Ничего не введено", () => {
    const result = wordStat("");
    assert.deepEqual(result, []);
  });

  it("Внезапные пробелы", () => {
    const result = wordStat("Lorem           ipsum   dolor sit   amet.");
    assert.deepEqual(result, [
      { word: "Lorem", sum: 511 },
      { word: "ipsum", sum: 558 },
      { word: "dolor", sum: 544 },
      { word: "sit", sum: 336 },
      { word: "amet.", sum: 469 },
    ]);
  });
  
});
