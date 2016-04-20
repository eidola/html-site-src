# EIDOLA RECORDS SITE REVAMP
## GULP TO DO
* convert images to correct sizes, we probably need a config list and a loop and some way to identify which images go to which folder
`mogrify -path .src/assets/285x285 -resize 285x285^ -gravity Center -extent 285x285 .src/assets/_original/*`
* YAML to JSON - it might be easier to main the site if the current JSON data is seperated out into files formated as YAML and then converted, merged into relevant JSON files
