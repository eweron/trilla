'use strict';
const dotenv = require('dotenv');
dotenv.config()

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const process = require('process');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const db: Record<string, any> = {};

const {DB, DB_USER, DB_PASSWORD, NODE_ENV} = process.env
const HOST = NODE_ENV === 'production' ? process.env.DB_HOST : 'mysql-trilla'

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, { host: HOST, dialect: 'mysql'});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
