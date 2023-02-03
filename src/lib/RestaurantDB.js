const MongoClient = require('./Mongo');

const getDb = () => {
  const db = MongoClient.mongoClient.db('RestaurantDB');
  if (db) {
    console.log('connected to restaurant db');
    return db;
  }
  return console.error('No database found');
};

exports.getDb = getDb;
