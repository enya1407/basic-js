module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return new Error[RangeError]();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let j = arr[i];
    if (j === "--double-next" && arr[i + 1] === "--double-next") {
      i += 2;
    } else if (j === "--discard-prev") {
      result.pop();
    } else if (j === "--double-next" && arr[i + 1] !== "--double-next") {
      result.push(j, j);
    } else if (j === "--double-prev") {
      result.pop(arr[i - 1]);
    } else if (j === "--discard-next") {
      i += 1;
    } else {
      result.push(j);
    }
  }
  return result;
};