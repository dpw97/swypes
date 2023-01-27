const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const EmailSchema = new Schema({
  email: String,
});
const EmailModel = model('EmailModel', EmailSchema);
exports.EmailModel = EmailModel;
