module.exports = function countCats(matrix) {
  let result = 0;
  matrix.map(el =>
    el.forEach(el => {
      if (el === "^^") result += 1;
    }),
  );
  return result;
};