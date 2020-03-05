const leapYear = require("../src/04");

test("test leapyear or not leapyear", () => {
  expect(leapYear(2020)).toBe(true);
});
