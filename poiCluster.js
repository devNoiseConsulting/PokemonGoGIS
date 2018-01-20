const fs = require('fs');
const path = require('path');
const afar = require('afar');

const pathName = process.argv[2];

if (pathName) {
  formatFile(pathName);
} else {
  var node = path.basename(process.argv[0]);
  var script = path.basename(process.argv[1]);

  console.log('Usage: ' + node + ' ' + script + ' <filename>');
}

function formatFile(fileName) {
  console.log('dist', afar(40.104657, -75.46954, 40.10425, -75.472995));
  const compareNumbers = function(a, b) {
    return b[3] - a[3];
  }

  let poi;
  try {
    let text = fs.readFileSync(fileName, 'utf8');

    poi = text.split('\n').map(point => point.split('\t'));
  } catch (e) {
    console.log('ERROR 1: file: ' + fileName + ' error: ' + e.message);

    return false;
  }

  poi = poi.map((point, i, arr) => {
    point[3] = arr
      .map(v => afar(v[1], v[2], point[1], point[2]))
      .filter(v => v <= 0.5).length;
    return point;
  })
  .sort(compareNumbers)
  .filter((point, i, arr) => i < (arr.length / 2));

  let firstPoint = poi.shift();
  poi = poi.reduce((acc, point, i) => {
    let addPoint = true;
    acc.forEach(p => {
      if (afar(p[1], p[2], point[1], point[2]) <= 1) {
        addPoint = false;
      }
    });
    if (addPoint) {
      acc.push(point);
    }
    return acc;
  }, [firstPoint]);

  // console.log(poi.length);
  // console.log(poi[0], firstPoint);

  try {
    let out = fs.createWriteStream(fileName, {
      encoding: 'utf8'
    });
    out.write(poi.map(point => point.join('\t')).join('\n'));
    out.write('\n');
    out.end();
  } catch (e) {
    console.log("ERROR: Couldn't write content out to: " + fileName + '');
    console.log('ERROR: ' + e.message);
    return false;
  }
}
