const mebiToKibi = require("../src/03");

test("testing convert megabyte to kilobyte", () => {
  expect(mebiToKibi(1024)).toEqual("1.00 MB");
});
