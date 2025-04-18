This repository contains a few files

My original plan was to build a cloud native db, or tunnelel local db, have a backend service run queries and convert information such as IP addresses and then have that data pulled into a user friendly GUI through API Platform/Symfony built web application. 
Unfortunately, due to money and time constraints, I was unable to finish my original orchestration and had to rely on my MVP product of utilizing Google Analytics (Looker Studio) or Retool.

"convertIP.js" is the script I used to call apis to convert IP addresses into usable information such as visitor org names and regions. This was used before my Looker Studio report pulled information from the .csv by running it as a Google Apps script.

"eGain visitor IP adjusted -Sheet1.csv" is the visitor weblog with the newly added information; downloadable for local use

"docker-compose.yml" contains instructions to pull docker images I built to host a local Postgres db and pgadmin4 server.

"eGain_Sales_Dashboard" is an offline version of the Looker Studios Report, which also contains a link to the online version.
