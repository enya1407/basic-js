module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return new Error[RangeError]();

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-prev":
        if (i - 1 >= 0) result.pop();
        break;
      case "--discard-next":
        if (i + 1 < arr.length) i += 1;
        break;
      case "--double-prev":
        if (i - 1 >= 0) result.push(arr[i - 1]);
        break;
      case "--double-next":
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
};