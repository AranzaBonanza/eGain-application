This repository contains a few files

My original plan was to build a cloud native db, or tunnel a local db, have a backend service run queries and convert information such as IP addresses and then have that data pulled into a user friendly GUI through an API Platform/Symfony plugging into a react web application. 
Unfortunately, due to money and time constraints, I was unable to finish my original vision and had to rely on my MVP product of utilizing Google Analytics (Looker Studio) or Retool. I utilized an API from IPinfo.io to fetch company names and locations from IP queries.

"convertIP.js" is the script I used to call apis to convert IP addresses into usable information such as visitor org names and regions.  I then uploaded a new .csv with the conversions into Google Sheets -> Studio.  The free edition could only make ~1000 calls per day so I was limited in how much information I could fetch.

"eGain visitor IP adjusted -Sheet1.csv" is the visitor weblog with the newly added information; downloadable for local use.  As previously stated, there is a limit to how many calls to IPinfo I could make, so I could only fill out around ~3000 fields.

"docker-compose.yml" contains instructions to pull docker images I built to host a local Postgres db and pgadmin4 server.

"eGain_Sales_Dashboard" is an offline version of the Looker Studios Report (https://lookerstudio.google.com/reporting/01567e52-e013-43fc-8695-4260f64dd154).
