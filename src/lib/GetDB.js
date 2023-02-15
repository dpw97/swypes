const MongoClient = require('./Mongo');

const getDb = (dbName) => {
  const db = MongoClient.mongoClient.db(dbName);
  if (db) {
    console.log(`Connected to ${dbName}`);
    return db;
  }
  return console.error('No database found');
};

exports.getDb = getDb;
