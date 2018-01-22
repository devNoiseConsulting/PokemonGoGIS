# Pokemon Go GIS Tools

Some scripts to help organize Pokemon Go Points of Interest.


## Some useful regex for munging data
-   `^(".*"),(-?[0-9\.]+),(-?[0-9\.]+)$` => `$1\t$2\t$3`
-   `^(.*)\.$` => `"$1"`
