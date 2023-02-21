'use strict';
const dotenv = require('dotenv');
dotenv.config()

const process = require('process');
const {DB, DB_USER, DB_PASSWORD, NODE_ENV} = process.env
const HOST = NODE_ENV === 'production' ? process.env.DB_HOST : 'mysql-trilla'

config = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

module.exports = config;