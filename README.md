# blog-api

## Step 1:
`` npm i ``
## Step2:
### Set my db config
``Here: app/config/config.json``

## Step 3
``cd app``
#### Run script
``sequelize-auto -o "./models" -d <database> -h <host> -u <userName> -p  <password> -x  -e mysql``

## Step 4
``node server.js``
