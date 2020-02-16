module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        result += 1;
        calculateDepth(arr[i]);
      }
    }
    return result;
  }
};