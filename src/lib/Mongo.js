const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

require('dotenv').config();

const connectionString = process.env.MONGODB_URI;
mongoose.connect = process.env.MONGODB_URI;
const mongoClient = new MongoClient(connectionString);

const mongoConnect = async () => {
  await mongoClient.connect();
  console.log('connected mongo client');
};

mongoConnect();

exports.mongoClient = mongoClient;
