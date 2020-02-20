module.exports = class DepthCalculator {
  calculateDepth(arr, depthCounter = 1) {
    let result = depthCounter;
    const depth = depthCounter;

    for (let i = 0; i < arr.length; i += 1) {
      let el = arr[i];
      if (Array.isArray(el)) {
        if (depth + 1 > result) result += 1;
        const newResult = this.calculateDepth(el, depth + 1);
        if (newResult > result) result = newResult;
      }
    }
    return result;
  }
};