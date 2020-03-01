const knex = require('knex');

const knexConfig = require('../knexfile');

const enviroment = process.env.DB_ENV || "development";

const db = knex(knexConfig[enviroment]);

module.exports = db;