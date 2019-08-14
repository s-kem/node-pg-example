#### Setting up Node Runtimes
  * Windows -- https://nodejs.org/en/download/
  * MacOS -- Install NVM -- https://github.com/nvm-sh/nvm

#### Running (assuming NPM is installed with node)
  * `npm install` -- Installs dependencies
  * `npm run start` -- Starts server. By default, listens for `POST` requests to `localhost:3333` and puts the value of `body.hello` into a test db.


#### Connecting To DB
* db.js `dbConfig` -- Modify values to match host, port, user, pass, and db name

#### Saving Data to DB
  * db.js `saveData` function -- Modify to parse POST result into neccesary SQL query

#### TODO
  * Finish dockerizing -- Easier to deploy & manage.


#### Potential Issues
  * No idea on app management once running -- All my experience is on managed AWS hardware or using cloud foundry -- https://github.com/Unitech/pm2 may be an option on the Windows VM?

#### Dependencies
  * express -- http framework for node servers
    * https://github.com/expressjs/express
  * pg -- SQL database connection manager
    * https://node-postgres.com/
  * piping -- Used to detect changes in the files and automatially refresh in dev mode
    * https://github.com/mdlawson/piping
