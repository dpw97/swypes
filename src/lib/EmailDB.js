const MongoClient = require('./Mongo');

const getDb = () => {
  const db = MongoClient.mongoClient.db('EmailDB');
  if (db) {
    console.log('connected to email');
    return db;
  }
  return console.error('No database found');
};

exports.getDb = getDb;
