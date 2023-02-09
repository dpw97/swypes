const MongoClient = require('./Mongo');

const getDb = (dbName) => {
  const db = MongoClient.mongoClient.db(dbName);
  if (db) {
    console.log('connected to email');
    return db;
  }
  return console.error('No database found');
};

exports.getDb = getDb;
