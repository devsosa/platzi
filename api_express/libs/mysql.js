const {Pool} = require('mysql');

const {config} = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

  const pool = new Pool({
    hconnectionString: URI
  });


module.exports = pool;
