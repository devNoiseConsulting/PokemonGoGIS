#!/bin/sh

# cut -f1-3 ./data/megaDump.csv > ./data/clusters.csv
# node poiCluster.js ./data/clusters.csv

cp ./data/megaDump.csv ./data/zone-1.csv
node index.js ./data/zone-1.csv 40.211785 -75.549030 6

cp ./data/megaDump.csv ./data/zone-2.csv
node index.js ./data/zone-2.csv 40.2020175 -75.444939 9

cp ./data/megaDump.csv ./data/zone-3.csv
node index.js ./data/zone-3.csv 40.135492 -75.526528 6

cp ./data/megaDump.csv ./data/zone-4.csv
node index.js ./data/zone-4.csv 40.1421369 -75.4261191 5

cp ./data/megaDump.csv ./data/zone-5.csv
node index.js ./data/zone-5.csv 40.1214970 -75.3399050 5

cp ./data/megaDump.csv ./data/zone-6.csv
node index.js ./data/zone-6.csv 40.0996742 -75.4059501 6

cp ./data/megaDump.csv ./data/zone-7.csv
node index.js ./data/zone-7.csv 40.0531847 -75.518217 7

cp ./data/megaDump.csv ./data/zone-8.csv
node index.js ./data/zone-8.csv 40.088199 -75.270557 5

cp ./data/megaDump.csv ./data/zone-9.csv
node index.js ./data/zone-9.csv 40.035 -75.3875 5


cp ./data/clusters.csv ./data/zone-1-poi.csv
node index.js ./data/zone-1-poi.csv 40.211785 -75.549030 6

cp ./data/clusters.csv ./data/zone-2-poi.csv
node index.js ./data/zone-2-poi.csv 40.2020175 -75.444939 9

cp ./data/clusters.csv ./data/zone-3-poi.csv
node index.js ./data/zone-3-poi.csv 40.135492 -75.526528 6

cp ./data/clusters.csv ./data/zone-4-poi.csv
node index.js ./data/zone-4-poi.csv 40.1421369 -75.4261191 5

cp ./data/clusters.csv ./data/zone-5-poi.csv
node index.js ./data/zone-5-poi.csv 40.1214970 -75.3399050 5

cp ./data/clusters.csv ./data/zone-6-poi.csv
node index.js ./data/zone-6-poi.csv 40.0996742 -75.4059501 6

cp ./data/clusters.csv ./data/zone-7-poi.csv
node index.js ./data/zone-7-poi.csv 40.0531847 -75.518217 7

cp ./data/clusters.csv ./data/zone-8-poi.csv
node index.js ./data/zone-8-poi.csv 40.088199 -75.270557 5

cp ./data/clusters.csv ./data/zone-9-poi.csv
node index.js ./data/zone-9-poi.csv 40.035 -75.3875 5