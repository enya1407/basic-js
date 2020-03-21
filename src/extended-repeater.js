module.exports = function repeater(str, options) {
  let result = [];
  let separator = options.separator;
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);
  }
  return separator ? result.join(separator) : result.join("+");
};