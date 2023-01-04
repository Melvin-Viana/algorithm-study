//thanks: https://github.com/SwampThingTom
//Part One: hash map
//Part Two: bfs -> cant use hash map because set cant too small 4000000 * 4000000 > 2^28; javascript can only hold 2^28
const data = require('./getData')('day15.txt').split('\n');

const parseLine = (line) => {
 const [sX, sY, bX, bY] = line
    .replace(/[A-Za-z:,]/g, '')
    .trim()
    .split('=')
    .filter(x=> x !== '')
    .map(Number);
  return [[sX, sY], [bX, bY]];
}
const createSensors = () => data.map(parseLine);

const findBeacons = ([x,y], distance, row, beacons) => {
  let yDistance = Math.abs(y-row)// Row -2 7+2
  //Row 16
  let startX = x+(yDistance-distance)
  while (Math.abs(startX-x) + yDistance < distance + 1) {
    beacons.add(`${startX},${row}`);
    startX++;
  }
}
const partOne = (sensors, row) => {
  const beacons = new Set();

    sensors.forEach(([signalPos, beaconPos]) => {
    const [signalX, signalY] = signalPos
    const [beaconX, beaconY] = beaconPos;
    // Math.abs(x1-x2) + Math.abs(y1-y2)
    const distance = Math.abs(signalX-beaconX) + Math.abs(signalY-beaconY);
    findBeacons([signalX, signalY], distance, row, beacons)

    beacons.delete(`${signalX},${signalY}`)
    beacons.delete(`${beaconX},${beaconY}`)
  });
  return beacons.size;
}

const getRange = ([signalPos, beaconPos], row) => {
  const [signalX, signalY] = signalPos
  const [beaconX, beaconY] = beaconPos;
  const distance = Math.abs(signalX-beaconX) + Math.abs(signalY-beaconY);
  let yDistance = Math.abs(row - signalY);
  let start= signalX-(distance-yDistance);
  let end= signalX+(distance-yDistance);
  return [start, end];

}

const checkEachCol = (start, end, row, sensors) => {
  //BFS on each signal, sort by start of range
  const sensorRangesSorted = sensors
  .map(sensor=>getRange(sensor, row)).sort(([s1,e1],[s2,e2])=>s1-s2)

  let [_, currEnd] = sensorRangesSorted[0];

  for(let [s, e] of sensorRangesSorted.slice(1)) {
    //If in between
    if(s > currEnd) {
      return s - 1;
    }else if(e > currEnd) {
      currEnd = e
    }
    if(e>end) return null;
  }
  return null;
};

const partTwo = (sensors, start, end) => {
  for(let row = start; row < end; row++) {
    let col = checkEachCol(start, end, row, sensors);
    if(col) return col * 4000000 + row;
  }
}
const sensors = createSensors();
// console.log(partOne(sensors,10))
// console.log(partOne(sensors,2000000))
// console.log(partTwo(sensors, 0, 20))
console.log(partTwo(sensors, 0, 4000000))

