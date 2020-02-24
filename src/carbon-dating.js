const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(parseFloat(sampleActivity)))
    return false;

  let result = Math.round(
    Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
      (0.693 / HALF_LIFE_PERIOD),
    ),
  );

  if (result < 1 || !isFinite(result)) return false;

  return result;
};