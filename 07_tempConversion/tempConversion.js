const convertToCelsius = function(temperature) {
  let c = (5/9) * (temperature - 32)
  if(Number.isInteger(c)){
    return c
  }else{
    return parseFloat(c.toFixed(1))
  }
};

const convertToFahrenheit = function(temperature) {
  let f = (9/5) * temperature + 32
  if(Number.isInteger(f)){
    return f
  }else{
    return parseFloat(f.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
