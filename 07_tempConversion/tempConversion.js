const convertToCelsius = function(temp) {
  
  temp = (temp - 32) * (5 / 9);

  let roundedTemp = parseFloat(temp.toFixed(1));

  return roundedTemp;

};

const convertToFahrenheit = function(temp) {

  temp = temp * (9 / 5) + 32;

  let roundedTemp = parseFloat(temp.toFixed(1));

  return roundedTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
