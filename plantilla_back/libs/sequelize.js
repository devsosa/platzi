const {Sequelize} = require('sequelize');

const {config} = require('../config/config');
//const setupModels = require('./../db/models');

//const USER = encodeURIComponent(config.dbUser);
//const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = config.dbUrl;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true
});

//setupModels(sequelize);

//Realiza la creacion de la tabla
//sequelize.sync();

module.exports = sequelize;
