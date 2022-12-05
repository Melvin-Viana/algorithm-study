const fs = require('fs');
const getData = (input, func) => {

  try {
    const data = fs.readFileSync(input, 'utf8');
    console.log(func(data.split('\n')));
    return data;
  } catch(e) {
  console.error(e);
    return 'Data not here';
  }
}

module.exports = getData;