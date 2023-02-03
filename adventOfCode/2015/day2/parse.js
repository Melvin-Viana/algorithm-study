const getData = require('../getData');

const data = getData('./input.txt');

const parsedData = () => {
  const lines = data.split('\r');
  const dimensions = lines.map((line) => {
    return line.split('x').map(Number);
  })
  return dimensions
}

module.exports = parsedData();