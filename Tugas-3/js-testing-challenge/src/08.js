const arrayMirroring = (a = []) => {
  let globe = a.slice().reverse();
  // console.log(globe);
  let globeArr = a.concat(globe);
  // console.log(globeArr);
  return globeArr;
};
arrayMirroring([1, 2, 3]);
module.exports = arrayMirroring;
