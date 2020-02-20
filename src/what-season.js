module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (typeof date !== "object" || Object.keys(date).length) {
    throw new Error();
  }
  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return "spring";
  } else if (month >= 5 && month <= 7) {
    return "summer";
  } else if (month >= 8 && month <= 10) {
    return "autumn";
  } else {
    return "winter";
  }
};