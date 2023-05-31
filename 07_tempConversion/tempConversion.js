const convertToCelsius = function(f) {
  ans = (Math.round(10 * (f - 32) * 5 / 9)) / 10;
  return ans;
};

const convertToFahrenheit = function(c) {
  ans = (Math.round(10 * (c * ( 9 / 5) + 32)) / 10);
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
