const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const gymsFile = process.argv[3];

if (pathName && gymsFile) {
  formatFile(pathName);
} else {
  var node = path.basename(process.argv[0]);
  var script = path.basename(process.argv[1]);

  console.log('Usage: ' + node + ' ' + script + ' <filename> <gymsFile>');
}

function formatFile(fileName) {
  let poi;
  let gyms;
  try {
    let text = fs.readFileSync(fileName, 'utf8');

    poi = text.split('\n').map(point => point.split('\t'));

    text = fs.readFileSync(gymsFile, 'utf8');
    gyms = text.split('\n').filter(point => point);
  } catch (e) {
    console.log('ERROR 1: file: ' + fileName + ' error: ' + e.message);

    return false;
  }

  poi = poi.map((point, i, arr) => {
    if (gyms.indexOf(point[0]) !== -1) {
      point[3] = 'Gym';
      if (point[0] == arr[i - 1][0]) {
        point[4] = arr[i - 1][4] = 'Dup Name';
      }
    }
    return point;
  }).filter(point => point[0] !== '' || point[0] !== undefined);

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
