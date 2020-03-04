const db = require('../data/dbconfig');
const us = require('../models/users')

function insert(table, user){
  return db.insert(user).into(table);
}

function findBy(table, user){
  return db(table).where('username', user.username);
}

module.exports = {
  insert,
  findBy
}