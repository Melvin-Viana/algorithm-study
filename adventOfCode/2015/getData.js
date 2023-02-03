const fs = require('fs');
const getData = (input) => {

  try {
    const data = fs.readFileSync(input, 'utf8');
    return data;
  } catch(e) {
  console.error(e);
    return 'Data not here';
  }
}

module.exports = getData;