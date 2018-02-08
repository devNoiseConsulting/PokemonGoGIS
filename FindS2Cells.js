const fs = require('fs');
const path = require('path');
const S2 = require('s2-geometry').S2;

const pathName = process.argv[2];

if (pathName) {
  processFile(pathName);
} else {
  var node = path.basename(process.argv[0]);
  var script = path.basename(process.argv[1]);

  console.log('Usage: ' + node + ' ' + script + ' <filename>');
}

function processFile(fileName) {
  const compareNumbers = function(a, b) {
    return b[3] - a[3];
  };

  let poi;
  try {
    let text = fs.readFileSync(fileName, 'utf8');

    poi = text.split('\n').map(point => point.split('\t'));
  } catch (e) {
    console.log('ERROR 1: file: ' + fileName + ' error: ' + e.message);

    return false;
  }

  const level = 12;
  const s2Cells = poi
    .filter(point => point[3])
    // .map((point, i, arr) => S2.latLngToKey(point[1], point[2], level))
    .filter((cell, i, arr) => i == arr.indexOf(cell))
    .reduce((acc, point) => {
      const cell = S2.latLngToKey(point[1], point[2], level);
      acc.push(cell);
      // acc.push(S2.nextKey(cell));
      // acc.push(S2.prevKey(cell));
      const neighbors = S2.latLngToNeighborKeys(point[1], point[2], level);

      return acc.concat(neighbors);
    }, [])
    .filter((cell, i, arr) => i == arr.indexOf(cell))
    .map(cell => {
      const corners = S2.S2Cell.FromHilbertQuadKey(cell)
        .getCornerLatLngs()
        .reduce((acc, corner) => {
          acc.push(corner.lat);
          acc.push(corner.lng);
          return acc;
        }, []);

      return [cell, ...corners];
    });

  const newFileName = './data/s2Cells.csv';

  try {
    let out = fs.createWriteStream(newFileName, {
      encoding: 'utf8'
    });
    out.write(s2Cells.map(cell => cell.join('\t')).join('\n'));
    out.write('\n');
    out.end();
  } catch (e) {
    console.log("ERROR: Couldn't write content out to: " + fileName + '');
    console.log('ERROR: ' + e.message);
    return false;
  }
}
