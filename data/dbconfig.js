const knex = require('knex');

const knexConfig = require('../knexfile');

const enviroment = process.env.DB_ENV || "deployment";

module.exports = knex(knexConfig[enviroment]);