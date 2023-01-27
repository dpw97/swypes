const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmailSchema = new Schema({
  email: String,
});

module.exports = mongoose.model('EmailModel', EmailSchema);
