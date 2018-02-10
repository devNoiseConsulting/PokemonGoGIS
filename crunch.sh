#!/bin/sh

cp data/megaDump.csv data/megaDump-backup.csv

egrep "\tGym" ./data/megaDump.csv > ./data/knownGyms.csv
egrep "\tGym" ./data/megaDump.csv | cut -f1 > ./data/knownGyms.txt

node markKnown.js ./data/megaDump.csv ./data/RaidsSeen.txt

# cut -f1-3 ./data/megaDump.csv > ./data/clusters.csv
# node poiCluster.js ./data/clusters.csv

cp ./data/megaDump.csv ./data/zone-1.csv
node index.js ./data/zone-1.csv 40.211785 -75.54903 6
node FindS2Cells.js ./data/zone-1.csv

cp ./data/megaDump.csv ./data/zone-2.csv
node index.js ./data/zone-2.csv 40.2020175 -75.444939 9
node FindS2Cells.js ./data/zone-2.csv

cp ./data/megaDump.csv ./data/zone-3.csv
node index.js ./data/zone-3.csv 40.135492 -75.526528 6
node FindS2Cells.js ./data/zone-3.csv

cp ./data/megaDump.csv ./data/zone-4.csv
node index.js ./data/zone-4.csv 40.1421369 -75.4261191 5
node FindS2Cells.js ./data/zone-4.csv

cp ./data/megaDump.csv ./data/zone-5.csv
node index.js ./data/zone-5.csv 40.121497 -75.339905 5
node FindS2Cells.js ./data/zone-5.csv

cp ./data/megaDump.csv ./data/zone-6.csv
node index.js ./data/zone-6.csv 40.0996742 -75.4059501 6
node FindS2Cells.js ./data/zone-6.csv

cp ./data/megaDump.csv ./data/zone-7.csv
node index.js ./data/zone-7.csv 40.0475 -75.505 7
node FindS2Cells.js ./data/zone-7.csv

cp ./data/megaDump.csv ./data/zone-8.csv
node index.js ./data/zone-8.csv 40.0365 -75.3925 5
node FindS2Cells.js ./data/zone-8.csv

cp ./data/megaDump.csv ./data/zone-9.csv
node index.js ./data/zone-9.csv 40.0 -75.635 8
node FindS2Cells.js ./data/zone-9.csv

cp ./data/megaDump.csv ./data/zone-10.csv
node index.js ./data/zone-10.csv 40.088199 -75.270557 5
node FindS2Cells.js ./data/zone-10.csv

cat ./data/zone-*..s2Cells.csv | sort -u > ./data/s2cells.csv

cp ./data/clusters.csv ./data/zone-1-poi.csv
node index.js ./data/zone-1-poi.csv 40.211785 -75.54903 6

cp ./data/clusters.csv ./data/zone-2-poi.csv
node index.js ./data/zone-2-poi.csv 40.2020175 -75.444939 9

cp ./data/clusters.csv ./data/zone-3-poi.csv
node index.js ./data/zone-3-poi.csv 40.135492 -75.526528 6

cp ./data/clusters.csv ./data/zone-4-poi.csv
node index.js ./data/zone-4-poi.csv 40.1421369 -75.4261191 5

cp ./data/clusters.csv ./data/zone-5-poi.csv
node index.js ./data/zone-5-poi.csv 40.121497 -75.339905 5

cp ./data/clusters.csv ./data/zone-6-poi.csv
node index.js ./data/zone-6-poi.csv 40.0996742 -75.4059501 6

cp ./data/clusters.csv ./data/zone-7-poi.csv
node index.js ./data/zone-7-poi.csv 40.0475 -75.505 7

cp ./data/clusters.csv ./data/zone-8-poi.csv
node index.js ./data/zone-8-poi.csv 40.0365 -75.3925 5

cp ./data/clusters.csv ./data/zone-9-poi.csv
node index.js ./data/zone-9-poi.csv 40.0 -75.635 8

cp ./data/clusters.csv ./data/zone-10-poi.csv
node index.js ./data/zone-10-poi.csv 40.088199 -75.270557 5
