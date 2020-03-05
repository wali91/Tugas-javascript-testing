const repeatString = require("../src/06");

test("perulangan string", () => {
  expect(repeatString("makan-tidur" + " ", 3)).toEqual(
    "makan-tidur makan-tidur makan-tidur "
  );
});
