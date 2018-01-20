const fs = require('fs');
const path = require('path');
const afar = require('afar');

const pathName = process.argv[2];
const origLat = process.argv[3];
const origLng = process.argv[4];
const maxDistance = process.argv[5];

if (pathName && origLat && origLng && maxDistance) {
  formatFile(pathName);
} else {
  var node = path.basename(process.argv[0]);
  var script = path.basename(process.argv[1]);

  console.log(
    'Usage: ' + node + ' ' + script + ' <filename> <lat> <lng> <distance>'
  );
}

function formatFile(fileName) {
  var poi;
  try {
    var text = fs.readFileSync(fileName, 'utf8');

    poi = text
      .split('\n')
      .map(point => point.split('\t'));
      // .filter(
      //   point =>
      //     dist.getDistance(origLat, origLng, point[1], point[2]) < maxDistance
      // );
  } catch (e) {
    console.log('ERROR 1: file: ' + fileName + ' error: ' + e.message);

    return false;
  }

  poi = poi.filter(
    point =>
      afar(origLat, origLng, point[1], point[2]) < maxDistance
  );

  try {
    var out = fs.createWriteStream(fileName, {
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
