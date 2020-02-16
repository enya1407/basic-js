module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i += 1) {
      let el = arr[i];
      if (Array.isArray(el)) {
        result += 1;
        calculateDepth(el);
      }
      return result;
    }
  }
};
// function replicate(times, number) {
//   if (times < 1) return []
//   else return [number].concat(replicate(times-1, number))
// }